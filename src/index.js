const fs = require('fs')
const path = require('path')


module.exports = (ctx) => {
  const register = () => {
    ctx.helper.uploader.register('bilimallup', {
      handle,
      name: 'Bilibili 工房',
      config: config
    })
  }


  const postOptions = (SESSDATA, csrf, fileName, image) => {
    return {
      method: 'POST',
      url: `https://mall.bilibili.com/mall-up-c/common/image`,
      headers: {
        contentType: 'multipart/form-data',
        'Cookie': `SESSDATA=${SESSDATA}`
      },
      formData: {
        file: image,
        csrf
      }
    }
  }


  const handle = async (ctx) => {
    let userConfig = ctx.getConfig('picBed.bilimallup')
    if (!userConfig.SESSDATA) {
      ctx.emit('notification', {
        title: '请先配置SESSDATA',
        body: '链接已复制，请打开浏览器粘贴地址查看相关教程',
        text: 'https://www.yuque.com/docs/share/9035662a-f2bd-4ba2-aa24-73acb98635c7'
      })
      return
      // throw new Error('请先配置SESSDATA')
    }
    if (!userConfig.csrf) {
      ctx.emit('notification', {
        title: '请先配置csrf',
        body: '链接已复制，请打开浏览器粘贴地址查看相关教程',
        text: 'https://www.yuque.com/docs/share/9035662a-f2bd-4ba2-aa24-73acb98635c7'
      })
      return
      // throw new Error('请先配置SESSDATA')
    }

    const SESSDATA = userConfig.SESSDATA
    const Scheme = userConfig.Scheme
    const csrf = userConfig.csrf
    const imgList = ctx.output

    for (let i in imgList) {
      let image = imgList[i].buffer
      if (!image && imgList[i].base64Image) {
        image = Buffer.from(imgList[i].base64Image, 'base64')
      }

      const data = new Uint8Array(image)
      const fileName = imgList[i].fileName
      const filePath = path.join(__dirname, fileName)
      await fs.writeFileSync(filePath, data)
      const postConfig = postOptions(SESSDATA, csrf, fileName, fs.createReadStream(filePath))
      let body = await ctx.Request.request(postConfig)
      fs.unlink(filePath, () => {})
      body = JSON.parse(body)

      if (body.data) {
        delete imgList[i].base64Image
        delete imgList[i].buffer
        imgList[i].imgUrl = Scheme + ':' + body.data //GET LAST
      } else {
        ctx.emit('notification', {
          title: '上传失败',
          body: body.message
        })
        throw new Error(body.message)
      }
    }
    return ctx
  }


  const config = ctx => {
    let userConfig = ctx.getConfig('picBed.bilimallup')
    if (!userConfig) {
      userConfig = {}
    }
    return [
      {
        name: '如何获取SESSDATA和csrf',
        type: 'input',
        default: 'https://www.yuque.com/docs/share/9035662a-f2bd-4ba2-aa24-73acb98635c7',
        alias: '如何获取SESSDATA和csrf'
      },
      {
        name: 'SESSDATA',
        type: 'input',
        default: userConfig.SESSDATA,
        required: true,
        message: 'SESSDATA',
        alias: 'SESSDATA'
      },
      {
        name: 'csrf',
        type: 'input',
        default: userConfig.csrf,
        required: true,
        message: 'csrf',
        alias: 'csrf'
      },
      {
        name: 'Scheme',
        type: 'input',
        default: 'https',
        required: true,
        message: 'Scheme',
        alias: 'Scheme'
      }
    ]
  }
  return {
    uploader: 'bilimallup',
    config: config,
    register
  }
}

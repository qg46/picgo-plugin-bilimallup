## picgo-plugin-bilimallup

[![版本](https://img.shields.io/npm/v/picgo-plugin-bilimallup.svg?color=brightgreen)](https://www.npmjs.com/package/picgo-plugin-smms-user)
[![许可](https://img.shields.io/badge/license-mit-brightgreen.svg)](https://github.com/qg46/picgo-plugin-bilimallup/blob/main/LICENSE)


为 [PicGo](https://github.com/Molunerfinn/PicGo) 开发的一款插件，新增了[B站工房](https://gf.bilibili.com/) 图床。
使用新建商品的图片上传API（其实整个工房的图片都是同一个接口上传的）。填写`SESSDATA`和`bli_jct`即可，获取方式在下面。

【本项目基于[picgo-plugin-bilibili](https://github.com/xlzy520/picgo-plugin-bilibili)开发】

注意：您需要先安装node.js和nvm才可以导入插件，否则就会出现下图的报错
下载地址：https://nodejs.org/zh-cn https://github.com/coreybutler/nvm-windows/releases
![]()


碎碎念：可是明明都有类似的项目了，为啥还需要另外开发一个基于工房的？<br>
实际上，同类项目几乎全是基于`动态图片上传接口`开发的。<br>
用工房做图床的却几乎没有，即使是实现起来并不困难<br>
（也有可能是大部分开发人员都没有工房权限或者是根本就不知道有这功能）<br>
说白了就是为了让链接更好看一点，更加的 与 众 不 同<br>
纯属是兴趣使然罢了<br>
我总感觉在这放图比动态的接口更不容易被和谐？（动态的那个都已经烂大街了，毕竟谁能想到这儿还有人这样用啊喂）<br>
但仍不排除未来B站会删资源<br>
还是建议本地做好备份，万一有一天真的这样了就完蛋了（悲）<br>

对比

动态图链：https://i0.hdslb.com/bfs/new_dyn/49a04e449c5b3b8f9a0302386a758bb4524486358.jpg<br>
工房图链：https://i0.hdslb.com/bfs/mallup/mall/zw/yx/zwyx2zx103zz1010x313ywyyw2yy2z11.jpg

### 目录
1. [其他推荐](#其他推荐)
2. [安装](#安装)
3. [获取B站SESSDATA](#获取b站sessdata)
4. [图片样式](#图片样式)
5. [解决B站防盗链（403）](#解决b站防盗链-403)

### 其他推荐
- [浏览器插件-Bilibili图床](https://github.com/xlzy520/bilibili-img-uploader)
- [Typora插件-Bilibili图床](https://github.com/xlzy520/typora-plugin-bilibili)


### 安装

- 在线安装

  本人注册不了npm，恕无法提供本安装方式

- 离线安装

  克隆该项目，复制项目到 以下目录：
    - Windows: `%APPDATA%\picgo\`
    - Linux: `$XDG_CONFIG_HOME/picgo/` or `~/.config/picgo/`
    - macOS: `~/Library/Application\ Support/picgo/`

  切换到新目录执行 `npm install ./picgo-plugin-bilimallup`，然后重启应用即可。

上面这个是原项目作者给出的方案，我不会整折腾半天没装成（笑）<br>
下面是我比较推荐的安装方式（直观易懂）

下载该项目文件，找个地方解压缩（需要确保要加载的插件文件夹内没有被一个和压缩包文件名一样的子文件夹嵌套，有些解压缩软件喜欢干这种事。下图为正确解压后结构）<br>
![](https://i0.hdslb.com/bfs/mallup/mall/yy/3z/yy3zx0x1yx13012z133w2y032w10yxzz.png)

然后再在应用中选择`导入本地插件`<br>
![](https://i0.hdslb.com/bfs/mallup/mall/03/x0/03x03x2zw010yz13w0zwyy2x2zyy00x3.png)

最后选择这个文件夹，确定等待应用即可<br>
![](https://i0.hdslb.com/bfs/mallup/mall/10/3y/103y3wyx3wyww3zz000303033y2y00yy.png)

### 获取B站SESSDATA

1. 登录[B站](https://www.bilibili.com/)
2. 按`F12`打开控制台
3. 找到`SESSDATA`还有`bli_jct`复制即可

![](https://i0.hdslb.com/bfs/album/c78539a4883da29ed0dddfc0fa4e15057911e39d.png)



### 图片样式
例如原图： <a href="https://i0.hdslb.com/bfs/album/a18a3f8d666dc19c3216bef39a092e0e60c90eb4.png" rel="noreferrer" target=”_blank“>https://i0.hdslb.com/bfs/album/a18a3f8d666dc19c3216bef39a092e0e60c90eb4.png</a>

规定高宽，质量压缩: <a href="https://i0.hdslb.com/bfs/album/a18a3f8d666dc19c3216bef39a092e0e60c90eb4.png@14w_14h_1e_1c" rel="noreferrer" target=”_blank“>https://i0.hdslb.com/bfs/album/a18a3f8d666dc19c3216bef39a092e0e60c90eb4.png@14w_14h_1e_1c</a>


| Type  | Url     | 
| ------| --------|
| 原图  | baseURL/1.jpg  |
| 原分辨率，质量压缩  | baseURL/1.jpg@1e_1c.jpg  |
| 规定宽，高度自适应，质量压缩  | baseURL/1.jpg@104w_1e_1c.jpg   |
| 规定高，宽度自适应，质量压缩  | baseURL/1.jpg@104h_1e_1c.jpg   |
| 规定高宽，质量压缩  | baseURL/1.jpg@104w_104h_1e_1c.jpg   |
| 原分辨率，webp格式(占用最小)   | baseURL/1.jpg@104w_104h_1e_1c.webp |
| 规定高度，webp格式(占用最小)   | baseURL/1.jpg@104w_104h_1e_1c.webp |

格式：(图像原链接)@(\d+[whsepqoc]_?)*(\.(|webp|gif|png|jpg|jpeg))?$
- w:[1, 9223372036854775807] (width，图像宽度)
- h:[1, 9223372036854775807] (height，图像高度)
- s:[1, 9223372036854775807] (作用未知)
- e:[0,2] (resize，0:保留比例取其小，1:保留比例取其大，2:不保留原比例，不与c混用)
- p:[1,1000] (默认100，放大倍数，不与c混用)
- q:[1,100] (quality，默认75，图像质量)
- o:[0,1] (作用未知)
- c:[0,1] (clip，0:默认，1:裁剪)
- webp,png,jpeg,gif(不加则保留原格式)
- 不区分大小写，相同的参数后面覆盖前面
- 计算后的实际w*h不能大于原w*h，否则wh参数失效


### 解决B站防盗链（403）

>B站开启了防盗链，利用的是HTTP的Referer属性做判断。如果Referer是他白名单之外的网站，就会返回403

#### 全站图片使用

在html的head标签中设置如下标志，那么全站资源引用都不会携带referrer

```html
<meta name="referrer" content="no-referrer">
```



#### 新窗口打开

主要设置`rel="noreferrer"`，使用`window.open`打开的话是会默认携带`referrer`的，第一次还是会403

```html
<a rel="noreferrer" target="_blank"></a> 
```



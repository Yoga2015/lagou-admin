# Node.js项目   
lagou-admin 项目  
lagou-admin 项目 目录下，新建 frontend目录、backend目录  

# 技术选型
## 前端 （frontend）  
前端工程化环境 （webpack）  
CSS 预处理工具 （sass）  
前端编程工具 JS库：jQuery  
SPA : single page application （单页面应用） 路由 SME-Router  
JS模块化： ES Module ,CommonJS Module  
UI 组件库 ： BootStrap（AdminLTE）  

前端首先搭建一个工程化的环境，也就是webpack的环境。在webpack的眼里一切都是模块。  

lagou-admin\frontend>  yarn init -y  
这样就在frontend目录下创建了package.json ，package.json 里面就可以保存我们安装的那些包了

lagou-admin\frontend> yarn add webpack@4.44.2  -D
在开发的环境里面装 webpack ,安装完就可以使用它了，怎么使用？
得需要一个配置文件，在frontend里面新建一个文件：webpack.config.js

查看 webpack 帮助 :  webpack --help 提示要安装 webpack-cli
lagou-admin\frontend>  yarn add webpack-cli@3.3.12 -D  是在本地安装

npx 就是在全局里去找 已安装的模块
lagou-admin\frontend> npx webpack --help

接下来在frontend 目录下新建 src 目录 ，src即source 我们的源代码， 在src 目录下创建 app.js ，

这样就可以在webpack.config.js里编译 js 了 “ 刚刚创建的 app.js ”，怎么编译？

进入app.js 编写代码， console.log(1);  
现在这个app.js 文件还不知道怎么在浏览器运行，得想办法让它在浏览器运行。

打开webpack.config.js，由于它是个Node.js运行的文件，因此这是个模块，我们需要通过编写：

module.exports = {
    //配置入口
    entry:{
        app:'./src/app.js'
    },
}

配置入口文件，entry这里为什么只加载了一个js？那我们将来那么多JS怎么办？
webpack官网那个图，那图怎么说的，是不是只要有一个入口文件，就会直接的关联其他的一些文件，这些依赖都依赖过来以后，就打包成一个目标文件。

配置入口文件配置好以后，配置出口，配置出口得有什么呢?
得有一个出口的文件夹，我们取名为 path路径，注意： path路径必须写物理路径，因此我们需要在Node.js
中导出一个模块： const path = require('path'); path可以调用方法了，

const path = require('path');

module.exports = {
    //配置入口
    entry:{
        app:'./src/app.js'
    },

    //配置出口
    ouput:{
        path:path.join(__dirname,'./dist'),  //把目标文件打包到 frontend目录下的dist 目录下
        filename:'app.js',    //打完包以后的文件名 , 这app.js是自己故意起的
    }
}


定义完入口、出口后，貌似可以就可以打包就可以运行了, 在frontend目录下执行  npx webpack   ，好了webpack.config.js 是不是不用写完整，因为默认的文件名就叫 webpack.config.js ，所以直接执行:
npx webpack

然后就能看到 在frontend目录下多了一个 dist目录，dist目录下有一个app.js 文件。




## 后端 （backend）
Node.js  
Express  
MongoDB（Mongoose）  

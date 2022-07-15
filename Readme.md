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
webpack官网：https://webpack.js.org/
bundle your images   bundle your styles  bundle your scripts   
webpack就是帮助我们去做模块打包的。webpack就是帮助我们打包模块的。
webpack web表示基于浏览器的应用，pack表示打包的意思。
webpack是一个基于Node.js的工具

lagou-admin\frontend>  yarn init -y  
这样就在frontend目录下创建了package.json ，package.json 里面就可以保存我们安装的那些包了

lagou-admin\frontend> yarn add webpack -D
在开发的环境里面装 webpack ,安装完就可以使用它了，怎么使用？
得需要一个配置文件，在frontend里面新建一个文件：webpack.config.js

查看 webpack 帮助 :  webpack --help 提示要安装 webpack-cli
lagou-admin\frontend>  yarn add webpack-cli -D  是在本地安装

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

此时注意webpack版本是 5，这里使用这个版本可能后来后期可能会有一些问题，会有一些问题，那我们先使用，一会儿我们遇到什么问题了再说。五是刚刚发布的版本 ，所以，我们现在使用五，可能中间会有些坑，那么这个坑是什么，将来会不会遇到一些难题，咱们做了再说，如果一旦发现问题的话，我们要去解，解决不了的话，我们要先把它先退到webpack 4去。现在看来我们好像没有难问题，这个什么源文件目标文件已经搞定了，搞定了以后，我们回来大家仔细看一下，在我们的dist文件夹里是有app.js，这个app.js这里大家看一下是不是只有这句话。它怎么样，它压根儿就没有对我们这个文件进行编译，这意味着什么？是利用了我们浏览器的这个代码。就是直接编译过来了，直接编译过来的话，后面会不会有问题？那有可能，所以，他已经完全脱离了之前的概念了，所以，这块不利于我们学习webpack 4，所以，暂时我们先把webpack 5 退回 webpack 4去，因为到了公司以后，你使用webpack一定是webpack 4或者webpack 3，所以我们现在，还得需要往前退一下，因为咱们学习其他的知识，webpack 5 或者 4 完全一样。

我们再试验一下，在frontend目录的src目录下 app.js里编写 ES的代码，怎么写？

const x = 100
console.log(x);

这样编写这个代码，那ES6的代码是不是放在不支持IE浏览器上去挂掉，比方说IE8.
所以，现在咱们再编译一下   npx webpack

退到webpack 4 
npm view webpack versions
yarn add webpack@4.44.2 -D

npm view webpack-cli  versions
yarn add webpack-cli@3.3.12 -D

所以，现在咱们继续再编译一下   npx webpack

我们再在frontend目录的dist目录下 app.js里看看代码情况，注意控制台输出的：

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

回到webpack.config.js 配置开发环境、生产环境， 编写：

  //配置环境
    mode:'deleopment',

然后继续再编译一下   npx webpack   ,此时就没有WARNING 警告了

下面我们再来看一下，关于这个环境的其他配置，现在只是把src目录下的app.js 文件打包了










## 后端 （backend）
Node.js
Express
MongoDB（Mongoose）

const path = require('path');

module.exports = {
    //配置环境
    mode:'development',
    //配置入口
    entry:{
        app:'./src/app.js'
    },

    //配置出口
    output:{
        path:path.join(__dirname,'./dist'),  //把目标文件打包到 frontend目录下的dist 目录下
        filename:'app.js',    //打完包以后的文件名 , 这app.js是自己故意起的
    }
}
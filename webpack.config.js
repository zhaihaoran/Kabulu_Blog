const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + "/build", // 指定打包之后的文件夹 
        // publicPath: '/public/', // 指定资源文件引用的目录
        filename: 'bundle-[hash:5].js'
    },
    // 生成sourcemap方便快速定位问题
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./public", // 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
        port: 4444, // 监听端口号
        inline: true, // 实时刷新
        historyApiFallback: true
        // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: 'babel-loader',
            },
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use: [
                {
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, {
                    loader: "postcss-loader"
                }
            ]
        }]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),// 在打包后的代码中添加注释
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html' // new 一个这个插件的实例，并传入相关的参数
        }),
        // 优化用的
        new webpack.optimize.OccurrenceOrderPlugin(), //组件分配id 通过分析使用最多的模块，为他们分配最小的id
        new webpack.optimize.UglifyJsPlugin(), //压缩js代码
        new ExtractTextPlugin("style.css") // 分离css和js文件
    ]
}
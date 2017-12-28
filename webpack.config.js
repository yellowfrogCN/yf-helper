const path = require('path');
const webpack = require('webpack');

module.exports = {
    /*入口*/
    entry: path.join(__dirname, 'lib/index.ts'),
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                // 转换 typescript 为 js 文件
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            // {
            //     // ★ 后续改为 typescript 后，就不要这段了.js的编译了
            //     // lib文件夹下面的以.js结尾的文件，要使用babel解析
            //     // cacheDirectory是用来缓存编译结果，下次编译加速
            //     test: /\.js$/,
            //     use: ['babel-loader?cacheDirectory=true'],
            //     include: path.join(__dirname, 'lib')
            // }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                // 最紧凑的输出
                beautify: false,
                // 删除所有注释
                comments: false
            },
            compress: {
                screw_ie8: true,
                drop_console: true,
                warnings: false
            },
        })
    ]
};
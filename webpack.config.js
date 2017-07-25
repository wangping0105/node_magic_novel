var path = require('path');
var webpack = require('webpack'); //加载webpack依赖包
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
    //入口文件并添加了热加载
    output: {
        path: path.resolve(__dirname, './build'),
        //path: __dirname + "/build",
        publicPath: '/assets/',
        filename: 'bundle.js' //输出文件
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader:  [ 'style-loader', 'css-loader?sourceMap' ]
            },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
            //打包css文件
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap'},
            //编译sass文件
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
                loaders: [
                    // 小于10KB的图片会自动转成dataUrl
                    'url-loader?limit=10240&name=img/[hash:8].[name].[ext]',
                    'image-loader?{bypassOnDebug:true, progressive:true,optimizationLevel:3,pngquant:{quality:"65-80",speed:4}}'
                ]
            }
            //对图片进行打包
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        // 引入jquery
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [precss, autoprefixer];
                },
                devServer: {
                    contentBase: "./public", //本地服务器所加载的页面所在的目录
                    colors: true, //终端中输出结果为彩色
                    historyApiFallback: true, //不跳转
                    inline: true, //实时刷新
                    hot: true
                }
            }
        })
    ],
    resolve: {
        //自动扩展文件后缀名
        extensions: ['.js', '.json', '.scss', '.ts']
    }
};
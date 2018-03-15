var webpack = require('webpack');
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.less$/,
            use: [{
                loader: 'style-loader'      // create style nodes from JS string
            }, {
                loader: 'css-loader'        // translates CSS into CommonJS
            }, {
                loader: 'less-loader'       // compiles Less to CSS
            }]
        }]
    }
};
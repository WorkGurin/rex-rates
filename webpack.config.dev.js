'use strict';

const webpack = require('webpack');
const path = require('path');
const config = require('./config.json');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:' + config.devPort,
        'webpack/hot/only-dev-server',
        './src/index.jsx',
        './css/style.less'
    ],
    output: {
        path: path.join(__dirname, config.publicFolder),
        publicPath: '/' + config.publicFolder + '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']},
            {test: /\.less$/, exclude: /node_modules/, loaders: ['style', 'css', 'less']}
        ]
    }
};

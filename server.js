const express = require('express');
const path = require('path');
const webpack = require('webpack');
const config = require('./config.json');
const app = express();

const isDevelopment = (process.env.NODE_ENV !== 'production');
const static_path = path.join(__dirname, config.publicFolder);

const prodListener = app.use(express.static(static_path))
    .get('/', function (req, res) {
        res.sendFile('index.html', {
            root: static_path
        });
    }).listen(process.env.PORT || config.prodPort, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Production is listening at localhost:' + prodListener.address().port);
    });

if (isDevelopment) {
    const webpackDevConf = require('./webpack.config.dev');
    const WebpackDevServer = require('webpack-dev-server');

    new WebpackDevServer(webpack(webpackDevConf), {
        publicPath: webpackDevConf.output.publicPath,
        hot: true,
        stats: {colors: true}
    }).listen(config.devPort, 'localhost', function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Development is listening at localhost:' + config.devPort);
    });
}

'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    cache: true,
    entry: './src/index.js',
    output: {
        path: './bin',
        filename: 'index.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            include: [
                path.join(__dirname, 'src')
            ],
            query: {
                cacheDirectory: true,
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loaders: ['style', 'css', 'less']
        }, {
            test: /\.jpe?g$|\.gif$|\.png$|\.ico$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
            loader: 'file'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false},
            minimize: true
        }),
        new webpack.DefinePlugin({
            'process.env': { 'NODE_ENV': JSON.stringify('production') }
        })
    ]
};

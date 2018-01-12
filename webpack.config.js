'use strict';

const webpack = require('webpack');

module.exports = {
    entry: './js/index',
    output: {
        filename: 'dist/bundle.js',
        library: 'main'
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 10
    },

    module: {

        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]

    },
    
    devServer: {
        host: 'localhost',
        port: 4200,
        contentBase: 'dist',
        watchOptions: {
            aggregateTimeout: 300
        }
    }
};
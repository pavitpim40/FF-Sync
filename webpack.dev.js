// IMPORT:Other Module
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// IMPORT:Our Module
const commonConfig = require('./webpack.config');

//#########################################
const devConfig = merge(commonConfig, {
    mode: 'development',

    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: '[name].[hash].js',
    //     assetModuleFilename: 'images/[hash][ext][query]',
    // },

    // LOADER
    module: {
        rules: [
            {
                test: /\.s?css$/i, // เฉพาะกับ .css .scss
                use: ['style-loader', 'css-loader', 'sass-loader'], // ใช้ loader อะไรบ้าง
            },
        ],
    },

    // PLUGIN
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
        }),
    ],
});

module.exports = devConfig;

// IMPORT:Other Module
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// IMPORT:Our Module
const commonConfig = require('./webpack.config');

//#########################################
const prodConfig = merge(commonConfig, {
    mode: 'production',

    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].[hash].min.js', // .min = minify == remove all code comment and white space
        assetModuleFilename: 'images/[hash][ext][query]',
    },

    // LOADER
    module: {
        rules: [
            {
                test: /\.s?css$/i, // เฉพาะกับ .css .scss
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // ใช้ loader อะไรบ้าง
            },
        ],
    },

    // PLUGIN
    plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin()],

    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizer(),
            new HtmlWebpackPlugin({
                template: './src/template/index.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
        ],
    },
});

module.exports = prodConfig;

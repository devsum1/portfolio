const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'production',
    entry: './src/index.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js', // Hash for cache busting
        publicPath: '/',
    },
    module: {
        rules: [
            // JavaScript Loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            // CSS Loader
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // Extract CSS into separate files
                    'css-loader',
                ],
            },
            // Image Loader
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource', // Output as separate files
            },
        ],
    },
    plugins: [
        // Generate HTML file with injected script tags
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        }),
        // Extract CSS into separate files
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        // Analyze bundle size
        new BundleAnalyzerPlugin(),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
    },
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const root = path.join(__dirname, '../');

module.exports = {
    entry: {
        main: path.resolve(root, 'src/index.ts'),
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.tsx', '.js'],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                sourceMap: true,
                extractComments: true,
            }),
            new OptimizeCssAssetsPlugin({}),
        ],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
        }),
        new HtmlWebpackPlugin({
            favicon: 'public/favicon.ico',
            template: 'public/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'callback.html',
            template: path.join(root, 'templates/callback.html'),
            inject: false,
        }),
        new CopyWebpackPlugin([{ from: './config.json', to: './config.json' }]),
    ],
    module: {
        rules: [
            {
                test: /\.m?ts$|\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-react', { runtime: 'automatic' }],
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                        ],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve('src/App.css'),
                    path.resolve('src/styles/colors-deprecated.css'),
                ],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]',
                },
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                path.join(
                                    root,
                                    'node_modules/sass-bem/_bem.scss',
                                ),
                                path.join(root, 'src/styles/theme.sass'),
                                path.join(root, 'src/styles/global-info.sass'),
                            ],
                        },
                    },
                ],
            },
        ],
    },
};

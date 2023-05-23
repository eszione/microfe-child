const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
//const packageJson = require('../package.json')

const config = {
    mode: 'production',
    output: {
        publicPath: '/',
    },
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: 'public/index.html'
        }
    },
    plugins: [
        /*new ModuleFederationPlugin({
            name: 'microfe-demo',
            //filename: 'remoteEntry.js',
            exposes: {
                './microfeDemo': './src/index.tsx'
            },
            //shared: packageJson.dependencies
        }),*/
    ]
};

module.exports = merge(commonConfig, config);

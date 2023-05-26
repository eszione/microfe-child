const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const config = {
    mode: process.env.NODE_ENV,
    output: {
        publicPath: 'auto',
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'MicroFeChild',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/bootstrap.tsx',
                './Routes': './src/Router.tsx',
                './Components': './src/exports.tsx'
            },
            shared: Object.keys(packageJson.dependencies)
        }),
    ]
};

module.exports = merge(commonConfig, config);

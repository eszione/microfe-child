const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const config = {
    mode: process.env.NODE_ENV,
    output: {
        publicPath: 'auto',
    },
    devtool: 'source-map',
    devServer: {
        port: 3000,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'MicroFeChild',
            filename: 'remoteEntry.js',
            exposes: {
                './Components': './src/externals/exports.tsx',
            },
            shared: {
                ...packageJson.dependencies,
                react: { singleton: true },
                'react-dom': { singleton: true },
            }
        }),
    ]
};

module.exports = merge(commonConfig, config);

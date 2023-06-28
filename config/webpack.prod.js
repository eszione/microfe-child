const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const config = {
    mode: process.env.NODE_ENV,
    output: {
        publicPath: 'auto',
    },
    devtool: 'eval-source-map',
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
                react: { requiredVersion: packageJson.dependencies.react },
                'react-dom': { requiredVersion: packageJson.dependencies['react-dom'] },
                'react-router-dom': { requiredVersion: packageJson.dependencies['react-router-dom'] },
                'react-redux': { requiredVersion: packageJson.dependencies['react-redux'] },
                'react-intl': { requiredVersion: packageJson.dependencies['react-intl'] },
            }
        }),
    ]
};

module.exports = merge(commonConfig, config);

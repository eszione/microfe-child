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
                // react: {
                //     import: 'react', // the "react" package will be used a provided and fallback module
                //     shareKey: 'react', // under this name the shared module will be placed in the share scope
                //     shareScope: 'default', // share scope with this name will be used
                //     singleton: true, // only a single version of the shared module is allowed
                //     requiredVersion: packageJson.dependencies.react
                //   },
                // 'react-dom': {
                //     singleton: true, // only a single version of the shared module is allowed
                //     requiredVersion: packageJson.dependencies['react-dom']
                // }
            }
        }),
    ]
};

module.exports = merge(commonConfig, config);

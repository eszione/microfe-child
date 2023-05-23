const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const config = {
    mode: 'production',
    output: {
        publicPath: 'auto',
    },
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: 'public/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'MicroFeChild',
            filename: 'microfechild.js',
            exposes: {
                './MicroFeChild': './src/index.tsx'
            },
            shared: packageJson.dependencies
        }),
    ]
};

module.exports = merge(commonConfig, config);

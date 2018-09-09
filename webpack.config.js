const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const presetConfig = require('./build-utils/loadPresets');
const modeConfig = (mode) => require(`./build-utils/webpack.${mode}.js`)(mode);

module.exports = ({mode, presets} = {mode: "production", presets: []}) => {
    return webpackMerge({
            mode,
            output: {
                filename: "bundle.js",
                chunkFilename:"[name].lazy-chunk.js"
            },
            module: {
                rules: [
                    {
                        test: /\.jpe?g$/,
                        use: [
                            {
                                loader: "url-loader",
                                options: {
                                    limit: 500
                                }
                            }
                        ]
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin()
            ],
        },
        modeConfig(mode),
        presetConfig({mode,presets})
    );
};

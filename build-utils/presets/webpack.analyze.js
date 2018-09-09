const WebpackBundleAnalyze = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = ()=>({
    plugins: [
        new WebpackBundleAnalyze()
    ]
});
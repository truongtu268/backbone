module.exports = ()=>({
    module: {
        rules: [
            {
                test:/\.ts$/,
                loaders:["ts-loader"]
            }
        ]
    }
});
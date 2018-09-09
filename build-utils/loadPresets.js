const webpackMerge = require('webpack-merge');

const applyPresets = (env) => {
    const {presets} = env;
    const mergePreset = [].concat(...[presets]);
    const mergeConfig = mergePreset.map(presetName => {
        if(typeof presetName !== 'undefined'){
            require(`./presets/webpack.${presetName}`)(env)
        }
    });
    return webpackMerge({}, ...mergeConfig);
};
module.exports = applyPresets;
const loaderUtils = require('loader-utils');
const replaceSource = require('./replace');

module.exports = function(source) {
    // 获取到用户给当前 Loader 传入的 options
    const options = loaderUtils.getOptions(this);
    const publicPath = options.url || '';
    
    return replaceSource(source, publicPath);
};


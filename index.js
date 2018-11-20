const loaderUtils = require('loader-utils');
const url = require('url');

module.exports = function(source) {
    // 获取到用户给当前 Loader 传入的 options
    const options = loaderUtils.getOptions(this);
    const publicPath = options.url || '';
    
    return replaceSource(source, publicPath);
};

function replaceSource(source, publicPath) {
    const reg = /url\(['"]?(.+?)['"]?\)/;
    const innerUrl = source.match(reg);
    const isStatic = /^data:|^chrome-extension:|^moz-extension:|^ms-browser-extension:|^(https?:)?\/\//.test(url);
    if(!isStatic) {
        if(innerUrl.startWith('/')) {
            const resultUrl = url.resolve(publicPath, innerUrl);
            return source.replace(innerUrl, resultUrl);
        }
    }
    return source;
}
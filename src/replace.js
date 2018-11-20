const startsWith = require('lodash.startswith');
const endsWith = require('lodash.startswith');
function replaceSource(source, publicPath) {
    if(endsWith(publicPath, '/')) {
        publicPath = publicPath.replace(/\/$/, '');
    }
    const reg = /url\(['"]?(.+?)['"]?\)/;
    let innerUrl = source.match(reg);
    innerUrl = innerUrl && innerUrl[1];
    if(!innerUrl) {
        return source;
    }
    const isStatic = /^data:|^chrome-extension:|^moz-extension:|^ms-browser-extension:|^(https?:)?\/\//.test(innerUrl);
    if(!isStatic) {
        if(startsWith(innerUrl, '/')) {
            const resultUrl = publicPath + innerUrl;
            return source.replace(innerUrl, resultUrl);
        }
    }
    return source;
}

module.exports = replaceSource;
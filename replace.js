function replaceSource(source, publicPath) {
    if(publicPath.endsWith('/')) {
        publicPath = publicPath.replace(/\/$/, '');
    }
    const reg = /url\(['"]?(.+?)['"]?\)/;
    innerUrl = source.match(reg);
    innerUrl = innerUrl && innerUrl[1];
    const isStatic = /^data:|^chrome-extension:|^moz-extension:|^ms-browser-extension:|^(https?:)?\/\//.test(innerUrl);
    if(!isStatic) {
        if(innerUrl.startsWith('/')) {
            const resultUrl = publicPath + innerUrl;
            return source.replace(innerUrl, resultUrl);
        }
    }
    return source;
}

module.exports = replaceSource;
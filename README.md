# style-url-loader

<p align="center">
    <a href="https://travis-ci.org/hua1995116/style-url-loader"><img src="https://travis-ci.org/hua1995116/style-url-loader.svg?branch=master" /></a>
    <a href="https://codecov.io/gh/hua1995116/style-url-loader"><img src="https://codecov.io/gh/hua1995116/style-url-loader/branch/master/graph/badge.svg" /></a>
    <a href="https://npmcharts.com/compare/style-url-loader?minimal=true" rel="nofollow"><img src="https://img.shields.io/npm/dm/style-url-loader.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/style-url-loader" rel="nofollow"><img src="https://img.shields.io/npm/v/style-url-loader.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/style-url-loader" rel="nofollow"><img src="https://img.shields.io/npm/l/style-url-loader.svg?style=flat" style="max-width:100%;"></a>
</p>

# options
    url {String}


# example

url: //cloud.qiufeng.com/
```css
.css {
    background: url(/static/demo.png)
}
```

out

```css
.css {
    background: url(//cloud.qiufeng.com/static/demo.png)
}
```


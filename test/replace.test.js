const assert = require('chai').assert;
const replaceSource = require('../replace');

describe('url loader', () => {
    it('case can replace', () => { 
        const publicPath = '//s3plus.meituan.net/';
        const stylePart = `background: url(/static/img/1.png);`
        const outPart = `background: url(//s3plus.meituan.net/static/img/1.png);`;
        
        assert.equal(replaceSource(stylePart, publicPath), outPart);
    })

    it('case can not replace', () => { 
        const publicPath = '//s3plus.meituan.net/';
        const stylePart = `background: #fff;`
        const outPart = `background: #fff;`
        
        assert.equal(replaceSource(stylePart, publicPath), outPart);
    })
})
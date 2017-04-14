Fis-parser-import
====
Fork From [fis-parser-less-import](https://github.com/leeyeh/fis-parser-less-import)


### Usage
```js
fis.match('*.less', {
    parser: [
        fis.plugin('import', {
            file: [
                '/src/css/base.less',
                '/src/modules/base/base.less'
            ]
        }),
        fis.plugin('less')
    ],
    useSprite: true,
    rExt: '.css'
})

// Or

fis.match('*.styl', {
    parser: [
        fis.plugin('import', {
            file: '/src/modules/base/base.styl'
        }),
        fis.plugin('stylus')
    ],
    useSprite: true,
    rExt: '.css'
})

```
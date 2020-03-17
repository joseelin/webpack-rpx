# webpack-rpx

该插件实现类似小程序的固定宽度的功能
实现思路是在编译时将指定的单位换算成vw

### 选项
```javascript
{
    width: 750,//设计宽度,默认750
    unit:'rpx' //自定义单位,默认rpx
}
```
### 使用方法
```javascript
// vue.config.js 配置文件
module.exports = {
    chainWebpack: (config) => {        
        config.module
            .rule('rpx')
            .test(/\.vue$/)
            .use('webpack-rpx')
            .loader('webpack-rpx')
            .options({
                width: 750,
                unit: 'rpx'
            })
            .end();
    }
}
```
### 示例(vue)
```html
<!--vue 文件--->
<template>
    <div class="root"></div>
</template>
<style>
.root{
    width:100%;
    height:88rpx;/*设计高度是多少,此处就填写多少*/
}
</style>
```

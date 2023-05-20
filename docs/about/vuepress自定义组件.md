---
title: vuepress 博客搭建
---

## vuepress 中注册并使用自定义组件

### 添加自定义组件
将 node_modules/@vuepress/theme-default 路径下，所有组件和配置都复制到 docs/.vuepress/theme 文件夹目录下。

然后在该文件夹目录下的 components 文件夹中，添加自定义的组件(后缀为 .vue 的文件)。比如添加一个 SideAnchor.vue 的右侧目录组件，需要在 Page.vue 中引入，注册并使用该自定义组件。

- 引入并注册组件
```javascript
<script>
    import SideAnchor from "@theme/components/SideAnchor.vue";
    export default {
        components: { ... SideAnchor},
    }
</script>
```

- 使用组件
```javascript
<template>
    <main class="page" ref="page">
    ...
    <SideAnchor />
  </main>
</template>
```

### 注册自定义组件
在 docs/.vuepress/theme 路径下，添加一个增强配置 enhanceApp.js 文件，将自定义组件注册到主题中

```javascript
import SideAnchor from './components/SideAnchor.vue'

export default ({ Vue }) => {
    // eslint-disable-next-line vue/match-component-file-name
    Vue.component('SideAnchor', SideAnchor);
};
```

### 配置自定义组件路径
在 docs/.vuepress/theme 下的 index.js 中，添加如下内容，配置自定义组件的路径：

```javascript
const path = require('path')
const { resolve } = require('path')
// 解决命名冲突
const sharedUtils = require('@vuepress/shared-utils')
const myPath = sharedUtils.path
// console.log(childPath,"测试。。。。")

/**
 * @type {import('@vuepress/types').Theme<import('@vuepress/types').DefaultThemeConfig>}
 */
module.exports = (options, ctx) => {
  ...

  return {
    ...
    'enhanceApp': [
        resolve(__dirname, './enhanceApp.js'),
        myPath.resolve(__dirname,'./enhanceApp.js')
    ],
    components: ['SideAnchor','ChildTable'],
    ...
  }
}

```

### 最终效果
经过以上步骤，实现的右侧目录自定义组件效果如下：

![Snipaste_2023-04-10_08-39-15](https://cdn.staticaly.com/gh/hfllove/image-hosting@main/Snipaste_2023-04-10_08-39-15.3okyl2241yg0.webp)

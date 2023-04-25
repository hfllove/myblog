---
home: true
title: 首页
heroImage: /hero.jpg
heroText: 个人博客
tagline: hfl 的个人技术文档
actionText: 点击进入 →
actionLink: /guide/
features:
- title: 博客简介
  details: 这是一个主要用来记录个人搭建前端项目步骤，以及项目搭建过程中所产生问题的技术博客
- title: 其他
  details: 同时也会记录一些有关于面试，以及 git 操作命令方面的知识
footer: MIT Licensed | Copyright © 2023-hfllove
---
## this 的四个绑定规则
[this 的四个绑定规则](https://juejin.cn/post/7132032582832635934#heading-3)
## Javascript 高级-思维导图
[Javascript 高级-思维导图](https://www.zhixi.com/drawing/52a9fc946a1a977d51806b991a729e97?page=owner&current=1)
## B站黑马小程序视频
[微信小程序学习](https://www.bilibili.com/video/BV1834y1676P/?p=19&vd_source=383d958999bc6841badec4b1b44b3b84)

# 测试 tab选项卡

<RecoDemo>
  <template slot="code-template">
    <<< @/docs/.vuepress/demo/demo.vue?template
  </template>
  <template slot="code-script">
    <<< @/docs/.vuepress/demo/demo.vue?script
  </template>
  <template slot="code-style">
    <<< @/docs/.vuepress/demo/demo.vue?style
  </template>
</RecoDemo>

<RecoDemo>
   <template slot="code-md">
    这段代码将数组 arr 通过 reduce 方法转换成一个新的数组 result。<br>在每次迭代中，我们检查当前元素的 a 属性是否为 2。<br>如果是，我们将其作为新的子数组的第一个元素加入到结果数组 acc 中。<br>否则，我们将其添加到最后一个子数组中。如果结果数组中还没有子数组，则忽略当前元素。
  </template>
  <template slot="code-js">
    <<< @/docs/.vuepress/demo/index.js
  </template>
  <template slot="code-html">
    <<< @/docs/.vuepress/demo/index.html
  </template>
  <img src="/images/carbon.png" slot="demo" />
</RecoDemo>


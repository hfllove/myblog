---
title: 小程序宿主环境--组件
---

## 简介
关于组件的介绍，可以点击前往微信小程序官网，进行了解：[小程序宿主环境之组件](https://developers.weixin.qq.com/ebook?action=get_post_info&docid=000eec0b998e80bb0086f092b5100a)

## 准备
在小程序项目根目录下，app.json 中 pages 配置项下，添加如下配置进行保存

```json
"pages":[
    "pages/list/list"
]
```
那么就会在项目的 pages 页面文件夹下新增一个子页面文件夹 list，这个 list 由 list.js、list.json、list.wxml、以及 list.wxss 四个部分组成。关于这四部分组成，详见 [小程序代码组成](https://developers.weixin.qq.com/ebook?action=get_post_info&docid=000ace6c9603786b008636f2e56c0a) 

## view 组件和 scroll-view 组件
### view 组件
view 组件类似于 html 中的 div 块级元素，以下是关于 view 组件的一个实例部分内容

- 模板代码 WXML 文件

```html
<view class="container1">
  <view>A</view>
  <view>B</view>
  <view>C</view>
</view>
```

- 样式代码 WXSS 文件

```css
.container1 view {
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
}
.container1 view:nth-child(1) {
  background-color: lightgreen;
}
.container1 view:nth-child(2) {
  background-color: lightskyblue;
}
.container1 view:nth-child(3) {
  background-color: lightpink;
}
.container1 {
  display: flex;
  justify-content: space-around;
}
```
:::note
从以上的例子，不难看出，view 组件基本和 html 中的 div 元素用法是一样的。
:::

### scroll-view 组件
>基于以上实例，实现纵向，横向滚动的效果

**1. 实现纵向滚动**

scroll-view 组件通常搭配 scroll-y 组件属性，来实现纵向滚动的效果，以下是纵向滚动的 scroll-view 实例部分内容：

- 模板代码 WXML 
> scroll-y: 允许纵向滚动\
scroll-x: 允许横向滚动

:::warning
使用纵向滚动时，必须给 scroll-view 一个固定高度
:::

```html
<scroll-view class="container1" scroll-y>
  <view>A</view>
  <view>B</view>
  <view>C</view>
</scroll-view>
```

- 样式代码 WXSS (修改部分)

```css
.container1 {
  border: 1px solid red;
  width: 100px;
  /* 必须给高度 */
  height: 120px;
}
```

scroll-view 纵向滚动效果如下图

![Snipaste_2023-04-09_22-25-28](https://cdn.staticaly.com/gh/hfllove/image-hosting@main/Snipaste_2023-04-09_22-25-28.30c9ve4t0os0.webp)

**2. 实现横向滚动**

scroll-view 组件通常搭配 scroll-x 组件属性，来实现横向滚动的效果，以下是横向滚动的 scroll-view 实例部分内容：

- 模板代码 WXML (修改部分)

```html
<scroll-view class="container1" scroll-x>...
</scroll-view>
```

- 样式代码 WXSS (修改部分)

```css
.container1 view {
  display: inline-block;...
}

.container1 {
  /* display: inline-block; */
  white-space: nowrap;
  border: 1px solid red;
  width: 100px;
  height: 120px;
}
```

scroll-view 横向滚动效果如下：

![Snipaste_2023-04-09_22-51-18](https://cdn.staticaly.com/gh/hfllove/image-hosting@main/Snipaste_2023-04-09_22-51-18.93b6xgfkbqw.webp)

## swiper 和 swiper-item 

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

## swiper 和 swiper-item 组件
>参考官方文档 [组件--视图容器--swiper组件](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)

### swiper常用属性
- indicator-dots  是否显示面板指示点
- indicator-color 指示点颜色  
- indicator-active-color  当前选中的指示点颜色
- autoplay  是否自动切换
- interval  自动切换时间间隔
- circular  是否采用衔接滑动

### 实例
- WXML 
```html
<!-- 轮播图的结构 -->
<swiper class="swiper-container" indicator-dots="true" indicator-color="white" 
indicator-active-color="gray" autoplay interval="3000" circular="true">
  <!-- 第一个轮播图 -->
  <swiper-item>
    <view class="item">A</view>
  </swiper-item>
  ...
</swiper>
```

- WXSS
```css
.swiper-container {
  height: 150px;
}
.item {
  height: 100%;
  line-height: 150px;
  text-align: center;
}
swiper-item:nth-child(1) .item {
  background-color: lightgreen;
}
swiper-item:nth-child(2) .item {
  background-color: lightskyblue;
}
swiper-item:nth-child(3) .item {
  background-color: lightpink;
}
```
### 展示效果

gif所在路径：D:\Documents\oCam


## text 和 rich-text 组件

### 介绍
text 和 rich-text 是关于页面基础内容的组件，即文本。

详细的介绍和说明，可以参考官方文档 [组件--基础内容--text](https://developers.weixin.qq.com/miniprogram/dev/component/text.html)

### text 属性 user-select
>user-select:  控制文本是否可选，该属性会使文本节点显示为 inline-block

- WXML
```html
<!-- 常用的基础内容组件 text -->
<view>
手机号支持长按选中效果
<text  user-select>12312312312</text>
</view>
```

### rich-text
参考官方文档 [组件--基础内容--rich-text](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html)

**1. 实例**

- WXML
```html
<rich-text nodes="<h1 style='color:red;'>标题</h1>"></rich-text>
```

**2. 效果**

以上代码实现的效果如下：

![Snipaste_2023-04-10_11-26-34](https://cdn.staticaly.com/gh/hfllove/image-hosting@main/Snipaste_2023-04-10_11-26-34.211p0ciyu95s.webp)

## button 和 image 组件
button 组件详见：[组件--表单组件--button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)

image 组件详见：[组件--媒体组件--image](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)

### button 
button 组件的属性以及用法，比较类似于 element-UI 组件中的 button 组件，在此不详细举例

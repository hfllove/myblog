---
title: resize 事件
---
## 介绍
`resize` 事件是在浏览器窗口大小改变时触发的事件，可以通过监听该事件来实现一些响应式的布局和样式调整。\
当浏览器窗口的大小发生变化时，会触发 `resize` 事件，该事件会被绑定到全局的 window 对象上。我们可以使用 `addEventListener` 方法来监听该事件，例如：
```javascript
window.addEventListener('resize', function() {
  // 处理窗口大小改变时的逻辑
})
```
在监听 `resize` 事件时，需要注意的是，由于该事件会频繁触发，因此应该尽量避免在事件处理函数中执行过多的计算和操作，以减少页面的卡顿和性能问题。

## 实例
利用 `resize` 事件监测页面尺寸的变化，获取准确的页面容器高度。然后用 `watch` 监听属性再次调用 `changeFixed()` 方法，确保获取更新后的页面容器高度。\
![resize](https://cdn.staticaly.com/gh/hfllove/@main/resize.f7h5fbvddts.webp)
---
title: javascript 事件循环
---
## 宏任务与微任务
### 前言
除了广义的同步任务和异步任务，任务更为细致的被分为了宏任务与微任务：

- macro-task (宏任务)：包括整体代码 script、setTimeout、setInterval
- micro-task (微任务)：Promise、process.nextTick

不同类型的任务会进入对应的事件队列(Event Queue)，比如 setTimeout 和 setInterval 会进入相同的事件队列(Event Queue)

process.nextTick(callback)类似 node.js 版的"setTimeout"，在事件循环的下一次循环中调用 callback 回调函数。

### 执行顺序
宏任务和微任务交替执行，就是事件循环。事件循环的顺序决定了 js 代码的执行顺序。事件循环的执行流程是按照如下顺序进行的：

- 进入整体代码(宏任务)后，开始第一次循环
- 接着执行所有微任务，如果有 process.nextTick(callback)，则在异步微任务前，执行该回调函数
- 然后再按照顺序进入一个宏任务，执行里面所有的微任务

[原文链接](https://juejin.cn/post/6844903512845860872)

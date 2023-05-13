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

## eventloop 的补充
栈列：先进后出\
函数被调用就进栈，调用结束就出栈(return)\
异步回调，可以解决栈列被阻塞的问题 \
webapi 提供了异步回调的执行环境，比如 setTimeout 定时器函数会被放到 webapi 中去执行，当计时结束，就会把这个回调函数送回到任务队列里\
事件循环：查看任务队列和栈\
如果栈是空的，那么就把任务队列的任务压入栈中\
回调函数，可以看作是一个将来某个时刻会进入队列的异步任务\
浏览器的重绘是在栈列空闲的情况下进行，且优先级高于回调函数，如果有同步任务阻塞了调用栈，那么浏览器将不能进行重绘。而如果执行的是异步回调，则不会那么阻塞浏览器的重绘，因为浏览器的重绘可以在回调函数执行完出栈，和另一个回调函数即将从任务队列入栈的间隙，进行重绘\
[什么是eventloop](https://www.bilibili.com/video/BV1oV411k7XY/?spm_id_from=333.788.recommend_more_video.-1&vd_source=383d958999bc6841badec4b1b44b3b84)

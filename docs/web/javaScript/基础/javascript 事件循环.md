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

### 宏任务

在 JavaScript 中，宏任务分为两类：一类是任务队列中的初次任务（例如，从事件回调函数、setTimeout 或 setInterval 中传递的任务），另一类是通过 Promise API 返回微任务队列中的任务。Promise 中的回调函数属于第二类任务。<font color="#ff4500">*由于微任务队列的优先级高于宏任务队列，因此当系统运行到带有微任务的宏任务时，必须先完成所有微任务，然后才能继续执行宏任务队列中的下一个任务。*</font>

```js
console.log('sync 1')

new Promise((resolve, reject) => {
  console.log('async')
  resolve()
}).then(() => {
  console.log('microtask')
})

console.log('sync 2')
```
所以，上述代码的运行结果如下：
```js
sync 1
async
sync 2
microtask
```
### 宏任务中的微任务执行

`new Promise((resolve, reject) => { console.log('async'); resolve(); })` 是宏任务，不是微任务。当创建 Promise 实例时，它是同步执行的。然而，在 Promise 实例的状态变为 resolved 或 rejected 时，对应的回调函数是异步执行的，并且当 Promise 从 pending（未决）转换为 resolved（已决）或 rejected（已否决）状态时，异步执行的回调函数（.then() 或 catch()）都会被添加到微任务队列中。
<font color="#ff4500">*因此，Promise 的构造函数的执行是在当前宏任务中完成的，而 resolve 的回调函数是一个微任务，会在当前宏任务完成后立即执行。*</font>例如，下面的代码中，Promise 的构造函数中的代码是同步执行的，但 then() 中的回调函数是异步执行的并且在当前宏任务完成之后立即执行：

```js
console.log('sync 1');

new Promise((resolve) => {
  console.log('async');
  resolve();
}).then(() =>; {
  console.log('microtask');
});

console.log('sync 2');
```
将输出：
```js
sync 1
async
sync 2
microtask
```
注意，即使异步执行的回调函数被放置在微任务队列中，但它们还是在 JavaScript 引擎自己的任务队列中以线程安全的方式运行。
### 最终实例
理解以上的案例讲解，下面通过一个较复杂的例子，测试自己是否真的明白了宏任务与微任务的执行顺序
```js
console.log('CEO');

setTimeout(function () {
  console.log('程序员1');

  Promise.resolve().then(res => { console.log('销售4') })

  new Promise(function (resolve) { 
    console.log('程序员2'); 
    resolve(); 
  }).then(function () { 
    console.log('销售5') 
  })

})

Promise.resolve().then(res=>{ console.log('销售1') })

new Promise(function (resolve) { 
  console.log('财务主管'); 
  resolve(); 
}).then(function () { 
  console.log('销售2') 
})

setTimeout(function () {
  console.log('程序员3'); 

  Promise.resolve().then(res => { console.log('销售3') })

  new Promise(function (resolve) { 
    console.log('程序员6'); resolve(); 
  }).then(function () { 
    console.log('销售6') 
  })
})

```

<details> 
    <summary>答案</summary>
    <pre><code>
    1. CEO
    2. 财务主管
    3. 销售1
    4. 销售2
    5. 程序员1
    6. 程序员2
    7. 销售4
    8. 销售5
    9. 程序员3
    10. 程序员6
    11. 销售3
    12. 销售6
    </code></pre> 
</details>

## event loop 的补充
栈列：先进后出\
函数被调用就进栈，调用结束就出栈(return)\
异步回调，可以解决栈列被阻塞的问题 \
webapi 提供了异步回调的执行环境，比如 setTimeout 定时器函数会被放到 webapi 中去执行，当计时结束，就会把这个回调函数送回到任务队列里\
事件循环：查看任务队列和栈\
如果栈是空的，那么就把任务队列的任务压入栈中\
回调函数，可以看作是一个将来某个时刻会进入队列的异步任务\
浏览器的重绘是在栈列空闲的情况下进行，且优先级高于回调函数，如果有同步任务阻塞了调用栈，那么浏览器将不能进行重绘。而如果执行的是异步回调，则不会那么阻塞浏览器的重绘，因为浏览器的重绘可以在回调函数执行完出栈，和另一个回调函数即将从任务队列入栈的间隙，进行重绘\
[什么是event loop](https://www.bilibili.com/video/BV1oV411k7XY/?spm_id_from=333.788.recommend_more_video.-1&vd_source=383d958999bc6841badec4b1b44b3b84)


---
title: this 的四个绑定规则
---


## 关于 this 的简单介绍
this 关键字是 Javascript 中最复杂的机制之一。它是一个很特别的关键字，被自动定义在所有函数的作用域中。

## 使用 this 的原因

```javascript
const obj = {
  title: '个人博客',
  reading() {
    console.log(this.title + '，一个帮助开发者成长的文档网站');
  }
}
```

随着使用模式越来越复杂，显式传递上下文对象会让代码变得越来越混乱，而 this 提供了一种更优雅的方式来隐式“传递”一个对象引用，因此可以将 API 设计得更加简洁并且易于复用

## 关于 this 的常见的误解
JavaScript 的新手开发者通常会认为，既然把函数看作一个对象（JavaScript 中的所有函数 都是对象），那就可以在调用函数时存储状态（属性的值）。

```javascript
function foo() {
  // 让新添加的 count + 1
  this.count++
}

// 向函数对象 foo 添加了一个属性 count
foo.count = 0

foo()

console.log(foo.count);   // 0 
```
按照上述的观点，那么上面这段代码中打印的 `foo.count`，值应该为 1，而实际打印的结果为 0。

这是因为，当 foo() 被调用时，它会尝试通过 this.count++ 将 count 属性的值加一。但是，由于在这里 foo() 是作为普通函数调用的，而不是作为对象方法调用的，因此this 实际上指向的是全局对象 window，而不是 foo 函数对象本身。所以，this.count 操作实际上相当于 window.count，并不会影响到 foo.count 属性的值。所以最终输出的结果是 0，而不是 1。

:::note

this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。

:::

## this 的绑定规则
this 的绑定对象由函数的调用位置决定，基于函数处在不同的调用位置，有不同的 this 绑定对象，于是产生了如下几种绑定规则

### 默认绑定


## 数据脱敏
数据脱敏就是对真实信息进行遮盖，隐藏\
常见的 js 方法实现数据脱敏如下：\
[常见 js 方法实现](https://blog.csdn.net/m0_46355518/article/details/121145823)\
[md5 消息摘要算法](https://blog.csdn.net/m0_69916115/article/details/126145847)
### 说说怎么使用 md5 ？？？
首先下载 js-md5 插件，在需要使用的地方 import 引入 md5 函数，将需要加密的数据以字符串的形式，作为 md5 函数的参数传入，通过函数输出实现数据的加密






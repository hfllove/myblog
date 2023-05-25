---
title: es6 
---
## let 和 const
### let 命令
**1. 基本用法**
ES6 新增了 let 命令，用来声明变量。它的用法类似于 var，但是所声明的变量，只在 let 命令所在的代码块内有效。
```js
{
  let a = 10;
  var b = 1;
}

a // ReferenceError: a is not defined.
b // 1
```
上面代码在代码块之中，分别用 let 和 var 声明了两个变量。然后在代码块之外调用这两个变量，结果 let 声明的变量报错，var 声明的变量返回了正确的值。这表明，let 声明的变量只在它所在的代码块有效。\
接下来，看下面一段使用 var 定义的代码
```js
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```
上面的代码中，变量 i 是 var 命令声明的，在全局范围内都有效，所以全局只有一个变量 i。每一次循环，变量 i 的值都会发生改变，而循环内被赋给数组 a 的函数内部的 `console.log(i)`，里面的 i 指向的就是全局的 i。也就是说，所有数组 a 的成员里面的 i，指向的都是同一个 i，导致运行时输出的是最后一轮 i 的值，也就是 10。\
如果使用 let ，声明的变量仅在块级作用域内有效，最后输出的是 6.
```js
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```
上面代码中，变量 i 是 let 声明的，当前的 i 只在本轮循环有效，所以<font color='#ff4500'>每次循环的 i 其实都是一个新的变量</font>，所以最后输出的是 6。又因为 <font color='#ff4500'>JavaScript 引擎内部会记住上一轮循环的值</font>，初始化本轮的变量 i 时，就在上一轮循环的基础上进行计算，从而得出本轮循环的值。\
另外， for 循环还有一个特别之处，就是<font color='#158bb8'>设置循环变量的那部分，是一个父作用域，而循环内部时一个单独的子作用域</font>。
```js
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// abc
```
上面代码正确运行，输出了 3 次 abc。这表明函数内部的变量 i 与循环变量 i 不在同一个作用域，有各自单独的作用域（同一个作用域不可使用 let 重复声明同一个变量）。\
[博客学习-es6-let和const-let的特点](https://blog.dselegent.icu/front_end/js_advanced/es6/02.html#_1-2-%E4%B8%8D%E5%AD%98%E5%9C%A8%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87)

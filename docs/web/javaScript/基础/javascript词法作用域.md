---
title: javascript 词法作用域
---
## 词法作用域和动态作用域
javascript 函数作用域由创建的位置决定，这就是词法作用域。而函数作用域由调用的位置决定，叫做动态作用域。
```js
var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();

// 结果是 ???
```
假如 javascript 采用的是静态作用域，也就是词法作用域。那么 bar() 的执行结果就是 1。\
如果 javascript 采用的是动态作用域，那么 bar() 的执行结果就是 2。\
实际上述代码的运行结果是 1。也就是说，javascript 采用的是静态作用域，即词法作用域。

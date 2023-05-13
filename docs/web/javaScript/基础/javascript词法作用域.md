---
title: javascript 深入
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
假如 javascript 采用的是静态作用域，也就是词法作用域。那么执行 bar() 就是在定义的 foo() 函数内部查找变量，如果没有找到就往 foo() 的上一层，即全局作用域中去查找该变量，所以最后的执行结果为 1。\
如果 javascript 采用的是动态作用域，那么执行 bar() 会在 foo 内部作用域查找变量，如果没有找到就会在调用函数的作用域，即 bar 函数内部中进行查找，最后的执行结果为 2。\
实际上述代码的运行结果是 1。也就是说，javascript 采用的是静态作用域，即词法作用域。
## 变量对象

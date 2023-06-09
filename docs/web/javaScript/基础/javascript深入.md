---
title: javascript 深入
---
## 词法作用域和动态作用域
javascript 函数作用域由<font color='#ff4500'>函数创建的位置</font>决定，这就是<font color='#158bb8'>词法作用域</font>。而函数作用域由函数调用的位置决定，叫做动态作用域。
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
实际上述代码的运行结果是 1。也就是说，javascript 采用的是<font color='#158bb8'>静态作用域</font>，即词法作用域。
## 执行上下文
什么是执行上下文？\
执行上下文（Execution Context）指的是 <font color='#158bb8'>JavaScript 代码执行时所处的环境、状态和数据等总称</font>。\
在 JavaScript  中，执行上下文可以分为三种类型：
- 全局执行上下文：整个程序只有一个全局执行上下文，它在脚本执行时创建，用于初始化全局变量、函数和 this 等全局对象。
- 函数执行上下文：当函数执行时，会创建一个新的函数执行上下文，用于存储函数内部的变量、函数和参数等信息。
- eval 执行上下文：在使用 eval 函数时，会在当前执行上下文中创建一个新的 eval 执行上下文。

而每个执行上下文包含三个重要的部分：<font color='#ff4500'>变量对象</font>(Variable Object)、<font color='#ff4500'>作用域链</font>(Scope Chain)和 <font color='#ff4500'>this 指向</font>。

### 执行过程
执行上下文的代码会分成两个阶段进行处理：分析和执行，我们也可以叫做：

<font color='#158bb8'>进入执行上下文</font>

<font color='#158bb8'>代码执行</font>

### 进入执行上下文
当进入执行上下文时，这时候还没有执行代码，

变量对象会包括：

1. 函数的所有形参 (如果是函数上下文)

    - 由名称和对应值组成的一个变量对象的属性被创建
    - 没有实参，属性值设为 undefined
2. 函数声明

    - 由名称和对应值（函数对象(function-object)）组成一个变量对象的属性被创建
    - <font color='#ff4500'>如果变量对象已经存在相同名称的属性，则完全替换这个属性</font>
3. 变量声明

    - 由名称和对应值（undefined）组成一个变量对象的属性被创建；
    - <font color='#ff4500'>如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性</font>

举一个例子：
```js
var bb = 1;
function aa(bb) {
bb = 2;
alert(bb);
};
aa(bb);
alert(bb);
```
在进入执行上下文阶段，其变量对象 AO 如下：
```js
AO = {
	arguments: {
		0: 1,
		length: 1
	},
	bb: 1,
	aa: reference to function aa(){},
}
```
### 代码执行
在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值

还是上面的例子，当代码执行完后，这时候的 AO 是：
```js
AO = {
	arguments: {
		0: 1,
		length: 1
	},
	bb: 2,
	aa: reference to function aa(){}
}
```
可以看到在代码执行阶段，在 aa 函数内部，执行了 `bb = 2`，将变量 bb 的值改为 2。\
回顾整个执行上下文的过程，同时也可以注意到，在进入执行上下文的时候，如果函数有实参，那么函数的参数值为该实参。

:::note

- 全局上下文的变量对象初始化是全局对象

- <font color='#ff4500'>函数上下文的变量对象初始化只包括 Arguments 对象</font>

- 在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值

- 在代码执行阶段，会再次修改变量对象的属性值
:::

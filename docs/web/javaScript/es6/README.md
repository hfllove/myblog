---
title: let 和 const
---
## let 命令
### 1. 基本用法
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
上面代码正确运行，输出了 3 次 abc。这表明函数内部的变量 i 与循环变量 i 不在同一个作用域，有各自单独的作用域（同一个作用域不可使用 let 重复声明同一个变量）。
### 2. let 的特点
- 不存在变量提升
- 暂时性死区
- 不允许重复声明

## 块级作用域
### 1. 为什么需要块级作用域
ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。\
第一种场景，内层变量可能会覆盖外层变量。
```js
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined
```
上面代码的原意是，if 代码块的外部使用外层的 tmp 变量，内部使用内层的 tmp 变量。但是，函数f 执行后，输出结果为 undefined，原因在于变量提升，导致内层的 tmp 变量覆盖了外层的 tmp 变量。\
第二种场景，用来计数的循环变量泄露为全局变量。
```js
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5
```
上面代码中，变量i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。
### 2. ES6 块级作用域
- 作用域链：内层作用域 ——> 外层作用域 ——> 全局作用域
- 块级作用域：除了对象 {}，函数 {}（函数作用域）之外的一切 {} 都属于块级作用域。
块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了。
```js
// IIFE 写法
(function () {
  var tmp = ...;
  ...
}());

// 块级作用域写法
{
  let tmp = ...;
  ...
}
```
### 3. 块级作用域与函数声明
因为函数声明类似于 var ，会提升到全局作用域或函数作用域的头部。应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
```js
// 块级作用域内部的函数声明语句，建议不要使用
{
  let a = 'secret';
  function f() {
    return a;
  }
}

// 块级作用域内部，优先使用函数表达式
{
  let a = 'secret';
  let f = function () {
    return a;
  };
}
```
另外，还有一个需要注意的地方。ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。
```js
// 第一种写法，报错
if (true) let x = 1;

// 第二种写法，不报错
if (true) {
  let x = 1;
}
```
上面代码中，第一种写法没有大括号，所以不存在块级作用域，而let只能出现在当前作用域的顶层，所以报错。第二种写法有大括号，所以块级作用域成立。
## const 命令
### 1. 基本用法
const声明一个只读的常量。一旦声明，常量的值就不能改变。
```js
const PI = 3.1415;
PI // 3.1415

PI = 3;
// TypeError: Assignment to constant variable.
```
上面代码表明改变常量的值会报错。\
const 声明的变量不得改变值，这意味着，const 一旦声明变量，就必须立即初始化，不能留到以后赋值。
```js
const foo;
// SyntaxError: Missing initializer in const declaration
```
上面代码表示，对于 const 来说，只声明不赋值，就会报错。
### 2. const 与 let 的相同点
- 只在声明所在的块级作用域内有效。
- const 命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
- const 声明的常量，也与let一样不可重复声明。
### 3. 本质
const 实际上保证的，并不是变量的值不得改动，而是<font color='#ff4500'>变量指向的那个内存地址所保存的数据不得改动</font>。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。\
但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const 只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。
```js
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```
上面代码中，常量 foo 储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把 foo 指向另一个地址，但<font color='#158bb8'>对象本身是可变的</font>，所以依然可以为其添加新属性。\
下面是另一个例子。
```js
const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
a = ['Dave'];    // 报错
```
### 4. let 与 const 的总结
1. let 声明的变量会产生块作用域，var 不会产生块作用域
2. const 声明的常量也会产生块作用域
3. 不同代码块之间的变量无法互相访问
4. 注意: 对象属性修改和数组元素变化不会出发 const 错误 （数组和对象存的是引用地址）
5. 应用场景：声明对象类型使用 const，非对象类型声明选择 let
6. cosnt声明必须赋初始值，标识符一般为大写，值不允许修改。

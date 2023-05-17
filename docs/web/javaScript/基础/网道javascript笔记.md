---
title: 网道 javascript 笔记
---
## 数据类型
### 函数
函数中的 arguments 对象能够在函数内部读取所有参数

闭包概念：一个有权访问另一个函数内部变量的函数\
闭包的作用：\
闭包用到了外层变量，导致外层函数不能从内存中释放。所以闭包内存持久化。\
闭包的另一个作用，是封装对象私有属性和私有方法

立即调用函数表达式(IIFE)\
作用：\
通过一个具有词法作用域的匿名函数，阻止了外界访问 IIFE 中的变量，不会污染全局作用域。\
另外就是通过这个匿名函数表达式，可以立即执行函数\
写法由来：\
因为函数有两种写法，一种被称为语句形式，另一种被叫做表达式形式。\
为了避免解析的歧义，JavaScript 规定，如果 *function* 关键字出现在行首，一律解释成语句。因此，引擎看到行首是 *function* 关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾，所以就报错了。
## 语法专题
### 编程风格
全局变量对于任何代码块都是可读可写的，这对于代码的模块化和重复使用有很大不利。\
所以，如果不得不使用全局变量，尽量使用大写来表示，例如 USE_ALL，这样更能帮助区分全局变量

自增符和自减符:\
所有的 `++` 都可以 用 `+=1` 进行表示。\
建议使用 `+=1` 和 `-=1` 代替 `++` 与 `--`
## 面向对象编程

### 实例对象与 new 命令

**对象**：\
对象是单个实物的抽象。\
对象是一个容器，封装了属性和方法。属性是对象的状态，方法是对象的行为

**构造函数**：\
构造函数就是用来生成实例的函数，是实例对象的模板。一个构造函数可以生成多个实例对象\
构造函数的**特点**：
- 构造函数的内部使用了 `this` 关键字，它代表了所要生成的实例对象
- 构造函数生成实例对象必须用 `new` 命令

**new 命令原理**：\
使用new命令时，它后面的函数依次执行下面的步骤。

创建一个空对象，作为将要返回的对象实例。\
将这个空对象的原型，指向构造函数的prototype属性。\
将这个空对象赋值给函数内部的this关键字。\
开始执行构造函数内部的代码。\
也就是说，构造函数内部，this 指的是一个新生成的空对象，所有针对 this 的操作，都会发生在这个空对象上。构造函数之所以叫“构造函数”，就是说这个函数的目的，就是操作一个空对象（即 this 对象），将其“构造”为需要的样子。

如果构造函数内部有 return 语句，而且 return 后面跟着一个对象，new 命令会返回 return 语句指定的对象；否则，就会不管 return 语句，返回 this 对象。
```js
var Vehicle = function () {
  this.price = 1000;
  return 1000;
};

(new Vehicle()) === 1000
// false
```
上面代码中，构造函数 Vehicle 的 return 语句返回一个数值。这时，new 命令就会忽略这个 return 语句，返回“构造”后的 this 对象。

但是，如果 return 语句返回的是一个跟 this 无关的新对象，new 命令会返回这个新对象，而不是 this 对象。这一点需要特别引起注意。
```js
var Vehicle = function (){
  this.price = 1000;
  return { price: 2000 };
};

(new Vehicle()).price
// 2000
```
上面代码中，构造函数 Vehicle 的 return 语句，返回的是一个新对象。new 命令会返回这个对象，而不是 this 对象。

另一方面，如果对普通函数（内部没有 this 关键字的函数）使用 new 命令，则会返回一个空对象。
```js
function getMessage() {
  return 'this is a message';
}

var msg = new getMessage();

msg // {}
typeof msg // "object"
```
上面代码中，getMessage 是一个普通函数，返回一个字符串。对它使用 new 命令，会得到一个空对象。这是因为 new 命令总是返回一个对象，要么是实例对象，要么是 return 语句指定的对象。本例中，return 语句返回的是字符串，所以 new 命令就忽略了该语句。

new 命令简化的内部流程，可以用下面的代码表示。
```js
function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
  // 将 arguments 对象转为数组
  var args = [].slice.call(arguments);
  // 取出构造函数
  var constructor = args.shift();
  // 创建一个空对象，继承构造函数的 prototype 属性
  var context = Object.create(constructor.prototype);
  // 执行构造函数
  var result = constructor.apply(context, args);
  // 如果返回结果是对象，就直接返回，否则返回 context 对象
  return (typeof result === 'object' && result != null) ? result : context;
}

// 实例
var actor = _new(Person, '张三', 28);
```

**Object.create() 创建实例对象**:
这个方法是以现有的实例对象作为模板，生成新的实例对象。
```js
var person1 = {
  name: '张三',
  age: 38,
  greeting: function() {
    console.log('Hi! I\'m ' + this.name + '.');
  }
};

var person2 = Object.create(person1);

person2.name // 张三
person2.greeting() // Hi! I'm 张三.
```
上述代码中，person1 对象是 person2 的模板，后者继承了前者的方法和属性
### this 关键字
**涵义**：
`this` 关键字是一个非常重要的语法点。毫不夸张地说，不理解它的含义，大部分开发任务都无法完成。\
之前有提到，`this` 可以用在构造函数中，表示<font color="#ff4500">实例对象</font>。\
[this 关键字](https://wangdoc.com/javascript/oop/this)\
<font color='#ff4500'>测试md的字体颜色</font>\
<font color='#1ba784'>测试 md 的字体颜色</font>\
<font color='#ef3473'>测试 md 的字体颜色</font>\
<font color='#813c85'>测试 md 的字体颜色</font>

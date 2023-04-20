---
title: javascript 基础
---
## 简介
这部分主要是记录一些 javascript 基础知识方面的问题
## 引用值复制

```javascript
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj1 = {name:"Alice11"}

console.log(obj1); // {name:"Alice11"}
console.log(obj2); // {name:"Alice"}

```
在这个例子中，我们首先创建了一个包含`name`属性的对象"obj1"，然后将其赋值给"obj2"。接着，我们*将"obj1"重新赋值为一个包含`name`属性的新对象*，但该对象的`name`属性值不同于原始对象。

这将导致"obj1"指向一个新的对象，但"obj2"仍然指向原始的{name: "Alice"}对象。因此，最终的结果是"obj1"包含一个属性{name: "Alice11"}，而"obj2"仍然包含一个属性{name: "Alice"}。换句话说，"obj1"的值发生了变化，但"obj2"的值保持不变。

在这个例子中，我们将"obj1"重新赋值为一个新对象，而不是修改原始对象的属性。如果我们改为*修改原始对象的属性*，例如"obj1.name = 'Alice11'"，那么"obj2"的`name`属性也会受到影响，因为它们仍然指向同一个对象。
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{333:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[s._v("#")]),s._v(" 数据类型")]),s._v(" "),t("h3",{attrs:{id:"函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[s._v("#")]),s._v(" 函数")]),s._v(" "),t("p",[s._v("函数中的 arguments 对象能够在函数内部读取所有参数")]),s._v(" "),t("p",[s._v("闭包概念：一个有权访问另一个函数内部变量的函数"),t("br"),s._v("\n闭包的作用："),t("br"),s._v("\n闭包用到了外层变量，导致外层函数不能从内存中释放。所以闭包内存持久化。"),t("br"),s._v("\n闭包的另一个作用，是封装对象私有属性和私有方法")]),s._v(" "),t("p",[s._v("立即调用函数表达式(IIFE)"),t("br"),s._v("\n作用："),t("br"),s._v("\n通过一个具有词法作用域的匿名函数，阻止了外界访问 IIFE 中的变量，不会污染全局作用域。"),t("br"),s._v("\n另外就是通过这个匿名函数表达式，可以立即执行函数"),t("br"),s._v("\n写法由来："),t("br"),s._v("\n因为函数有两种写法，一种被称为语句形式，另一种被叫做表达式形式。"),t("br"),s._v("\n为了避免解析的歧义，JavaScript 规定，如果 "),t("em",[s._v("function")]),s._v(" 关键字出现在行首，一律解释成语句。因此，引擎看到行首是 "),t("em",[s._v("function")]),s._v(" 关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾，所以就报错了。")]),s._v(" "),t("h2",{attrs:{id:"语法专题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法专题"}},[s._v("#")]),s._v(" 语法专题")]),s._v(" "),t("h3",{attrs:{id:"编程风格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编程风格"}},[s._v("#")]),s._v(" 编程风格")]),s._v(" "),t("p",[s._v("全局变量对于任何代码块都是可读可写的，这对于代码的模块化和重复使用有很大不利。"),t("br"),s._v("\n所以，如果不得不使用全局变量，尽量使用大写来表示，例如 USE_ALL，这样更能帮助区分全局变量")]),s._v(" "),t("p",[s._v("自增符和自减符:"),t("br"),s._v("\n所有的 "),t("code",[s._v("++")]),s._v(" 都可以 用 "),t("code",[s._v("+=1")]),s._v(" 进行表示。"),t("br"),s._v("\n建议使用 "),t("code",[s._v("+=1")]),s._v(" 和 "),t("code",[s._v("-=1")]),s._v(" 代替 "),t("code",[s._v("++")]),s._v(" 与 "),t("code",[s._v("--")])]),s._v(" "),t("h2",{attrs:{id:"面向对象编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面向对象编程"}},[s._v("#")]),s._v(" 面向对象编程")]),s._v(" "),t("h3",{attrs:{id:"实例对象与-new-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例对象与-new-命令"}},[s._v("#")]),s._v(" 实例对象与 new 命令")]),s._v(" "),t("h4",{attrs:{id:"_1-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-对象"}},[s._v("#")]),s._v(" 1. 对象")]),s._v(" "),t("p",[s._v("对象是单个实物的抽象。"),t("br"),s._v("\n对象是一个容器，封装了属性和方法。属性是对象的状态，方法是对象的行为")]),s._v(" "),t("h4",{attrs:{id:"_2-构造函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-构造函数"}},[s._v("#")]),s._v(" 2. 构造函数")]),s._v(" "),t("p",[s._v("构造函数就是用来生成实例的函数，是实例对象的模板。一个构造函数可以生成多个实例对象")]),s._v(" "),t("h4",{attrs:{id:"_3-构造函数的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-构造函数的特点"}},[s._v("#")]),s._v(" 3. 构造函数的特点")]),s._v(" "),t("ul",[t("li",[s._v("构造函数的内部使用了 "),t("code",[s._v("this")]),s._v(" 关键字，它代表了所要生成的实例对象")]),s._v(" "),t("li",[s._v("构造函数生成实例对象必须用 "),t("code",[s._v("new")]),s._v(" 命令")])]),s._v(" "),t("h4",{attrs:{id:"_4-new-命令原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-new-命令原理"}},[s._v("#")]),s._v(" 4. new 命令原理")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"yuanxingtu","data-src":"https://cdn.staticaly.com/gh/hfllove/image-hosting@main/yuanxingtu.5p12pk3jrsc0.webp",loading:"lazy"}}),t("br"),s._v("\n使用new命令时，它后面的函数依次执行下面的步骤。")]),s._v(" "),t("p",[s._v("创建一个空对象，作为将要返回的对象实例。"),t("br"),s._v("\n将这个空对象的原型，指向构造函数的prototype属性。"),t("br"),s._v("\n将这个空对象赋值给函数内部的this关键字。"),t("br"),s._v("\n开始执行构造函数内部的代码。"),t("br"),s._v("\n也就是说，构造函数内部，this 指的是一个新生成的空对象，所有针对 this 的操作，都会发生在这个空对象上。构造函数之所以叫“构造函数”，就是说这个函数的目的，就是操作一个空对象（即 this 对象），将其“构造”为需要的样子。")]),s._v(" "),t("p",[s._v("如果构造函数内部有 return 语句，而且 return 后面跟着一个对象，new 命令会返回 return 语句指定的对象；否则，就会不管 return 语句，返回 this 对象。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("Vehicle")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vehicle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("上面代码中，构造函数 Vehicle 的 return 语句返回一个数值。这时，new 命令就会忽略这个 return 语句，返回“构造”后的 this 对象。")]),s._v(" "),t("p",[s._v("但是，如果 return 语句返回的是一个跟 this 无关的新对象，new 命令会返回这个新对象，而不是 this 对象。这一点需要特别引起注意。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("Vehicle")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("price")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vehicle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("上面代码中，构造函数 Vehicle 的 return 语句，返回的是一个新对象。new 命令会返回这个对象，而不是 this 对象。")]),s._v(" "),t("p",[s._v("另一方面，如果对普通函数（内部没有 this 关键字的函数）使用 new 命令，则会返回一个空对象。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'this is a message'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" msg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("getMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmsg "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// {}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" msg "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "object"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("上面代码中，getMessage 是一个普通函数，返回一个字符串。对它使用 new 命令，会得到一个空对象。这是因为 new 命令总是返回一个对象，要么是实例对象，要么是 return 语句指定的对象。本例中，return 语句返回的是字符串，所以 new 命令就忽略了该语句。")]),s._v(" "),t("p",[s._v("new 命令简化的内部流程，可以用下面的代码表示。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("_new")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 构造函数 */")]),s._v(" constructor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 构造函数参数 */")]),s._v(" params"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将 arguments 对象转为数组")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" args "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("call")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arguments"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取出构造函数")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" constructor "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shift")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建一个空对象，继承构造函数的 prototype 属性")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" context "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("constructor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行构造函数")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apply")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果返回结果是对象，就直接返回，否则返回 context 对象")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'object'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 实例")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" actor "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("_new")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Person"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h4",{attrs:{id:"_5-object-create-创建实例对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-object-create-创建实例对象"}},[s._v("#")]),s._v(" 5. Object.create() 创建实例对象")]),s._v(" "),t("p",[s._v("这个方法是以现有的实例对象作为模板，生成新的实例对象。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" person1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("age")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("38")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("greeting")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hi! I\\'m '")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" person2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("person1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nperson2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 张三")]),s._v("\nperson2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("greeting")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Hi! I'm 张三.")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("上述代码中，person1 对象是 person2 的模板，后者继承了前者的方法和属性")]),s._v(" "),t("h3",{attrs:{id:"this-关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#this-关键字"}},[s._v("#")]),s._v(" this 关键字")]),s._v(" "),t("h4",{attrs:{id:"_1-涵义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-涵义"}},[s._v("#")]),s._v(" 1. 涵义")]),s._v(" "),t("p",[t("code",[s._v("this")]),s._v(" 关键字是一个非常重要的语法点。毫不夸张地说，不理解它的含义，大部分开发任务都无法完成。"),t("br"),s._v("\n之前有提到，"),t("code",[s._v("this")]),s._v(" 可以用在构造函数中，表示"),t("font",{attrs:{color:"#158bb8"}},[s._v("实例对象")]),s._v("。"),t("br"),s._v(" "),t("a",{attrs:{href:"https://wangdoc.com/javascript/oop/this",target:"_blank",rel:"noopener noreferrer"}},[s._v("this 关键字"),t("OutboundLink")],1)],1)])}),[],!1,null,null,null);t.default=r.exports}}]);
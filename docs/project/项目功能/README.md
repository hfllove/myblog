---
title: input 组件封装
---
## v-model 的实现原理

v-model 其实是 `value` 和 `input` 的语法糖。\
它的实现是：\
通过给子组件绑定 `value` 自定义属性 `props`，以及名为 `input` 的自定义事件。在子组件中通过 `this.$emit("input",e.target.value)`，将子组件的值传递给父组件，由父组件进行处理。\
那么在父组件上 `<myInput2 :value="inputValue2" @input="inputOut"></myInput2>` 通过 value 这个 props 自定义属性，又传到了子组件上，子组件接收之后就会在 input 框内显示。

## 模糊查询功能

### 1. 不需要的时候可以关上

定义一个 `searchAction2` ，当用户进行搜索行为的时候，就调用搜索关键字。下面进行具体实现：\
在子组件中定义一个 `searchAction2`

```js
// 子组件
export default {
    props: {
        ...
        searchAction2: {
            type: [String,Boolean],
            default: false || ''
        }
    },
}
```

上面代码中，`searchAction2` 被设置为 `String` 与 `Boolean` 两种类型，是为了之后进行扩展。 接下来在 input 事件中设置搜索的逻辑

```js
// 子组件
export default{
    methods:{
        // input 输入事件
        inputIn(e) {
            let _val = e.target.value
            if(this.searchAction2) {
                this.search()
            }
            this.$emit("inputIn2",_val)
        }
    }
}
```

然后我们来实现在搜索框下面的关键词列表

```html
<!--子组件-->
<template>
  <div class="input-wrap">
    input2<br> <input :type="type" :value="value" @input="inputIn" @searchAction2="searchAction2">
    <!--添加一个关键词列表-->
    <div class="search-list"></div> 
  </div>
</template>
```

上面添加了一个 div 用来作为关键词列表的容器，下面来实现这个容器的定位

```css
/* 子组件 */
.wrap-relative {
    position: relative;
}
.search-list {
    position: absolute;
    left: 0;
    right: 0;
    top: 20px;
    background-color: white;
}
```

接着来实现动态的将 .wrap-relative 动态的添加到相应的元素上

```html
<!--子组件-->
<template>
  <div :class="['input-wrap',{'wrap-relative':searchAction}]">
    ...
    <!--添加一个关键词列表-->
    <div class="search-list"></div> 
  </div>
</template>
```

这样就完成了动态添加关键字列表

### 2. 如何进行模糊搜索查询功能

通过给 searchAction 传值，定义模糊搜索的查询功能。而传值分为两种：

*   传入 String 类型 url。只需要传入 url，然后自动的请求 url 地址，拿到模糊搜索查询的结果
*   传入 Boolean 类型的值，表示子组件用 `$emit` 将搜索的方式交给父组件处理

#### 2.1 url 传值的弊端

用 url 作为模糊搜索的结果，会无法应对一些特殊情况，比如模糊搜索的结果需要操作一下才能显示，或者说要连接多个接口才行。

#### 2.2 通过自定义事件传值

子组件使用 \$emit 将用户输入的行为交给父组件，进行自定义处理。

#### 2.3 两种方式结合兼顾

为了完全兼顾两种方式，我们需要将这两种方式结合起来。我们可以根据 searchAction2 的取值来选择相应的方式进行传值。

```html
<!--父组件-->
<template>
<myInput2 :value="inputValue2" @inputIn2="inputOut" :searchAction2="true" @search="search" :searchData="searchData"></myInput2>
</template>
```

上面代码中，searchAction2 取值为 Boolean 类型时，就表示是通过自定义事件 \$emit 进行传值。那么就需要传入 searchData 到子组件，在子组件用计算属性 `computed` 根据这个数据划分搜索关键字的数据存储位置。

```js
// 子组件
export default {
    props: {
        ...
        searchData: {
            type: Array,
            default: ()=>{return []}
        }
    },
    computed: {
        // 确定数据的归属问题
        searchList() {
            if(this.searchData.length > 0) {
                return this.searchData
            }else {
                return this.localSearchData
            }
        }
    },
}
```

如果父组件传递了 `searchData` 就使用父组件的数据，否则就使用子组件的数据。下面是根据用户输入的信息调用搜索关键字列表的逻辑实现。

```js
// 子组件
export default {
    methods:{
        // input 输入事件
        inputIn(e) {
            let _val = e.target.value
            if(this.searchAction2) {
                this.search(_val)
            }
            this.$emit("inputIn2",_val)
        },
        search(val) {
            // url 方式传值
            if(typeof this.searchAction2 == "string") {
                console.log("这是 url 传值",val)
                this.localSearchData = ["url传值1","url传值2","url传值3","url传值4","url传值5"]
                this.$emit("search",this.localSearchData)
            }else{
                // 完全交给父组件去操作
                this.$emit("search")
            }
        }
    }
}
```

当获取到搜索关键字列表时，需要在页面进行展示。

```html
<!--子组件-->
<template>
  <div :class="['input-wrap',{'wrap-relative':searchAction2}]">
   ...
    <div class="search-list" v-if="searchAction2 && searchList.length && showList">
        <div v-for="(item,index) in searchList" :key="index">
            {{item}}
        </div>
    </div> 
  </div>
</template>
```

这个搜索关键字列表的显示条件，由 搜索行为 searchAction2 、searchList 搜索数据以及 showList 控制显示标识共同决定。具体实现逻辑是：\
当用户进行搜索输入的时候，需要显示关键字列表，然后用户选择一个关键字之后，关键字列表要隐藏，再将选中的关键字在搜索框中显示。\
首先，我们给关键字列表的每个子元素都添加点击事件，将关键词列表的每个子元素都传递到点击事件中

```html
<!--子组件-->
<template>
  <div :class="['input-wrap',{'wrap-relative':searchAction2}]">
    ...
    <!--关键字列表-->
    <div class="search-list" v-if="searchAction2 && searchList.length && showList">
        <!--子元素-->
        <div v-for="(item,index) in searchList" :key="index" @click="choose(item)" >
            {{item}}
        </div>
    </div> 
  </div>
</template>
```

在 search 函数中修改控制列表显示的标识，此时让关键字列表进行展示，当用户点击关键字时，会触发点击的回调函数，这个时候我们修改标识的值，让列表进行隐藏

```js
// 子组件
export default {
    data () {
        return {
            showList: false       
       }
    },
    methods: {
        search(val) {
            // url 方式传值
            this.showList = true
            if(typeof this.searchAction2 == "string") {
                console.log("这是 url 传值",val)
                this.localSearchData = ["url传值1","url传值2","url传值3","url传值4","url传值5"]
                this.$emit("search",this.localSearchData)
            }else{
                // 完全交给父组件去操作
                this.$emit("search")
            }
        },
        choose(item) {
            this.$emit("inputIn2",item)
            this.showList = false
        }
    }
}
```

不管是哪一种方式传递搜索数据，都需要由父组件处理关键词列表数据

```html
<!--父组件-->
<template>
<div class="main">
  <myInput2 :value="inputValue2" @inputIn2="inputOut" :searchAction2="true" @search="search" :searchData="searchData"></myInput2>
    ...
</div>
  
</template>
```

由于子组件中触发了父组件中定义的自定义事件，所以相应的，要在父组件上去绑定一个自定义事件，然后在这个事件中处理逻辑

```js
// 父组件
export default {
    methods: {
        search () {
            // 逻辑书写示例
            this.searchData = ["a1","b1","a","b","ab","abc","c1"]
        }
    }
}
```

当然，还可以进一步对这个搜索框列表进行一个小优化，当清除输入框的内容时，应该将搜索列表进行隐藏。

```js
// 子组件
watch: {
        // 监听输入框的值，如果为空，关闭搜索关键词列表
        value () {
            if(!this.value){
                this.showList = false
            }
        }
    }
```

通过在子组件中监听输入框 value 的值是否为空，来修改控制搜索列表标识的值，达到输入为空时，隐藏列表的效果。

### 3. 性能优化之防抖

用户每次输入都会被进行计算处理，确定是否显示搜索列表，这很耗费性能。而防抖是每当超过一定时间间隔才会触发，一旦在规定的时间间隔之内触发，都会被取消。所以，这里采用防抖对输入行为进行优化。

```js
// 子组件
export default {
    methods: {
        inputIn(e) {
            let _val = e.target.value;
            // console.log(_val)
            this.$emit("inputIn2", _val);
            if (this.searchAction2) {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    this.search(_val);
                }, 500);
            }
        },
    }
}
```

这里存在一个问题，当设置了定时器时，输入框快速清空之后，搜索列表不会被隐藏，这是因为定时器没有被清除，执行了搜索行为，导致没有执行 watch 里面的修改控制搜索列表显示标识。在监听 value 的函数中，清除定时器即可

```js
// 子组件
watch: {
        // 监听输入框的值，如果为空，关闭搜索关键词列表，同时要清除定时器
        value() {
            if (this.value === "") {
                clearTimeout(timer);
                this.showList = false;
            }
        },
    }
```

## 校验信息功能

在父组件中传入一个自定义属性 `validator`，子组件用 `props` 接收父组件传过来的校验规则，并且定义它的类型为 `Object`。

```html
<!--父组件-->
<template>
<div class="main">
  <!-- 表单验证封装 -->
  <myInput2 :value="inputValue2" @inputIn2="inputOut" :validator="{test:'phone',mes:'不是一个国内手机号'}"></myInput2>
</div>
  
</template>

<!--子组件-->
<template>
    <div :class="['input-wrap', { 'wrap-relative': searchAction2 }]">
        input2<br />
        <input :type="type" :value="value" @input="inputIn" @blur="inputBlur" />
        <div class="pDiv">
            <p v-if="validatorMes !== ''">{{ validatorMes }}</p>
        </div>
    </div>
</template>
```

接着给子组件绑定失焦事件 @blur，在表单失焦事件中，需要确定验证规则的类型，如果是字符串类型，则表示是子组件内置的校验规则。如果是对象类型，或者函数类型则表示是父组件传递到子组件的。\
下面这段代码，表示在失焦事件中，根据不同类型的 props 属性，采用不同的判断方法，并将判断的真假以标识 \_bol 进行取反存储。最后根据取反的 \_bol，显示错误提示信息 \_mes。这样做就增强了封装的扩展性，满足更多的业务需求。

```js
// 子组件
export default {
    methods: {
        async inputBlur(e) {
            let _value = e.target.value;
            let _validator = this.validator;
            if (_validator.test) {
                // 验证是否通过的标识
                let _bol = false;
                let _mes = "";
                // 内置的验证规则
                let testWay = {
                    number: /^\d+$/,
                    phone: /^1[3-9]\d{9}$/,
                };
                switch (typeof _validator.test) {
                    case "string": {
                        let _test = testWay[_validator.test];
                        _bol = !_test.test(_value);
                        _mes = _validator.mes;
                        break;
                    }
                    case "object": {
                        _bol = !_validator.test.test(_value);
                        _mes = _validator.mes;
                        break;
                    }
                    case "function": {
                        let _result = _validator.test(_value);
                        _bol = !_result.result;
                        _mes = _result.mes;
                        break;
                    }
                    default:
                        break;
                }
                // console.log(_bol);
                if (_bol) {
                    // 如果当前输入的手机号不正确
                    this.validatorMes = _mes;
                } else {
                    this.validatorMes = "";
                }
            }
            this.$emit("blur")
        },
    }
}
```
参考自[B站-input组件封装](https://www.bilibili.com/video/BV1vT411z7Dt/?spm_id_from=333.999.0.0&vd_source=383d958999bc6841badec4b1b44b3b84)

---
title: vue 后台管理项目
---
## 前言
- 该项目基于 github 上的后台管理系统模板 [vue-admin-template-master](https://github.com/PanJiaChen/vue-admin-template) 搭建而成
- 该项目给卖家(老板、员工)提供了一个可视化操作数据库的平台
- 不同的用户角色，所看到的、操作的内容是不同的
- 对于后台管理系统项目，一般不需要注册
- 项目使用 elementUI 框架进行静态页面开发
## 项目文件
### 安装后台模板
从 github 上下载该模板，然后在项目的根目录下，打开命令行窗口，执行 `npm install` 下载项目所需要的依赖包
### 项目文件组成
该项目主要的树形目录结构如下：
```js
├── .eslintignore               // eslint校验时忽略的文件
├── .gitgnore                   // git提交的忽略文件 
├── .env.staging                // 测试环境                
├── .env.production             // 生产环境
├── .env.development            // 开发环境
├── .editorconfig               // 设置字符编码和文件格式的地方
├── babel.config.js             // 兼容es5
├── jest.config.js              // 测试框架的配置文件
├── jsconfig.json               // 配置src别名
├── LICENSE                     // 版权声明
├── build---index.js            // webpack配置文件
├── mock/                       // 模拟后台数据
├── package-lock.json           // 版本锁定的项目依赖配置
├── package.json                // 项目名称、版本、运行依赖
├── postcss.config.js           // 配置不同浏览器css样式兼容的地方
├── public/                     // (打包后不会被编译)静态资源
├── src/                        // 程序员源代码文件夹
├── settings.js                 // 配置网页标题及导航标题内容的地方
├── permission.js               // 配置请求头和路由守卫的地方
├── main.js                     // 入口文件
├── App.vue                     // 根组件---单页面路由展示的出口
└── vue.config.js               // 一个可选的配置文件
```
src 文件下的树形目录结构如下：

```js
├── src/                        // 程序员源代码文件夹
|  ├── api/                     // 服务器请求接口
|  ├── assets/                  // (打包后会被编译)静态资源
|  ├── components/              // 一般放置非路由组件的全局组件
|  ├── icons/                   // 放置一些svg图片资源
|  ├── layout/                  // 放置一些组件和混入的地方
|  ├── router/                  // 配置路由
|  ├── store/                   // 配置vuex
|  ├── styles/                  // 放置css样式文件
|  ├── utils/                   // 配置token令牌以及网页标题的地方
|  └── views/                   // 放置(非全局)路由组件的地方
```
## 项目功能模块
项目的功能模块，包括登录、

### 登录模块
该模块是为了实现用户登录后台管理系统的功能，同时通过路由守卫以实现不同角色的权限分配。

#### 1. 静态结构

使用 `el-form` 组件进行用户信息的收集，通过它的 *model* 属性收集表单数据，以及 *rules* 进行表单验证。而 `el-form` 组件通常在内部搭配 `el-form-item` 组件。
```html
<el-form 
    ref="loginForm" 
    :model="loginForm" 
    :rules="loginRules" 
    class="login-form" 
    auto-complete="on" 
    label-position="left">

    <el-form-item></el-form-item>
</el-form>
```
在 `el-form-item` 组件内部，用 `el-input` 组件实现用户名和密码的输入。通过 *v-model* 属性收集用户名和密码。

用户名的收集
```html
<el-form-item prop="username">
    <span class="svg-container">
        <svg-icon icon-class="user" />
    </span>
    <el-input
        ref="username"
        v-model="loginForm.username"
        placeholder="Username"
        name="username"
        type="text"
        tabindex="1"
        auto-complete="on"
    />
</el-form-item>
```
密码的收集
```html
<el-form-item prop="password">
    ...
    <el-input
        :key="passwordType"
        ref="password"
        v-model="loginForm.password"
        :type="passwordType"
        placeholder="Password"
        name="password"
        tabindex="2"
        auto-complete="on"
        @keyup.enter.native="handleLogin"
    />
    ...
</el-form-item>
```
收集完用户名和密码，需要通过点击 `el-button` 登录按钮，提交收集的用户数据，实现登录功能。
```html
<el-button 
    :loading="loading" 
    type="primary" 
    style="width:100%;margin-bottom:30px;" 
    @click.native.prevent="handleLogin">
    点击登录
</el-button>
```

#### 2. 业务逻辑

当用户输入相应的用户名和密码，点击登录之后，需要对用户输入的信息进行验证，验证完毕，再加载 loading 登录的动画效果。如果登录成功，则进行路由的跳转，否则停止加载登录动效。实现代码如下：

data 中的初始化 username、password、以及 loginRules 登录校验规则等数据：
```javascript
data() {
    // 登录的用户名以及密码的校验
    const validateUsername = (rule, value, callback) => {
      ...
    }
    const validatePassword = (rule, value, callback) => {
      ...
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
```
在 methods 方法中定义 handleLogin 函数，实现登录逻辑：
```javascript
methods: {
handleLogin() {
    // 加载登录的动画
    this.loading = true
    // 向服务器发请求，获取用户信息
    this.$store.dispatch('user/login', this.loginForm).then(() => {
    // 如果成功，进行路由跳转
    this.$router.push({ path: this.redirect || '/' })
    this.loading = false
    }).catch(() => {
        this.loading = false
    })
    }
}
```
用 watch 属性监听路由的变化，以此实现路由的跳转：
```javascript
watch: {
    $route: {
      handler: function(route) {
        // 监听路由路径，
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
},
```
#### 3. API 接口处理
在用户登录进行路由跳转之前，需要向服务器发请求，获取用户信息。因此，在使用 API 接口之前，需要进行预配置。

`src/api/user.js`中配置 API 请求：
```javascript
import request from '@/utils/request'

// 用户登录的请求
export function login(data) {
  return request({
    url: '/admin/acl/index/login',
    method: 'post',
    data
  })
}
```

#### 4. axios 的二次封装
>为了设置登录验证，以及简化代码，提高代码质量，所以要在项目中二次封装 axios。\
该项目中的二次封装配置文件，相对路径为 `src/utils/request.js`

用于登录验证的 token 具体流程如下图所示：

![sd9fs89sdf](https://cdn.staticaly.com/gh/hfllove/image-hosting@main/sd9fs89sdf.2pa6mss07f60.webp)

该项目中的 axios 二次封装主要实现以下功能：

- 在请求前添加了一个请求拦截器，用于在请求头中添加 token 字段，以便后端验证用户身份。
- 在响应后添加了一个响应拦截器，用于判断请求的状态码并给出相应的提示信息，同时在 token 过期或非法的情况下，弹出确认框提示用户重新登录。

具体来说，代码中的 service 对象通过 `axios.create()` 创建一个新的 axios 实例，并设置了一些默认配置，例如请求的超时时间、请求的基础 URL 等。该对象同时添加了请求拦截器和响应拦截器，分别对请求和响应做出了处理。
```javascript
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 根据环境变量的不同，设置不同的请求前缀
  timeout: 5000 // 超时时间
})
```
在请求拦截器中，我们通过 `config.headers['token'] = getToken()` 的方式在请求头中添加了一个名为 token 的字段，该字段的值为当前用户的 token。
```javascript
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
```
在响应拦截器中，我们首先判断响应的状态码，如果不是 20000 或者 200，则说明请求失败，此时我们使用 Element UI 的 Message 组件给出相应的错误提示信息。如果状态码是 50008、50012 或者 50014，则说明用户的 token 不合法或者已经过期，此时我们弹出确认框提示用户重新登录。
```javascript
service.interceptors.response.use(
  response => {
    const res = response.data

    // 服务器响应失败干什么
    if (res.code !== 20000 && res.code !==200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      // 如果状态码是 50008、50012 或者 50014，
      // 则说明用户的 token 不合法或者已经过期，此时我们弹出确认框提示用户重新登录。
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, ...', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      // 服务器响应成功干什么
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
```
最后，我们将该 service 对象导出供其他模块使用。在实际开发中，我们可以通过引入该模块来发起 HTTP 请求，从而与后端进行数据交互。
```javascript
export default service
```



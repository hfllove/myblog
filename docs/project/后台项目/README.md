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
|  ├── layout/                  // 放置整体布局组件的地方
|  ├── router/                  // 配置路由
|  ├── store/                   // 配置vuex
|  ├── styles/                  // 放置css样式文件
|  ├── utils/                   // 配置token令牌以及网页标题的地方
|  └── views/                   // 放置(非全局)路由组件的地方
```
## 项目前置
在展开项目之前，需要先对 项目中的 axios 进行二次封装，以及对请求跨域进行 webpack 配置
### axios 二次封装
>为了设置登录验证，以及简化代码，提高代码质量，所以要在项目中二次封装 axios。\
该项目中的二次封装配置文件，相对路径为 `src/utils/request.js`

用于登录验证的 token 具体用法如下图所示：

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
### webpack 代理跨域
在 `vue.config.js` 文件中，使用 webpack 配置解决跨域问题：
```javascript
module.exports = {
  ...
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // webpack配置代理跨域
    proxy: {
      '/dev-api/admin/acl': {  // /dev-api 表示拦截以/dev-api开头的请求路径
        target: 'http://39.98.123.211:8170', // 跨域的域名
        changeOrigin: true, // 是否开启跨域
        // 修改最终请求的路径，也就是说最终访问的时候会把'dev-api'命名删除掉
        pathRewrite: { '^/dev-api': '' } 
      },
      '/dev-api/admin/product': {
        target: 'http://39.98.123.211:8510',
        changeOrigin: true,
        pathRewrite: { '^/dev-api': '' }
      }
    },
    //###1 开启mock数据
    after: require('./mock/mock-server.js')

  },
  ...
}
```

## 项目路由组件

项目的路由组件需要在 `router` 文件夹中进行注册。下面是创建组件并将其注册为路由组件的一个实例：

`src/view/product` 文件夹下，创建一个 tradeMark 文件夹，放置 tradeMark 平台属性组件代码。在 `src/router/index.js`中将其注册为路由组件

```javascript
export const asyncRoutes = [
{
    path: '/product',
    component: Layout,
    name: 'Product',
    meta: {title:'商品管理',icon: 'el-icon-goods'},
    children: [
      ...
      {
        path: 'trademark',
        name: 'Trademark',
        component: ()=> import('@/views/product/tradeMark'),
        meta: {title: '品牌管理'}
      },
      ...
    ]
  }
]
```
通过上述代码，可以实现点击侧边栏 layout 组件，进行当前页面刷新的路由跳转

## 页面动态渲染的流程图

![a3sdfsrs2-2023-03-30-1558](https://cdn.staticaly.com/gh/hfllove/image-hosting@main/a3sdfsrs2-2023-03-30-1558.2fd5javnzrms.webp)

页面动态渲染数据的流程大致如下：

1. 构建页面静态结构
2. 组件上定义事件函数或方法
3. vuex 或者 组件上发请求获取服务器数据
4. 在组件定义的事件函数或方法中，处理服务器返回的数据
5. 页面中通过 vue 的模板指令动态的展示组件上的数据

## 项目功能模块

项目的功能模块，包括登录、

### 登录模块

![Snipaste_2023-04-16_08-51-52](https://cdn.staticaly.com/gh/hfllove/image-hosting@main/Snipaste_2023-04-16_08-51-52.2qkra0sqmnq0.webp)

该模块是为了实现用户登录后台管理系统的功能，同时通过路由守卫以实现不同角色的权限分配。

#### 1. 静态结构
el-form 组件结构应用实例(一)

- el-form-item 组件结构应用实例(一)

- el-button 应用实例(一)
#### 2. API 接口处理
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
#### 3. 业务逻辑

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

#### 4. vuex 处理 API 请求

>vuex 是存储数据的仓库，包括处理派发自页面的服务器请求\
文件路径：`src/store/modules/user.js`

在 actions 配置对象中，将从组件派发的请求发送到服务器，进行用户登录名称和密码的校验。如果返回结果成功，那么将服务器返回的 token 提交到 mutations 配置项中，并且将 token 进行本地存储，使数据持久化。
```js
const actions = {
	// 用户登录的请求
	async login({ commit }, userInfo) {
    const { username, password } = userInfo
    // 校验用户登录的名称和密码
    let result = await login({ username: username.trim(), password: password })
    if (result.code == 20000 || result.code == 200) {
    // console.log(result)
    commit('SET_TOKEN', result.data.token)
    setToken(result.data.token)
    return 'ok'
    } else {
    return new Promise.reject(Error('fail'))
    }
},
```
mutations 配置项中，将 token 存储到 state 存储函数中
```javascript
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}
```
### 退出登录

当用户登录进入后台管理系统首页时，点击首页右侧的 `退出登录` 按钮，可以让用户退出当前登录的账号

![Snipaste_2023-04-16_09-17-08](https://cdn.staticaly.com/gh/hfllove/image-hosting@main/Snipaste_2023-04-16_09-17-08.18hqaqv6yxk0.webp)

#### 1. 静态结构

> 文件路径：src/layout/components/Navbar.vue

退出登录功能被包含在一个简易的导航栏中，这个导航栏是用 `el-dropdown` 这个组件实现的，具体代码如下：

```html
<div class="navbar">
    ...
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        ...
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
```

<details> 
<summary><font size="4" color="orange">el-dropdown 的结构</font></summary> 
<pre><code>el-dropdown 包括两个子组件 el-dropdown-menu 与 el-dropdown-item</code>
</pre></details>

#### 2. API 接口处理

> 文件路径：src/api/user.js

以下是定义好的 API 接口配置：

```js
// 用户退出登录的请求
export function logout() {
  return request({
    url: '/admin/acl/index/logout',
    method: 'post'
  })
}
```
#### 3. 业务逻辑

点击 `退出登录`按钮，组件向 vuex 派发请求，在 vuex 中处理服务器的请求，组件接收请求返回的结果，如果成功，将进行路由的跳转

以下是绑定到`退出登录` 按钮的 logout 回调函数具体实现：

```js
methods: {
  async logout() {
    await this.$store.dispatch('user/logout')
    this.$router.push(`/login?redirect=${this.$route.fullPath}`)
	}
}
```

#### 4. vuex 中移除 token
在 actions 配置项中，带着存储在 state 存储函数中的 token，向服务器发请求，如果返回的结果为成功，则移除本地的 token，重置路由，提交重置 state 数据到 mutations。

```js
// 用户退出登录
async logout({ commit, state }) {
  let result = await logout(state.token)
  if(result.code == 20000 || result.code == 200) {
    removeToken()
    resetRouter()
    commit('RESET_STATE')
    return 'ok'
  }else {
    return new Promise.reject(Error('fail'))
  }
},
```
然后在 mutations 中去完成重置 state 数据
```javascript
const getDefaultState = () => {
  return {
    // 用户登录验证的token
    token: getToken(),
    ...
  }
}

const state = getDefaultState()
const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
}
```
### 品牌管理模块
>通过品牌管理模块，能够实现对品牌的名称、图片进行修改和删除

![Snipaste_2023-04-17_12-08-32](https://cdn.staticaly.com/gh/hfllove/image-hosting@main/Snipaste_2023-04-17_12-08-32.as5tik98fvk.webp)

#### 1. 静态结构
**1.1 品牌列表** 
> `src/views/product/tradeMark/index.vue`

品牌管理模块用 `el-table` 组件与 `el-table-column` 组件来展示品牌的数据。

*静态展示*：

el-table 与 el-table-column 应用实例(一)

*点击事件*：

el-dialog 应用实例(一)
- el-upload 应用实例(一)

row 与 template 应用实例(一)

**1.2 底部分页**

`el-pagination` 组件实现底部的分页。

el-pagination 应用实例(一)
#### 2. 挂载 API 到 Vue 原型上
在 `src/api/product/tradeMark.js` 中配置 API 请求。将 product 文件夹下的请求文件，统一引入到 `src/api/index.js` 中，并进行对外暴露
```javascript
// 将四个模块请求的接口函数统一暴露
import * as trademark from './product/tradeMark'
import * as spu from './product/spu'
import * as sku from './product/sku'
import * as attr from './product/attr'
import * as user from './acl/user'
//###1 由于role、permission都是默认暴露，所以引入的时候要给它起一个名字
import  role from './acl/role'
import  permission from './acl/permission'

// 对外暴露 
export default {
    trademark,
    spu,
    sku,
    attr,
    user,
    role,
    permission
}
```
在 `main.js` 中引入该公共配置，并且将它注册到 Vue 原型上，这样就可以在任意组件上去使用这些挂载的 API
```javascript
import API from '@/api'

Vue.prototype.$API = API
```
#### 3. 组件上获取分页数据

在 data 存储函数中进行分页数据和品牌展示列表数据的初始化
```javascript
data () {
  return {
    list: [],
    // 初始化数据
    // 每页的条数
    limit: 3,
    // 当前页
    page: 1,
    // 总页数
    total: 0,
  },
}
```
在 methods 属性中定义获取品牌属性列表数据以及分页数据的方法
```javascript
methods: {
  // 获取品牌列表数据以及分页数据
  async getPageList(pager = 1) {
    this.page = pager;
    const { limit, page } = this;
    let result = await this.$API.trademark.reqPageList(page, limit);
    if (result.code == 200) {
      this.list = result.data.records;
      this.total = result.data.total;
    }
  },
},
```
当组件生命周期挂载完成，就执行上面的方法
```javascript
mounted() {
    this.getPageList();
},
```
那么，这样就通过服务器请求的方式，更新了 data 存储函数中的初始化数据，再通过页面结构中的 elementUI 组件绑定组件上数据，就实现了从组件到页面的数据传入
```html
<el-table :data="list" style="width: 100%" border>
  ...
</el-table>
```

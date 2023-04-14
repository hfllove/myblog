---
title: vue 后台管理项目
---
## 前言
- 该项目基于 github 上的后台管理系统模板 [vue-admin-template-master](https://github.com/PanJiaChen/vue-admin-template) 搭建而成
- 该项目给卖家(老板、员工)提供了一个可视化操作数据库的平台
- 不同的用户角色，所看到的、操作的内容是不同的
- 对于后台管理系统项目，一般不需要注册
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
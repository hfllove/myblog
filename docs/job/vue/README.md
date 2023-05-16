---
title: 面试题
---
## cookie 和 session 的区别
[cookie 和 session 的区别](https://juejin.cn/post/6844903937523482631)\
[傻傻分不清之 Cookie、Session、Token、JWT](https://juejin.cn/post/6844904034181070861)
## 闭包
### 概念

### 优缺点
### 应用
## MVVM 模型的理解
## Vue 响应式原理
## Vue 中常见修饰符
### 表单修饰符
## Vue 中 watch 和 computed 有什么区别
### 页面首次加载触发监听
## vue 项目首屏加载优化
## vue 动态组件
## vue2 和 vue3 的区别
## vue3 组合式API 的优点
## 后台管理系统中的权限管理是怎么实现的？
[后台管理系统中权限管理](https://juejin.cn/post/7056400571967733774#heading-18)
## vue后台管理项目中，修改路由的权限，怎么实现员工不重新登录就更新员工的权限？
要在Vue后台管理项目中修改路由的权限，而不需要员工重新登录就更新员工的权限，你可以按照以下步骤进行操作：
1. 在Vue中，你需要存储当前用户的权限信息，通常可以将其存储在Vuex状态管理中，或者使用类似localStorage的本地存储。
2. 在路由配置中，每个需要受权限控制的路由都要添加一个权限要求，例如使用meta字段来表示该路由所需的权限。
```js
// 路由配置示例
const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiredPermission: 'dashboard:view' } // 示例权限要求
  },
  // 其他路由配置
];
```
3. 在路由守卫中，监听路由导航事件，检查当前用户的权限与目标路由的权限要求是否匹配。
```js
// 路由守卫示例
router.beforeEach((to, from, next) => {
  const requiredPermission = to.meta.requiredPermission;
  const userPermissions = getUserPermissions(); // 从存储中获取当前用户的权限信息

  if (requiredPermission && !userPermissions.includes(requiredPermission)) {
    // 当前用户没有访问该路由所需的权限，可以根据需要进行相应的处理，例如跳转到无权限页面或其他操作
    // 在这里你可以根据业务需求来实现不同的处理逻辑
    next('/no-permission');
  } else {
    // 用户权限匹配，允许访问该路由
    next();
  }
});
```
4. 当员工的权限发生变化时，你需要在后端将新的权限信息返回给前端。
5. 在前端，当你收到后端返回的新权限信息后，更新存储中的用户权限信息。
```js
// 示例代码
// 假设你使用Vuex存储用户信息，通过Vuex的action来更新用户权限
// 在Vuex store中定义一个user模块，包含更新用户权限的action
// user.js
const state = {
  permissions: [] // 用户权限信息
};

const mutations = {
  setPermissions(state, permissions) {
    state.permissions = permissions;
  }
};

const actions = {
  updatePermissions({ commit }, permissions) {
    // 更新用户权限
    commit('setPermissions', permissions);
  }
};

export default {
  state,
  mutations,
  actions
};
```
6. 在适当的时机，调用上述的更新用户权限的action。
```js
// 示例代码
// 在需要更新权限的地方调用updatePermissions action，传入新的权限信息
this.$store.dispatch('user/updatePermissions', newPermissions);
```
通过上述步骤，你可以实现在Vue后台管理项目中修改路由的权限，而不需要员工重新登录就能更新员工的权限。注意，这里的示例使用了Vuex来存储用户权限信息，你可以根据实际情况进行适当的调整，比如使用其他状态管理库或自定义解决方案。

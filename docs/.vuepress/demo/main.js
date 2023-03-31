import Vue from 'vue'
// 根组件
import App from './App.vue'
// 引入路由配置文件
import router from '@/router'
// 引入仓库
import store from '@/store'
Vue.config.productionTip = false

// 引入jQuery插件
import $ from 'jquery'
// 引入字体图标样式
import './assets/iconfont/iconfont.css'
// 引入mock
import '@/mock/mockServer.js'
// 三级联动组件 --- 全局组件
import TypeNav from '@/components/TypeNav'
// 将三级联动组件注册为全局组件
Vue.component(TypeNav.name,TypeNav)
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)
// 引入api文件夹里所有的请求，并且命名为API
import * as API from '@/api/index'

// 引入Element UI 部分组件
import {MessageBox} from 'element-ui'
// Element UI组件使用方式之一：将Element UI组件 MessageBox及MessageBox的属性alert 挂载到Vue构造函数的原型上
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

// 引入图片懒加载插件vue-lazyload
import VueLazyload from 'vue-lazyload' 
// 引入懒加载图片
import pikaqiu from '@/assets/pikaqiu.webp'
// 注册插件
Vue.use(VueLazyload,{
  loading: pikaqiu 
})

// 引入表单校验插件
import '@/plugins/validate'

// 测试
// import {reqCategoryList} from '@/api'
// reqCategoryList()
// 引入swiper样式
import 'swiper/css/swiper.min.css'

// 自定义指令
// Vue.use()可以接收一个对象作为参数，并且自动执行参数对象的install方法
import myPlugins from '@/plugins/myPlugins'
Vue.use(myPlugins,{
  name: "ddd"
})

const vue = new Vue({
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 注册路由配置
  router,
  // 注册仓库：组件身上会多一个$store属性
  store
}).$mount('#app')
console.log(vue)
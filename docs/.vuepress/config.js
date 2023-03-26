

const headConf = require('./config/headConf')
const pluginsConf = require('./config/pluginsConf')
const navConf = require('./config/navConf')
const sidebarConf = require('./config/sidebarConf')

module.exports = {
    // base: "/myblog/",
    title: "hfl的个人博客",
    description: "个人的项目经验记录",
    head: headConf,
    plugins: pluginsConf,
    themeConfig: {
        // 最后更新时间
        lastUpdated: '更新时间',
        // 首页左上角的图标
        logo: '/assets/img/logo1.png',
        nav: navConf,
        // 0. 自动生成侧边栏
        // sidebar: 'auto',

        // 1. 默认的侧边栏-适合介绍页
        // sidebar: [
        //     '/',
        //     '/about/',
        //     '/guide/'
        // ],

        // 2. 侧边栏分组-绝对路径(多个路径对应一个侧边栏)
        // sidebar: [
        //     {
        //         title: "guide",
        //         path: "/guide/",
        //         children:[
        //             // 绝对路径
        //             '/guide/css-a',
        //             '/guide/css-b',
        //             '/guide/css-c',
        //         ]
        //     },
        //     {
        //         title: "测试",
        //         path: "/test/",
        //         children:[
        //             '/test/test1/',
        //             '/test/test2/'
        //         ]
        //     }
        // ],

        // 3. 对象形式-多个侧边栏(一个路径对应一个侧边栏)
        sidebar: sidebarConf,
        sidebarDepth: 2
    }
}
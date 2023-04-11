module.exports = [
    { text: '首页', link: '/' },
    {
        text: '前端积累',//一级导航标题
        items: [
            {
                text: 'Javascript', //二级导航标题
                items: [
                    { text: 'vue 相关', link: '/web/javascript/vue相关/' },//三级导航标题
                    { text: '数组方法', link: '/web/javascript/数组方法/' }
                ]
            },
            {
                text:'CSS',
                items:[
                    {text:'css 布局',link:'/web/css/css布局/'},
                    {text:'css 样式',link:'/web/css/css样式/'}
                ]
            },
            {
                text:'jQuery',
                items: [
                    {text:'jquery 练习',link:'/web/jquery/jquery练习/'},
                    {text:'jquery 实例',link:'/web/jquery/jquery实例/'}
                ]
            }
        ]
    },
    {
        text: "前端工程",
        items: [
            {
                text: '小程序',
                link: '/project/小程序/'
            },
            {
                text: 'vue 项目',
                link: '/project/vue项目/'
            }
        ]
    },
    { text: '关于', link: '/about/' },
    {text:'戒文',link:'/戒文/'},
    { text: 'Github', link: 'https://github.com/hfllove/myblog' },
    
]
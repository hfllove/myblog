module.exports = [
    { text: '首页', link: '/' },
    {
        text: '前端积累',//一级导航标题
        items: [
            {
                text: 'Javascript', //二级导航标题
                items: [
                    { text: '对象方法', link: '/web/javascript/对象方法/' },
                    { text: 'dom事件', link: '/web/javascript/dom事件/' },
                    { text: '基础', link: '/web/javascript/基础/' },
                    { text: 'es6',link:'/web/javascript/es6/'}
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
                items: [
                    {
                        text: '后台项目',
                        link: '/project/后台项目/'
                    },
                    {
                        text: '前台项目',
                        link: '/project/前台项目/'
                    }
                ]
            }
        ]
    },
    {
        text:'面试题集',
        items: [
            {
                text: 'vue',
                link: '/job/vue/'
            }
        ]
    
    },
    { text: '关于', link: '/about/' },
    { text: 'Github', link: 'https://github.com/hfllove/myblog' },
    
]

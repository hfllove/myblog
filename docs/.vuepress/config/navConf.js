module.exports = [
    { text: '首页', link: '/' },
    {
        text: '前端',//一级导航标题
        items: [
            {
                text: 'javascript', //二级导航标题
                items: [
                    { text: 'vue相关', link: '/javascript/vue相关/' },//三级导航标题
                    { text: '数组方法', link: '/javascript/数组方法/' }
                ]
            },
            {
                text: '分组2',
                items: [
                    { text: '子分组1', link: '/language/chinese/' },
                    { text: '子分组2', link: '/language/japanese/' }
                ]
            }
        ]
    },
    { text: '关于', link: '/about/' },
    {text:'戒文',link:'/戒文/'},
    { text: 'github地址', link: 'https://github.com/hfllove/myblog' },
    
]
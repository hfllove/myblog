module.exports = [
    { text: '首页', link: '/' },
    { text: '关于', link: '/about/' },
    { text: 'github地址', link: 'https://github.com/hfllove/myblog' },
    {
        text: '前端',//一级导航标题
        items: [
            {
                text: '测试', //二级导航标题
                items: [
                    { text: '测试1', link: '/test/test1/' },//三级导航标题
                    { text: '测试2', link: '/test/test2/' }
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
    }
]
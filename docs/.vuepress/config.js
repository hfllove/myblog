const moment = require('moment');
moment.locale("zh-cn")

module.exports = {
    base: "/myblog/",
    title: "hfl的个人博客",
    description: "个人的项目经验记录",
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['meta', { rel: 'author', content: 'hfl' }],
        ['meta', { rel: 'keywords', content: 'vuepress个人技术文档，个人博客，项目经验记录' }]
    ],
    plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp) => {
              // 不要忘了安装 moment
              return moment(timestamp).format("yyyy-MM-DD HH:mm:ss")
            }
          }
        ]
      ],
    themeConfig: {
        // 最后更新时间
        lastUpdated: '更新时间',
        // 首页左上角的图标
        logo: '/assets/img/logo1.png',
        nav: [
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
        ],
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
        sidebar: {
            '/guide/': [
                '',
                'css-a',
                'css-b',
                'css-c'
            ],
            '/test/test1/': [
                '',
            ],
            '/test/test2/': [
                '',
            ],
            '/test/': [
                ''
            ],
            '/about/': [
                ''
            ],
            '/': [
                ''
            ]
        },
        sidebarDepth: 2
    }
}
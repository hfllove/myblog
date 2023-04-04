const moment = require('moment');
moment.locale("zh-cn")

module.exports = {
    // 对象式
    '@vuepress/last-updated': {
        transformer: (timestamp) => {
            // 不要忘了安装 moment
            // return moment(timestamp).format("yyyy-MM-DD HH:mm:ss")
            return moment(timestamp).format("LLL")
        }
    },
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现更新内容",
            buttonText: "刷新"
        }
    },
    // '@vuepress/medium-zoom': {
    //     selector: 'img',// 只有添加 class 名为 custom 的图片，才支持缩放
    //     // medium-zoom options here
    //     // See: https://github.com/francoischalifour/medium-zoom#options
    //     options: {
    //       margin: 16,
    //       background: '#BADA55',
    //     }
    //   },
    'tabs': true, // tab 选项卡插件
    'one-click-copy': {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copied successfully!'
        toolTipMessage: '复制内容到剪切板', // default is ''Copy to clipboard'
        duration: 1000, // prompt message display time
    },
    'vuepress-plugin-smooth-scroll': true, // VuePress 站点中使用平滑滚动
    'reading-progress': true, // 阅读进度条
    "vuepress-plugin-auto-sidebar": {
        // sidebarDepth: 2,
        title: {
            mode: "titlecase",
            map: {
                "/guide/": "教程", //配置根标题
                "/about/": "关于",
                "/test/test1/": "测试1",
                "/test/test2/": "测试2"
            }
        }
    },
    'img-lazy': true, // 图片懒加载
    '@vuepress/active-header-links': true, // 滚动时激活侧边链接的插件
    '@vuepress-reco/vuepress-plugin-back-to-top': {
        visibilityHeight: 300,
        customStyle: {
            right: '12%',
            bottom: '6rem',
            width: '3rem',
            height: '3rem',
            'border-radius': '.25rem',
            'line-height': '3rem',
            backgroundColor: 'rgba(231, 234, 241,.5)'
        }
    },// 回到顶部插件
    '@vuepress-reco/extract-code': true,
    'vuepress-plugin-image-viewer': {
        selector: '.theme-default-content', // 你想要的插件起作用的页面的class或id
        options: {
            excludeClass: 'no-zoom', // 带有这个className的img标签会被排除
            "scalable": false, // 是否可翻转
            "keyboard": false,//是否支持键盘
            "title": false,//当前图片标题
        },
    },
    // 'vuepress-plugin-global-toc': true,
    'vuepress-plugin-child-toc': true,// 页面目录插件
    'vuepress-plugin-container':[
       {
        type: 'note',
        defaultTitle: {
            '/': '小结',
        },
      }, 
       {
        type: 'test',
        defaultTitle: {
            '/': '测试',
        },
      }, 
    ]
      
}
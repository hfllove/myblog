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
    '@vuepress/back-to-top':true,
    '@vuepress/medium-zoom': {
        selector: 'img.custom',// 只有添加 class 名为 custom 的图片，才支持缩放
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
          margin: 16,
          background: '#BADA55',
        }
      }
}
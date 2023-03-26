const moment = require('moment');
moment.locale("zh-cn")

module.exports = {
    // 对象式
    '@vuepress/last-updated': {
        transformer: (timestamp) => {
            // 不要忘了安装 moment
            return moment(timestamp).format("yyyy-MM-DD HH:mm:ss")
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
}
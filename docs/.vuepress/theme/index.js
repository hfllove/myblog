const path = require('path')
const { resolve } = require('path')
/**
 * @type {import('@vuepress/types').Theme<import('@vuepress/types').DefaultThemeConfig>}
 */
module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx

  // resolve algolia
  const isAlgoliaSearch = (
    themeConfig.algolia
    || Object
      .keys(siteConfig.locales && themeConfig.locales || {})
      .some(base => themeConfig.locales[base].algolia)
  )

  const enableSmoothScroll = themeConfig.smoothScroll === true

  return {
    alias() {
      return {
        '@AlgoliaSearchBox': isAlgoliaSearch
          ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
          : path.resolve(__dirname, 'noopModule.js'),
        // 'enhanceApp': 
        //   path.resolve(__dirname, 'components/SideAnchor.vue'),
      }
    },
      'enhanceApp': [
          resolve(__dirname, './enhanceApp.js')
      ],
  
      'components': 'SideAnchor'
    ,
    plugins: [
      ['@vuepress/active-header-links', options.activeHeaderLinks],
      '@vuepress/search',
      '@vuepress/plugin-nprogress',
      ['container', {
        type: 'tip',
        defaultTitle: {
          '/': '提示',
        }
      }],
      ['container', {
        type: 'warning',
        defaultTitle: {
          '/': '注意',
        }
      }],
      ['container', {
        type: 'danger',
        defaultTitle: {
          '/': '警告',
        }
      }],
      ['container', {
        type: 'note',
        defaultTitle: {
          '/': '小结',
        }
      }],
      ['container', {
        type: 'test',
        defaultTitle: {
          '/': '测试',
        }
      }],
      ['container', {
        type: 'details',
        before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
        after: () => '</details>\n'
      }],
      ['smooth-scroll', enableSmoothScroll]
    ]
  }
}

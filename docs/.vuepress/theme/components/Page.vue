<template>
  <main class="page" ref="page">
    <slot name="top" />
    <div class="page-container" ref="pageContainer">
      <ChildTable />
      <Content class="theme-default-content" />
      <PageEdit />
      <PageNav v-bind="{ sidebarItems }" />
    </div>
    <SideAnchor />
    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
// 自定义组件 右侧目录
import SideAnchor from "@theme/components/SideAnchor.vue";
import ChildTable from "@theme/components/ChildTable.vue"
// 自定义组件 页面目录
// import ChildTableOfContentsVue from "@theme/components/ChildTableOfContentsVue.vue"
import Vue from "vue";

export default {
  components: { PageEdit, PageNav, SideAnchor,ChildTable},
  props: ["sidebarItems"],
  watch: {
    // 监视路由的变化，在下一次更新DOM的时候，调用 changeFixed 函数
    "$route.hash": {
      handler() {
        Vue.nextTick(() => {
          this.changeFixed();
        });
      },
      // 深度监视
      deep: true,
    },
  },
  mounted() {
    // Vue.nextTick(()=>{
      this.changeFixed();
    // })
      
  },
  methods: {
    changeFixed() {
      // 清除上一次设置的元素容器高度
      this.$refs.page.style.height = "";
      // 获取页面可视区域的高度
      const clientHeight = document.documentElement.clientHeight;
      // 获取页面元素容器的高度
      let offsetHeight = this.$refs.page.offsetHeight;
      // 如果当前元素的容器高度，小于页面可视区域的高度
      if (offsetHeight < clientHeight) {
        // 将页面可视高度，设置为页面元素容器的高度
        this.$refs.page.style.height = clientHeight + "px";
      } 
    },
  },
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  display: block;
  background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);
  background-size: 23px 23px;
  background-position: top left;
  // background-color: #f2f3f5;
  background-color: #c7f2d1;
  transition: all .4s ease-in-out
}

.page-container {
  // background-color: #c7f2d1;
  // letter-spacing: 2px;
  max-width: 800px;
  // min-height: 900px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  // background-color: #fff;
  background-color: rgba(250, 249, 222, 0.9) !important;
  // background: rgba(0,0,0,0);
  // color:#eee;
  // font-family: "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  font: 16px / 1.7 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei', 'Hiragino Sans GB', 'Heiti SC', 'WenQuanYi Micro Hei', sans-serif;
  -webkit-text-size-adjust: 100%;
  --wp--preset--font-size--normal: 16px;
  -webkit-tap-highlight-color: transparent;
}

.page-container {
  --color-background: #282828;
  --color-foreground: #424242;
  --color-widgets: #555;
  --color-widgets-disabled: #474747;
  --color-border: #777;
  --color-border-on-foreground: #555;
  --color-border-on-foreground-deeper: #777;
  --color-text-deeper: #eee;
  --color-darkmode-toolbar: 33, 33, 33;
  --color-darkmode-banner: #212121;
  --color-selection: #607799;
  --wp--preset--color--black: #000000;
  --wp--preset--color--cyan-bluish-gray: #abb8c3;
  --wp--preset--color--white: #ffffff;
  --wp--preset--color--pale-pink: #f78da7;
  --wp--preset--color--vivid-red: #cf2e2e;
  --wp--preset--color--luminous-vivid-orange: #ff6900;
  --wp--preset--color--luminous-vivid-amber: #fcb900;
  --wp--preset--color--light-green-cyan: #7bdcb5;
  --wp--preset--color--vivid-green-cyan: #00d084;
  --wp--preset--color--pale-cyan-blue: #8ed1fc;
  --wp--preset--color--vivid-cyan-blue: #0693e3;
  --wp--preset--color--vivid-purple: #9b51e0;
  --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);
  --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);
  --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);
  --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);
  --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);
  --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
  --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);
  --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);
  --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);
  --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);
  --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);
  --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
  --wp--preset--font-size--small: 13px;
  --wp--preset--font-size--medium: 20px;
  --wp--preset--font-size--large: 36px;
  --wp--preset--font-size--x-large: 42px;
  --wp--preset--spacing--20: 0.44rem;
  --wp--preset--spacing--30: 0.67rem;
  --wp--preset--spacing--40: 1rem;
  --wp--preset--spacing--50: 1.5rem;
  --wp--preset--spacing--60: 2.25rem;
  --wp--preset--spacing--70: 3.38rem;
  --wp--preset--spacing--80: 5.06rem;
  --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
  --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
  --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
  --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);
  --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
}

.theme-default-content:not(.custom) {
  padding: 0 0;
}

.page-edit {
  padding: 2rem 2.5rem;
}

.page-nav {
  padding: 2rem 2.5rem;
}
</style>

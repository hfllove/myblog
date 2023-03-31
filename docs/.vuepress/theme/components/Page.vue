<template>
  <main class="page">
    <slot name="top" />
    <div class="page-main">
      <div class="page-container">
        <Content class="theme-default-content" />
        <PageEdit />
        <PageNav v-bind="{ sidebarItems }" />
      </div>
      <SideAnchor />
    </div>
    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import SideAnchor from '@theme/components/SideAnchor.vue'

export default {
  components: { PageEdit, PageNav,SideAnchor },
  props: ['sidebarItems'],
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  display block
.page-main 
    background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);
    background-size: 23px 23px;
    background-position: top left;
    background-color: #f2f3f5;

.page-main 
    display: block; 

.page-container
    letter-spacing: 2px!important;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem 2rem 2rem;
    background-color: #fff;

.theme-default-content:not(.custom) 
    padding: 2rem 0;

.page-edit 
    padding: 2rem 2.5rem;

.page-nav 
    padding: 2rem 2.5rem;

</style>

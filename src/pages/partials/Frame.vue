<!-- @format -->

<template>
  <div class="page-frame">
    <HeaderNav />
    <main id="main" class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderNav from '@pages/partials/HeaderNav'

export default defineComponent({
  name: 'LayoutFrame',
  components: {
    HeaderNav
  }
})
</script>

<style lang="less">
@import './../../assets/styles/style.less';
.page-frame {
  width: 100%;
  min-height: 100vh;
  .main-content {
    width: 100%;
    min-height: calc(100vh - @header-height);
    margin-top: @header-height;
  }
}
</style>

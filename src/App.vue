<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view />
    </keep-alive>
    <Tabbarmain v-if="tabbarShow"></Tabbarmain>
 
  </div>
</template>
<script>
import Tabbarmain from "components/content/Tabbar-main";

export default {
  name: "App",
  components: {
    Tabbarmain
  },
  watch: {
    $route(to, from) {
      //判断是否显示tabbar
      if (to.path == "/" || to.path == "/home" || to.path == "/index"|| to.path == "/cart") {
        this.$store.commit("updateTabbarShow", true);
      } else {
        this.$store.commit("updateTabbarShow", false);
      }
    }
  }, computed: {
    tabbarShow(){
     return this.$store.getters.getTabbarShow
    }
  },
};
</script>

<style lang="less">
@import url("~assets/css/css.css");
@import url("~assets/font/iconfont.css");
</style>

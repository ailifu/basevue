<template>
  <div id="app">
    <router-view />
     <Tabbarmain/>
  </div>
</template>
<script> 
import Tabbarmain from "components/content/Tabbar-main"; 
 
export default {  
  name: "App",  
  components: { 
    Tabbarmain
  } 
}; 
</script>

<style lang="less">
@import url('~assets/css/css.css'); 
@import url('~assets/font/iconfont.css'); 
</style>

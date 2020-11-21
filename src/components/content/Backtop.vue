<template>
  <div class="backtop" @click="topClick">
    <i class="iconfont iconfanhuidingbu"></i>
  </div>
</template>
<script>
export default {
  name:"Backtop",
  methods: {
		  topClick: function () {
        this.$emit('backTop');
      }
    }
}
</script>
<style lang="less">
.backtop{ 
  position: fixed ;
  bottom: 1.6rem;
  right: 0.1333rem;
  width: 0.8rem;
  height:0.8rem;
 
  z-index: 100;
  .iconfont{
    font-size:0.8rem;
    color: #f00;
 
  }
}
</style>
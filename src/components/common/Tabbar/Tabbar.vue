<template>
   <div class="tabbar">
     <slot></slot>
   </div>
</template>
<script>

</script>
<style lang="less" >
.tabbar{
  display: flex;
  background-color: #f2f2f2;
  align-items: center; 
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 50PX;
}
</style>
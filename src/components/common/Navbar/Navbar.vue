<template>
  <div class="navbar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name:"Navbar"
}
</script>
<style lang="less">
  .navbar{
    height:1.1733rem;
    line-height: 1.1733rem;
    display: flex;
    width: 100%;
    background-color: #f00;
    .left,.right{
    width: 1.1733rem;
    }
    .center{
      flex: 1;
      text-align: center;
      font-size: 0.5333rem;
    }
  }
</style>
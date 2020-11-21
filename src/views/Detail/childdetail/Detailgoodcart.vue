<template>
  <div class="cartbox">
    <div class="cartleft">
        <div>客服</div>
        <div>店铺</div>
        <div>收藏</div>
    </div>
    <div class="cartright">
      <div @click="addclickcart">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Detailgoodcart",
  methods: {
    addclickcart(){
      this.$emit('addclick')
   
    }
  }
};
</script>
<style lang="less" scoped>
.cartbox {
  display: flex;
  position: absolute;
  bottom: 0;
  left:0;
  width: 100%;
  z-index:1000;
    background-color: yellow;
    height: 1.6rem;
    line-height: 1.6rem;
  .cartleft{
    font-size: 0.4rem;
    width: 50%;
    display: flex;
    text-align: center;
    div{ flex: 1;}

  }
  .cartright{ width:50%;
    display: flex;
  background-color: var(--color-tint);
    div{
      text-align: center;
      flex: 1;
      font-size: 0.44rem;
     &:last-child{
      background-color: #f00;
    }
    }
 
  }
}

</style>

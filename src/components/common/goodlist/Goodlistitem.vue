<template>
  <div class="goodslistitem" @click="goodDetail(iid)">
    <div class="goodlistimage">
      
      <img v-if="goods.show!=undefined"  v-lazy="goods.show.img" alt=""   @load="goodsimagesload" />
      <img  v-if="goods.image!=undefined" v-lazy="goods.image" alt=""   @load="goodsimagesload" />
    </div>
    <h3>{{ goods.title }}</h3>
    <p>
      <span>{{ goods.cfav }}<i class="iconfont iconshoucang"></i></span
      >{{ goods.price }}元
    </p>
  </div>
</template>
<script>
export default {
  name: "Goodlistitem",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object
    }
  },
  methods: {
    goodDetail(iid) {
      this.$router.push({ path: "detail",query:{iid:iid }});
    },
    goodsimagesload() {
      this.$bus.$emit("drawImage_box");
    }
  },
  computed: {
    iid() { 
       if (this.goods.iid!=undefined) {
         return this.goods.iid
       }
       if (this.goods.shop_id!=undefined) {
         return this.goods.shop_id
       }
      }
  }
};
</script>
<style lang="less">
.goodslistitem {
  width: 50%;
  box-sizing: border-box;
  padding: 0.1333rem;
  .goodlistimage {
    height: 6.4rem;
    overflow: hidden;
  }
  img {
    width: 100%;
  }
  h3 {
    height: 0.5333rem;
    overflow: hidden;
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap;
    font-weight: normal;
  }
  p span {
    float: right;
  }
}
img[lazy=loading]{
  transform:scaleX(1) scaleY(1);
}
img[lazy=loaded]{
  animation:appear 0.3s;
  animation-fill-mode: both;
}
@keyframes appear {
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }
}
</style>

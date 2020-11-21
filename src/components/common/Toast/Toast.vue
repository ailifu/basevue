<template>
  <div class="toastitem" v-if="isshow">{{ message }}</div>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
      isshow:false,
      message:'默认'
    };
  },
  methods: {
    show(messsage,timeout=2000) {
       this.isshow=true
       this.message=messsage
       setTimeout(() => {
          this.isshow=false;
          this.message=""
       }, timeout);
    }
  }
};
</script>
<style lang="less" scoped>
.toastitem {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  margin: 0 0.4rem;
  padding: 0.1333rem 0.2667rem;
  text-align: center;
  min-width: 2rem;
  z-index: 1000000;
  border-radius: 0.1333rem;
}
</style>

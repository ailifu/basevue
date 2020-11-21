<template>
  <div  class="" ref="warper">
    <div class="context"> 
      <slot> </slot>
      <div v-if="resultmore" class="center">
        <div v-if="!isPullUpLoad">上拉加载更多</div>
        <div v-else>加载中。。。</div>
      </div> 
    </div>
  </div>
</template>
<script>
import bsrcoll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      isPullUpLoad: false
    };
  },
  props: {
    ispull: {
      type: Boolean,
      default: false
    },
    resultmore: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    setTimeout(this.warpscroll(), 1000);
  },
  methods: {
    warpscroll() {
      this.scroll = new bsrcoll(this.$refs.warper, { //this.scroll绑定到vue的实例上
        click: true,
        pullUpLoad: this.ispull,
        probeType: 3
      }); 
      if (this.ispull) {
        this.scroll.on("pullingUp", () => {
          this.isPullUpLoad = true;
          this.$emit("pullinguphandle");
           this.finishPullUp();
          this.refresh();
          this.isPullUpLoad = false;
        });
      }
      this.scroll.on("scroll", position => {
        this.$emit("scrollposition", position);
      });
    },
    backtopsroll(x, y, time = 1000) {
      this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    }
  },
  watch: {

    data222() {
      this.$nextTick(this.refresh()); //this.scroll.refresh()重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
    }
  }
};
</script>
<style lang="less">
.center{ 
  text-align: center;
}
</style>

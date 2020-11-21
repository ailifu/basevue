<template>
  <div>
    <Cartnav></Cartnav>
    <Scroll
      :resultmore="resultmore"
      @scrollposition="scrollposition"
      ref="scroll"
      class="bswarper"
    >
      <Cartgoodlist :cart="cart"> </Cartgoodlist>
   
    </Scroll>
    <Cartbottomnav></Cartbottomnav>
  </div>
</template>

<script>
import Scroll from "components/common/Scroll/Scroll";
import Cartnav from "./childcart/Cartnav";
import Cartgoodlist from "./childcart/Cartgoodlist";
import Cartbottomnav from "./childcart/Cartbottomnav";




import { ADDNUM,JIANNUM } from "common/until/const";

export default {
  name: "cart",
  data() {
    return {
      resultmore: false
    };
  },
  components: {
    Scroll,
    Cartnav,
    Cartgoodlist,
    Cartbottomnav
  },
  methods: {
    [JIANNUM](iid) {
      this.$store.dispatch(JIANNUM, iid);
    },
    [ADDNUM](iid) {
      this.$store.commit(ADDNUM, iid);
    },
    scrollposition(e) {
      //获取srcoll位置
      // console.log(e);
    },
    inputnum(iid,event) {
      console.log(iid,event.target.value);
    }
  },
  computed: {
    cart() {
      return this.$store.state.cartlist;
    }
  }
};
</script>
<style lang="less" scoped>
.itembox {
  display: flex;
  box-sizing: border-box;
  padding: 0.2667rem;
  .itemleft {
    width: 2.6667rem;
    height: 2.6667rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .itemright {
    width: 6.8rem;
    box-sizing: border-box;
    h2 {
      height: 1.1133rem;
      line-height: 0.58rem;
      overflow: hidden;
      font-size: 0.3733rem;
      font-weight: normal;
    }
  }
}
.bswarper{
   
      position: absolute;
    top: 1.1733rem;
    bottom:2.6667rem;
    left: 0;
    right: 0;
    z-index: 1;
    overflow: hidden;
}
 
</style>

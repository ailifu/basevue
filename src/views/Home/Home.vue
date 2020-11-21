<template>
  <div class="home ">
    <Navbar>
      <div slot="center">首页</div>
    </Navbar>
    <FurtureItem
      ref="furturescrolltop"
      :titles="['流行', '热销', '上新']"
      @furtureindex="getfurtureindex"
      v-show="showoffsetop"
      :class="showoffsetop ? 'showFurtureItem' : ''"
    ></FurtureItem>

    <Scroll
      class="bswarper"
      @pullinguphandle="moreloading"
      @scrollposition="backtop($event)"
      :ispull="true"
      ref="scroll"
      :resultmore="resultmore"
    >
      <HomeSwiper @imageevent="imagesloadover" :banners="banners"></HomeSwiper>
      <Homerecommends :recommends="recommends"> </Homerecommends>
      <FurtureItem
        ref="furturescroll"
        :titles="['流行', '热销', '上新']"
        @furtureindex="getfurtureindex"
      ></FurtureItem>
      <Goodlist :showgoodlist="showgoodlist"></Goodlist>
    </Scroll>

    <Backtop @backTop="scrollbacktop" v-show="isbacktop"> </Backtop>
  </div>
</template>

<script>
import { getmultidata, getgoodlist } from "network/home";
import {
  debounce,
  backtopmixin
} from "../../common/until/until";

import Navbar from "components/common/Navbar/Navbar";
import HomeSwiper from "./homecoms/homeswiper";
import Homerecommends from "./homecoms/homerecommend";
import FurtureItem from "components/content/FurtureItem";
import Goodlist from "components/common/goodlist/Goodlist";
import Scroll from "components/common/Scroll/Scroll";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      goodlisttype: "pop",

      resultmore: true,
      offsetTopposition: 0,
      showoffsetop: false,
      furtureTopposition: 0,
      arefreshbus: null
    };
  },
  components: {
    Navbar,
    HomeSwiper,
    Homerecommends,
    FurtureItem,
    Goodlist,
    Scroll
  },
  created() {
    this.getmultidata();
    this.getgoodlist("pop");
    this.getgoodlist("sell");
    this.getgoodlist("new");
  },
  mounted() {
    const arefresh = debounce(this.$refs.scroll.refresh, 500); //debounce防抖函数
    this.arefreshbus = () => {
      arefresh();
    };
    this.$bus.$on("drawImage_box", this.arefreshbus);
  },
  mixins: [ backtopmixin],
  computed: {
    showgoodlist() {
      return this.goodsList[this.goodlisttype].list;
    }
  },
  methods: {
    getfurtureindex(e) {
      switch (e) {
        case 0:
          this.goodlisttype = "pop";
          break;
        case 1:
          this.goodlisttype = "sell";
          break;
        case 2:
          this.goodlisttype = "new";
          break;
      }
      this.$refs.furturescrolltop.furtureindex = e;
      this.$refs.furturescroll.furtureindex = e;
    },
    getmultidata() {
      getmultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getgoodlist(type) {
      let obj = {
        params: {
          page: this.goodsList[type].page + 1,
          type: type
        }
      };
      getgoodlist(obj).then(res => {
        if (res.data.list.length === 0) {
          return (this.resultmore = false);
        }
        this.goodsList[type].page++;
        this.goodsList[type].list.push(...res.data.list);
        this.$refs.scroll.finishPullUp();
      });
    },
    moreloading() {
      if (this.resultmore === false) return; //判断是否有更多数据
      this.getgoodlist(this.goodlisttype);
    },
    backtop(position) {
      this.offsetTopposition = position;
      this.showoffsetop = -position.y > this.furtureTopposition; 
      this.isbacktop = -position.y > 600;
    },
    imagesloadover() {
      this.furtureTopposition = this.$refs.furturescroll.$el.offsetTop; //获取组件的位置
    }
  },
  activated() {
    this.$refs.scroll.backtopsroll(0, this.offsetTopposition, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.offsetTopposition = this.$refs.scroll.scroll.y;
    this.$bus.$off("drawImage_box", this.arefreshbus);
  }
};
</script>
<style lang="less">
.home {
  height: 100vh;
}
 
#app {
  position: relative;
  height: 100vh;
}

.bswarper {
  position: absolute;
  top: 1.1733rem;
  bottom: 1.3333rem;
  left: 0;
  right: 0;
  z-index: 1;
  overflow: hidden;
}

.fixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
}

.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
.showFurtureItem {
  position: relative;
  z-index: 100;
}
 
</style>

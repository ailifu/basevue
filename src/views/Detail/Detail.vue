<template>
  <div>
    <Detailnavbar
      @detailmenuclick="detailmenuclick"
      :navbarcurindex="navbarcurindex"
    ></Detailnavbar>
      
    <Scroll
      :resultmore="resultmore"
      @scrollposition="scrollposition"
      ref="scroll"
      class="bswarper"
    > 
      <DetailTopimage ref="topscroll" :topImages="topImages"></DetailTopimage>
      <DetailGoodNote :Gooddetailnote="Gooddetailnote"></DetailGoodNote>
      <GoodShopnote :Goodshopnote="Goodshopnote"></GoodShopnote>
      <GoodDetailList
        :GoodDetaillist="GoodDetaillist"
        ref="detaillist"
      ></GoodDetailList>
      <GoodComment
        :GoodCommentlist="GoodCommentlist"
        ref="Commentlist"
      ></GoodComment>
      <Goodlist ref="Goodrecommend" :showgoodlist="SkuInfolist"></Goodlist>
   
    </Scroll>
   
  
    <Backtop @backTop="scrollbacktop" v-show="isbacktop"> </Backtop>
    <Detailgoodcart @addclick="addtoclick"></Detailgoodcart>
  </div>
</template>
<script>
import Scroll from "components/common/Scroll/Scroll";
import { debounce, backtopmixin } from "../../common/until/until";

import Detailnavbar from "./childdetail/Detailnavbar";
import DetailTopimage from "./childdetail/DetailTopimage";
import DetailGoodNote from "./childdetail/DetailGoodNote";
import GoodShopnote from "./childdetail/GoodShopnote";
import GoodDetailList from "./childdetail/GoodDetailList";
import GoodComment from "./childdetail/GoodComment";
import Goodlist from "components/common/goodlist/Goodlist";
import Detailgoodcart from "./childdetail/Detailgoodcart";
 


import { mapActions } from "vuex";

import {
  getgooddetail,
  getrecommend,
  Gooddetailnote,
  GoodShopNote,
  GoodDetaillist,
  GoodCommentlist
} from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      resultmore: false,
      isbacktop: false,
      topImages: [],
      Gooddetailnote: {},
      Goodshopnote: {},
      GoodDetaillist: {},
      GoodCommentlist: [],
      SkuInfolist: [],
      position: [],
      detailoffsetTop: [],

      CommentlistsetTop: null,
      navbarcurindex: 0,
      Imagerefresh: null,
      notedetail:'abc',
      isnoteshow:false
    };
  },
  mixins: [backtopmixin],
  components: {
    Detailnavbar,
    Scroll,
    DetailTopimage,
    DetailGoodNote,
    GoodShopnote,
    GoodDetailList,
    GoodComment,
    Goodlist,
    Detailgoodcart,
    
  },
  mounted() {
    this.$nextTick(this.$refs.scroll.refresh());

    const betterscrollrefresh = debounce(this.$refs.scroll.refresh, 500);
    this.Imagerefresh = () => {
      betterscrollrefresh();
    };
    this.$bus.$on("drawImage_box", this.Imagerefresh);
  },
  created() {
    this.iid = this.$route.query.iid;
    this.getDetail();
    this.getrecommend1();
  },
  updated() {
    this._getOffsetTops();
  },
  beforeDestroy() {
    this.$bus.$off("drawImage_box", this.Imagerefresh); //销毁组件时，销毁事件总线 也可以判断当前路由来销毁
  },
  methods: {
    ...mapActions(['addtocart']),
    _getOffsetTops() {
      this.detailoffsetTop = [];
      this.detailoffsetTop.push(0);
      this.detailoffsetTop.push(this.$refs.detaillist.$el.offsetTop);
      this.detailoffsetTop.push(this.$refs.Commentlist.$el.offsetTop);
      this.detailoffsetTop.push(this.$refs.Goodrecommend.$el.offsetTop);
      this.detailoffsetTop.push(Number.MAX_VALUE);
    },
    scrollbacktop() {
      this.$refs.scroll.backtopsroll(0, 0, 300);
    },
    scrollposition(position) {
      this.position = position;
      this.isbacktop = -position.y > 600;
      let y = -position.y;
      for (let index = 0; index < this.detailoffsetTop.length; index++) {
        const element = this.detailoffsetTop[index];
        if (y > element && y < this.detailoffsetTop[index + 1]) {
          if (this.navbarcurindex !== index) {
            //这是微了防止多次赋值，如果相同了 就没有必要改变值，只有不同的时候改变一次就行了
            this.navbarcurindex = index;
          }
          break;
        }
      }
    },
    getDetail() {
      let obj = {
        params: {
          iid: this.iid
        }
      };
      getgooddetail(obj).then(res => {
        let data = res.result;
        // 获取图片切换
        this.topImages = res.result.itemInfo.topImages;
        // 获取商品信息
        this.Gooddetailnote = new Gooddetailnote(
          res.result.columns,
          res.result.itemInfo,
          res.result.shopInfo.services
        );
        //获取商家信息
        this.Goodshopnote = new GoodShopNote(data.shopInfo);
        //h获取商品详细信息
        this.GoodDetaillist = new GoodDetaillist(
          data.itemParams.info,
          data.itemParams.rule,
          data.detailInfo
        );
        //获取用户p评论
        this.GoodCommentlist = data.rate.list;
      });
    },
    getrecommend1() {
      getrecommend().then(res => {
        this.SkuInfolist = res.data.list;
      });
    },

    detailpro() {
      this.$refs.scroll.backtopsroll(
        0,
        -document.querySelector(".weizhi").offsetTop,
        500
      );
    },
    detailgood() {
      this.$refs.scroll.backtopsroll(0, -this.detaillistoffsetTop, 500);
    },
    talkgood() {
      this.$refs.scroll.backtopsroll(0, -this.CommentlistsetTop, 500);
    },
    detailmenuclick(e) {
      this.navbarcurindex = e * 1;
      this.$refs.scroll.backtopsroll(0, -this.detailoffsetTop[e], 100);
    },
    async addtoclick() {
      var produce = {};
      produce.iid = this.iid;
      produce.images = this.topImages[0];
      produce.num = 1;
      produce.title = this.Gooddetailnote.title;
      produce.lowNowPrice = this.Gooddetailnote.lowNowPrice;
      produce.desc = this.GoodDetaillist.desc;
      produce.ischeckbox = true;
      await this.addtocart(produce).then(
        res =>{
        this.$toast.show(res,2000)
        }
      );
 
      // this.$store.commit('addtocart', produce)
    }
  },
  computed: {
    navbarindex() {
      if (
        -this.position.y > this.detaillistoffsetTop &&
        -this.position.y < this.CommentlistsetTop
      ) {
        console.log(1);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.navback {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  .iconfont {
    flex: 1;
    color: #fff;
  }
}
.left span {
  text-align: center;
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
.tabbar {
  z-index: 0;
  opacity: 0;
  display: none;
}
</style>

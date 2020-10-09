<template>
  <div class="home">
    <Navbar>
      <div slot="center">首页</div>
    </Navbar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <Homerecommends  :recommends="recommends"> </Homerecommends>
  </div>
</template>

<script>
import { getmultidata } from "network/home";
import Navbar from "components/common/Navbar/Navbar";
import HomeSwiper from './homecoms/homeswiper'
import Homerecommends from './homecoms/homerecommend'
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends:[]
    };
  },
  components: {
    Navbar,
    HomeSwiper,
    Homerecommends
  },
  created() {
    getmultidata().then(res => {
      this.banners = res.data.banner.list;
       this.recommends = res.data.recommend.list;
    });
  }
};
</script>

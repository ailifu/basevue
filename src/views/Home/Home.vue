<template>
  <div class="home">
    <Navbar>
      <div slot="center">首页</div>
    </Navbar>
  </div>
</template>

<script>
import { getmultidata } from "network/home";
import Navbar from "components/common/Navbar/Navbar";
export default {
  name: "Home",
  data() {
    return {
      banners: []
    };
  },
  components: {
    Navbar
  },
  created() {
    getmultidata().then(res => {
      this.banners = res.data.banner.list;
    });
  }
};
</script>

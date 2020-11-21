<template>
  <Navbar>
    <div slot="left" @click="detailback" class="navback">
      <i class="iconfont iconback"></i>
    </div>
    <div class="cartnav" slot="center">购物车{{ cartlength }}</div>
  </Navbar>
</template>

<script>
import Navbar from "components/common/Navbar/Navbar";
import { navbarminix } from "common/until/until";

export default {
  name: "Cartnav",
  data() {
    return {};
  },
  mixins: [navbarminix],
  components: {
    Navbar
  },
  methods: {},
  computed: {
    cartlength() {
      return this.$store.state.cartlist.length
       
    }
  }
};
</script>
<style lang="less" scoped>
.cartnav {
  color: #fff;
}
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
</style>

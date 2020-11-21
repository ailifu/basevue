<template>
  <Navbar>
    <div slot="left" @click="detailback" class="navback">
      <i class="iconfont iconback"></i>
    </div>
    <div slot="center">
      <ul class="detailmenu">
        <li
          v-for="(item, index) in navbarlist"
          :class="navbarcurindex === index ? 'cur' : ''"
          :key="index"
          @click="menuclick(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </Navbar>
</template>
<script>
import Navbar from "components/common/Navbar/Navbar";
import { navbarminix } from "common/until/until";


export default {
  name: "Detailnavbar",
  data() {
    return {
      navbarlist: ["商品", "详情", "点评", "推荐"]
    };
  },
  props: {
    navbarcurindex: {
      type: Number,
      default: []
    }
  },
  components: {
    Navbar
  },mixins: [navbarminix],
  methods: {
   
    menuclick(value) {
      this.$emit("detailmenuclick", value);
    }
  }
};
</script>
<style lang="less">
.detailmenu {
  display: flex;
  padding: 0 0.4rem;
  li {
    flex: 1;
    font-size: 0.3733rem;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }
  li.cur {
    color: #f90;
  }
}.navback {
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

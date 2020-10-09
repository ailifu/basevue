<template>
  <div
    class="tabbaritem"
    v-on:click="handletabbar"
    :class="isActive ? 'tabbar-active' : ''"
  >
    <slot name="tarbar-icon"></slot>
    <slot name="tarbar-text"></slot>
  </div>
</template>
<script>
export default {
  name: "tabbaritem",
  props: {
    path: {
      type: String
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    }
  },
  methods: {
    handletabbar(e) {
      this.$router.push(this.path);
    }
  }
};
</script>
<style lang="less">
.tabbaritem {
  flex: 1;
  text-align: center;
  font-size: 0.4267rem;
  .iconfont {
    font-size: 0.5333rem;
  }
}
.tabbar-active {
  color: #f00;
}
</style>

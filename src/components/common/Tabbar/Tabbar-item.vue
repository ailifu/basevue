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
  .iconfont {
    font-size: 20px;
  }
}
.tabbar-active {
  color: #f00;
}
</style>

<template>
  <div class="furture">
    <div
      class="furtureitem"
      v-for="(item, index) in titles"
      :key="index"
      :class="furtureindex === index ? 'active' : ''"
      @click="furturehandle(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "FurtureItem",
  data() {
    return {
      furtureindex: 0
    };
  },
  
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  methods: {
    furturehandle(index) {
      this.furtureindex = index;
      this.$emit('furtureindex',index)
    }
  }
};
</script>
<style lang="less">
.furture {
  display: flex;
  height: 1.2rem;
  overflow: hidden;
   background-color: #fff;
  padding: 0.1333rem 0;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  .furtureitem {
    flex: 1;
    span {
      position: relative;
      font-size: 0.3733rem;
    }
  }
  .active {
    color: #f60;
    span::before {
      content: "";
      display: block;
      width: 100%;
      height: 0.0533rem;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      top:0.5867rem;
      background-color: #f60;
    }
  }
}
</style>

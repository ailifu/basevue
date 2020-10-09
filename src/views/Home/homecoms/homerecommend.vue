<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item">
      <a :href="item.link"> <img :src="item.image" /> </a>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommends",
  props: {
    recommends: {
      type: Array,
      default: []
    }
  }
};
</script>
<style lang="less">
.recommend {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 0.2667rem 0 0.4rem;
  border-bottom: 0.1333rem solid #f1f1f1;
  font-size: 0.3733rem;
  .recommend-item {
    flex: 1;
  }
  img {
    width: 80%;
  }
}
</style>

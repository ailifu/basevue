<template>
  <Swiper>
    <SwiperItem v-for="item in banners" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image"  @load="imageoverload"/>
      </a>
    </SwiperItem>
  </Swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
       isshowimage:false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },methods: {
    imageoverload(){
      if (this.isshowimage) return 
      this.$emit('imageevent')
      this.isshowimage=true
    }
  },
};
</script>
<style lang="less"></style>

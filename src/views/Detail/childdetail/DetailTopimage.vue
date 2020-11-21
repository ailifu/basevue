<template>
<div class="detailimageSwiper">
  <Swiper v-if="topImages.length">
    <SwiperItem v-for="item in topImages" :key="item.acm"  >
        <img :src="item"  @load="imageoverload"/>
    </SwiperItem>
  </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailTopimage",
  props: {
    topImages: {
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
 
<style lang="less"  >
.detailimageSwiper{
.swiper{ 
  height:8rem;
}}
</style>

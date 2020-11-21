<template>
  <Goodlist>
    <Goodlistitem v-for="item in showgoodlist" :key="item.id">
       <div
        class="goodlistdetail"
        @click="handleclick(item.id)"
       > 
         <img :src="item.img" /> 
        <h3>{{ item.title }}</h3>
      </div>
    </Goodlistitem>
  </Goodlist>
</template>
<script>
import Goodlist from "components/common/goodlist/Goodlist";
import Goodlistitem from "components/common/goodlist/Goodlistitem";
export default {
  name: "Goodlistmain",
  components: {
    Goodlist,
    Goodlistitem
  },
  props: {
    showgoodlist: {
      type: Object,
      default: {}
    }
  },methods: {
    handleclick(e){
      this.$router.push({path:'/detail',query:{id:e}})
    }
  },
};
</script>
<style lang="less">
.goodlistdetail {
  width: 50%;
  box-sizing: border-box;
  padding: 0.2667rem;
  img {
    width: 100%;
    height: 30vh;
  }
}
</style>

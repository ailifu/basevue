<template>
  <div class="gooddetailbox" v-if="Object.keys(Gooddetailnote).length !== 0" >
    <!-- 判断是否有值才渲染下面的html -->
    <h1>{{ Gooddetailnote.title }}</h1>
    <div class="gooddetailprice">{{ Gooddetailnote.price }} <span :style="{backgroundColor:Gooddetailnote.discountBgColor}">{{Gooddetailnote.discountDesc}}</span></div>
    <div class="gooddetailcolumns">
      <span>
        {{ Gooddetailnote.columns[0] }}
      </span>
      <span>
        {{ Gooddetailnote.columns[1] }}
      </span>
      <span>{{
        Gooddetailnote.services[Gooddetailnote.services.length - 1].name
      }}</span>
    </div>
    <div class="goodservices">
      <span v-for="index in Gooddetailnote.services.length - 1" :key="index">
        <img :src="Gooddetailnote.services[index-1].icon" alt="" />
        {{ Gooddetailnote.services[index-1].name }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailGoodNote",
  data() {
    return {};
  },
  props: {
    Gooddetailnote: {
      type: Object,
      default: {}
    }
  }
};
</script>
<style lang="less">
.gooddetailbox{
  padding: 0.2rem 0.2rem 0 0.2rem;
   border-bottom: 0.1333rem  solid #f1f1f1;
}
h1 {
  font-weight: normal;
  font-size: 0.46rem;
}
.gooddetailcolumns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  line-height:1rem;
   border-bottom: 0.0267rem  solid #f2f2f2;
  span {
   font-size: 0.3733rem;
   color: #888;
     justify-content: space-between;
  }
}
.gooddetailprice{
  font-size: 0.54rem;
  color: var(--color-tint);
  line-height:1.3333rem;
  span{ 
    height: 0.8rem;
    font-size:0.3467rem;
    border-radius: 0.06rem;
    color: #fff;
  }
}
.goodservices {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.1733rem;
 
    span {
    justify-content: space-between;
    
    img {
      width: 0.32rem;
      height: 0.32rem;
    }
  }
}
</style>

<template>
  <div class="gooddetaillist" v-if="Object.keys(GoodDetaillist).length > 0">
    <div class="gooddetaillist_show">
      <div class="goodtipsstart"></div>
      <div class="goodtipsdesc">
        {{ GoodDetaillist.desc }}
      </div>
      <div class="goodtipsend"></div>
      <div class="GoodDetailtitle">{{ GoodDetaillist.key }}</div>
      <div class="GoodDetailimg">
        <!-- <img
          v-for="item in GoodDetaillist.list"
          :src="item"
          alt=""
          :key="item"
        /> -->
      </div>
      <div class="goodsizebox">
        <ul
          v-for="(item, index) in GoodDetaillist.tables[0]"
          :key="index"
          class="goodsizedetail"
        >
          <li>{{ item[0] }}</li>
          <li>{{ item[1] }}</li>
          <li>{{ item[2] }}</li>
          <li>{{ item[3] }}</li>
          <li>{{ item[4] }}</li>
        </ul>
      </div>
      <div class="goodsetbox">
        <ul
          v-for="(item, index) in GoodDetaillist.set"
          :key="index"
          class="goodsetdetail"
        >
          <li>{{ item.key }}</li>
          <li>{{ item.value }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodDetailList",
  props: {
    GoodDetaillist: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    console.log(Object.keys(this.GoodDetaillist).length);
  }
};
</script>
<style lang="less">
.gooddetaillist {
  border-bottom: 0.1333rem solid #f1f1f1;
}
.goodtipsstart,
.goodtipsend {
  padding: 0.4rem;
}
.goodtipsstart::before {
  content: " ";
  display: block;
  width: 0.1333rem;
  height: 0.1333rem;
  background-color: #000;
}
.goodtipsstart::after {
  content: " ";
  display: block;
  width: 2rem;
  height: 0.0267rem;
  background-color: #000;
}
.goodtipsend {
  text-align: right;
}
.goodtipsend::before {
  content: " ";
  display: block;
  width: 0.1333rem;
  height: 0.1333rem;
  background-color: #000;
  float: right;
}
.goodtipsend::after {
  float: right;
  content: " ";
  display: block;
  width: 2rem;
  height: 0.0267rem;
  background-color: #000;
  position: relative;
  top: 0.1rem;
}
.goodtipsdesc {
  line-height: 0.64rem;
  padding: 0 0.4rem;
}
.GoodDetailtitle {
  padding: 0 0.4rem;
  font-size: 0.44rem;
}
.GoodDetailimg {
  padding: 0.4rem;
  img {
    width: 100%;
  }
}
.goodsizebox {
  padding: 0 0.2667rem 0;
}
.goodsizedetail {
  display: flex;
  font-size: 0.32rem;
  text-indent: 0.2667rem;
  border-bottom: 1px solid #dbdbdb;
  li {
    
    color: #666;
    line-height: 1rem;height: 1rem;
        width: 2rem;
        overflow: hidden;
  }
 
}
.goodsetbox {
  padding: 0 0.2667rem;
}
.goodsetdetail {
  display: flex;
  font-size: 0.32rem;
  text-indent: 0.2667rem;
  border-bottom: 1px solid #dbdbdb;

li {

  line-height: 1rem;
  height: 1rem;
  overflow: hidden;
  color: var(--color-tint);
  width: 8rem;
}
  li:nth-child(1) {
    width: 2rem;
      color: #666;
  }
 }
</style>

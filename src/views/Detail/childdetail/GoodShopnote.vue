<template>
  <div class="goodshopbox" v-if="Object.keys(Goodshopnote).length !== 0">
    <div class="shoplogo">
      <img :src="Goodshopnote.shopLogo" alt="" />
      <div class="shopname">{{ Goodshopnote.name }}</div>
    </div>
    <div class="shopdetail">
      <div class="shopnote">
        <ul>
          <li>
            <h3>{{ Goodshopnote.cGoods }}</h3>
            <p>全部宝贝</p>
          </li>
          <li>
            <h3>{{ Goodshopnote.cSells }}</h3>
            <p>总销量</p>
          </li>
        </ul>
      </div>
      <div class="shopscorebox">
        <div
          v-for="(item, index) in Goodshopnote.score"
          :key="index"
          class="shopscore"
        >
          <span> {{ item.name }}</span>
          <span> {{ item.score }}</span>
          <span v-if="item.isBetter" class="redactive">高</span>
          <span v-else class="greenactive">低</span>
        </div>
      </div>
    </div>
    <div class="shopmore">
       <a :href="Goodshopnote.allGoodsUrl">进店逛逛</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodShopnote",
  data() {
    return {};
  },
  props: {
    Goodshopnote: {
      type: Object
    }
  }
};
</script>
<style lang="less">
.goodshopbox {
  padding: 0.6rem 0.2rem;
   border-bottom: 0.1333rem solid #f1f1f1
}
.shoplogo {
  display: flex;
  align-items: center;
  font-size: 0.4rem;
  img {
    width: 1.0667rem;
    height: 1.0667rem;
    border-radius: 50%;
    margin-right: 0.4rem;
    border: 1px solid #dbdbdb;
  }
}
.shopdetail {
  display: flex;
  justify-content: space-center;
  color: #888;
  margin-bottom: 0.5333rem;
  .shopnote {
    width: 60%;
  }
}
.shopnote ul {
  display: flex;
  text-align: center;
  height: 100%;
  align-items: center;
  li {
    flex: 1;
    h3 {
      font-size: 0.5rem;
      line-height: 0.6667rem;
      font-weight: normal;
      color: #333;
    }
  }
}
.shopscore {
  display: flex;
  justify-content: flex-start;
  height: 0.5333rem;
  span {
    width: 45%;
  }
  span:nth-child(even) {
    width: 30%;
    padding-left: 0.2667rem;
  }
  span:nth-last-child(1) {
    width: 0.4533rem;
    height: 0.4533rem;
    line-height:0.4533rem ;
    text-align: center;
    color: #fff;
    margin-top: 0.0667rem;
  }
  span.redactive {
    background-color: #f00;
  }
  span.greenactive {
    background-color: green;
  }
}
.shopscorebox {
  width: 40%;
 
}
.shopmore{
  text-align: center;
 a{
   background-color: #f1f1f1;
   color: #999;
   text-decoration: none;
   padding: 0.1333rem 0.2667rem;
   border-radius: 0.16rem;
 }
  }

</style>

<template>
  <div class="cart">
    <div v-for="(item, index) in cart" class="itembox" :key="index">
      <div class="itemcheckbox">
        <input
          type="checkbox"
          :checked="item.ischeckbox"
          @change="changecheck(item.iid, $event)"
        />
      </div>
      <div class="itemleft">
        <img :src="item.images" alt="" />
      </div>
      <div class="itemright">
        <h2>{{ item.desc }}</h2>
        <p class="itemtitle">{{ item.ischeckbox }}{{ item.title }}</p>
        <div class="addnum">
          <div class="addrightbox">
            <span @click="jiannum(item.iid)">-</span>
            <input
              type="number"
              style="ime-mode: disabled;"
              :value="item.count"
              @input="inputnum(item.iid, $event)"
            /><span @click="addnum(item.iid)">+</span>
          </div>
          <i>{{ item.lowNowPrice }}元</i> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ADDNUM, JIANNUM, INPUTNUM } from "common/until/const";
import { mapGetters,mapActions } from "vuex";
export default {
  name: "Cartgoodlist",
  data() {
    return {
      resultmore: true
    };
  },
  props: {
    cart: {
      type: Array,
      default: []
    }
  },
  components: {},
  methods: {
    ...mapActions([JIANNUM,ADDNUM])
    ,
    scrollposition(e) {
      //获取srcoll位置
      // console.log(e);
    },
    [INPUTNUM](iid, event) {
      this.$store.dispatch(INPUTNUM, { iid, value: event.target.value });
    },
    changecheck(iid, event) {
      this.$store.dispatch("cartchangecheckbox", {
        iid,
        ischeck: event.target.checked
      });
    }
  },computed: {
  ...mapGetters(['getcarttotalprice'])
  }
};
</script>
<style lang="less" scoped>
.itembox {
  display: flex;
  box-sizing: border-box;
  padding: 0.2667rem;
  .itemleft {
    width: 2.6667rem;
    height: 2.6667rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .itemright {
    width: 6.3rem;
    box-sizing: border-box;
    padding-left: 0.2rem;
    h2 {
      height: 0.5333rem;
      line-height: 0.5333rem;
      overflow: hidden;
      font-size: 0.3733rem;
      font-weight: normal;
      margin-bottom: 0.1333rem;
    }
    .itemtitle {
      height: 1.12rem;
      line-height: 0.5333rem;
      overflow: hidden;
      font-size: 0.3733rem;
      font-weight: normal;
      color: #888;
      margin-bottom: 0.1333rem;
    }
  }
}
.addrightbox {
  float: right;
  display: flex;
  input {
    width: 30px;
    border: 1px solid #dbdbdb;
    text-align: center;
  }
  span {
    width: 20px;
    border: 1px solid #dbdbdb;
    display: block;
    text-align: center;
  }
}
.itemcheckbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1333rem 0 0;
}
</style>

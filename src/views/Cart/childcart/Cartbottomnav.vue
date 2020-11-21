<template>
  <div class="bottomnav">
    <div class="bottom_left">
      <input type="checkbox" class="checkbox" id="checkboxitem" :checked="getisallcheck" @click="setischeck" /> <label for="checkboxitem">全选</label>
    </div>
    <div class="bottom_center">
      <span> {{ getcarttotalprice | goodsprice }} </span>
    </div>
    <div class="bottom_right">结账</div>
  
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cartbottomnav",
  filters: {
    goodsprice(num) {
      return num.toFixed(2);
    }
  },methods: {
    setischeck(){
           console.log(this.$store.state.cartlist.find(item => item.ischeckbox));

     return  !this.$store.state.cartlist.find(item => item.ischeckbox)
    }
  },
  computed: {
    ...mapGetters(["getisallcheck", "getcarttotalprice"]),
    getisallcheck(){
      if(this.$store.state.cartlist.length===0) return false
     return  !this.$store.state.cartlist.find(item => !item.ischeckbox); 
    }
  }
};
</script>
<style lang="less" scoped>
.bottomnav {
  display: flex;
  background-color: #f8f8f8;
  height: 1.3333rem;
  line-height: 1.3333rem;
  position: absolute;
  width: 100%;
  bottom: 1.12rem;

  justify-content: flex-start;
  align-items: center;
   
} 
</style>

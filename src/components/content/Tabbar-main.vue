<template>
 
    <Tabbar>
      <Tabbaritem path="/home">
        <i class="iconfont iconshouye" slot="tarbar-icon"></i>
        <div slot="tarbar-text">首页</div>
      </Tabbaritem>
      <Tabbaritem path="/list">
        <i class="iconfont iconchanpin" slot="tarbar-icon"></i>
        <div slot="tarbar-text">列表</div>
      </Tabbaritem>
      <Tabbaritem path="/cart">
        <i class="iconfont iconcart" slot="tarbar-icon"></i>
        <div slot="tarbar-text">购物车</div>
      </Tabbaritem>
      <Tabbaritem path="/profile">
        <i class="iconfont iconprofile_ic_myfamily" slot="tarbar-icon"></i>
        <div slot="tarbar-text">我的</div>
      </Tabbaritem>
    </Tabbar>
 
</template>
<script> 
import Tabbar from "components/common/Tabbar/Tabbar"; 
import Tabbaritem from "components/common/Tabbar/Tabbar-item";
export default {  
  name: "tabbar-main",  
  components: { 
    Tabbar, 
    Tabbaritem 
  } 
}; 
</script>

 
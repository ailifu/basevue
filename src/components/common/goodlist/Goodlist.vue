<template>
  <div class="goodlist">
    <Goodlistitem
      v-for="(item, index) in showgoodlist"
      :key="index"
      :goods="item"
    >
    </Goodlistitem>
  </div>
</template>
<script>
import Goodlistitem from "./Goodlistitem";
export default {
  name: "Goodlist",
  data() {
    return {};
  },
  props: {
    showgoodlist: {
      type: Array
    }
  },
  components: {
    Goodlistitem
  }
};
</script>
<style lang="less">
.goodlist {
  clear: both;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>

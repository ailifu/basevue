<template>
  <div class="goodcomment" v-if="GoodCommentlist.length>0">
    <div class="commenttitle">用户评论</div>
    <div class="commentlist">
      <div v-for="item in GoodCommentlist" :key="item.content"> 
        <div class="commentuser">
          <img :src="item.user.avatar" alt="" />
          {{item.user.uname}}
        </div>
        <div class="commentusernote">
          <div> {{ item.content }}</div>
          <p>{{ item.created | getLocalTime }} {{ item.style }}</p>
        </div>
        <div class="commentshopreplay" v-if="item.explain != undefined">
          {{ item.explain }}
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    暂无点评
  </div>
</template>

<script>
import { formatDate } from "common/until/until";
export default {
  name: "GoodComment",
  props: {
    GoodCommentlist: {
      type: Array,
      default(){
        return []
      }
    }
  },filters:{
     getLocalTime(value) {
     
      return formatDate(
        new Date(parseInt(value) * 1000),
        "yyyy-MM-dd"
      ) 
    }
  },
  computed: {
   
  }
};
</script>
<style lang="less">
.goodcomment {
  border-bottom: 0.1333rem solid #f1f1f1;
  padding: 0 0.4rem 0.6rem;
  .commenttitle {
    font-size: 0.5333rem;
    height: 1.4rem;
    line-height: 1.4rem;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: 0.5333rem;
  }
  .commentlist {
    .commentuser {
      display: flex;
      align-items: center;
      font-size: 0.4333rem;
      margin-bottom: 0.2667rem;
      img {
        width: 1.3333rem;
        height: 1.3333rem;
        border-radius: 50%;
        margin-right: 0.5333rem;
      }
    }
  }
  .commentusernote {
    line-height: 0.64rem;
    div {
      margin-bottom: 0.1333rem;
    }
    p {
      color: #888;
    }
  }
  .commentshopreplay {
    line-height: 0.64rem;
    color: var(--color-tint);
  }
}
</style>

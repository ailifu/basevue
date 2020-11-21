import { ADDNUM, JIANNUM, INPUTNUM } from "../common/until/const";
export default {
  [JIANNUM](context, payload) {
    context.commit(JIANNUM, payload);
  },
  [ADDNUM](context, payload) {
    console.log(2222);
    context.commit(ADDNUM, payload);
  },
  [INPUTNUM](context, payload) {
    context.commit(INPUTNUM, payload);
  },
  cartchangecheckbox(context, payload) {
    context.commit("cartchangecheckbox", payload);
  },
  addtocart(context, payload) {
    return new Promise((reslove, reject) => {
      //这里我们也可以使用es6解构的方式写入{state,commit}相当于 state=context.state，commit=context.commit，
      var isgooods = context.state.cartlist.find(item => {
        return item.iid === payload.iid;
      });
      if (isgooods) {
        context.commit("cartgoodscountadd", isgooods); //由于我们需要使用vue插件观察变化，所以我们在actions里面去分发不同的操作
        reslove('购物车数量加1')
      } else {
        context.commit("cartgoodsadd", payload);
        reslove('增加新的商品')
      }
    });
  }
};

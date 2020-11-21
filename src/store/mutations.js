import { ADDNUM, JIANNUM, INPUTNUM } from "../common/until/const";
export default {
  updateTabbarShow(state, n) {
    state.updateTabbarShow = n;
  },
  [JIANNUM](state, payload) {
    state.cartlist.find(item => {
      if (item.iid === payload) {
        item.count--;
        if (item.count * 1 === 0) {
          item.count = 1;
        }
      }
    });
  },
  [ADDNUM](state, payload) {
    state.cartlist.find(item => {
      if (item.iid === payload) {
        item.count++;
      }
    });
  },
  [INPUTNUM](state, payload) {
    state.cartlist.find(item => {
      if (item.iid === payload.iid) {
        item.count = payload.value;
      }
    });
  },
  cartchangecheckbox(state, payload) {
    console.log(payload);
    state.cartlist.find(item => {
      if (item.iid === payload.iid) {
        item.ischeckbox = payload.ischeck;
      }
    });
  },
  cartgoodscountadd(state, payload) {
    payload.count++;
  },
  cartgoodsadd(state, payload) {
    payload.count = 1;
    state.cartlist.push(payload);
  }
};

import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

import { ADDNUM, JIANNUM, INPUTNUM } from "../common/until/const";

Vue.use(Vuex);
 
var cartlist = JSON.parse(localStorage.getItem("cart")) || [];
const state = {
  updateTabbarShow: false,
  cartlist,
  allischeck: false
};
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});

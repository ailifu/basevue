export default {
  getTabbarShow(state) {
    return state.updateTabbarShow;
  },
  setlocalcart(state) {
    localStorage.setItem("cart", JSON.stringify(state.cartlist));
  },
  getcarttotalprice(state) {
    //计算商品总额，使用filter函数过滤已经选择，然后使用ruduce函数对其计算总额
    return state.cartlist
      .filter(item => {
        return item.ischeckbox === true;
      })
      .reduce((total, itemmap) => {
        return (total += itemmap.lowNowPrice * 1 * itemmap.count);
      }, 0);
  }
}
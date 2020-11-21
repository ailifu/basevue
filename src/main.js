import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import toast from 'components/common/Toast/index'
Vue.use(VueLazyload, {
  loading: require('assets/images/lazy.png'),
  // error: require('assets/images/error.png'),
})
Vue.use(toast) //执行函数中install方法
import 'lib-flexible' 
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

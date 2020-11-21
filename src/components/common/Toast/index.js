 
import Toast from './Toast.vue';

var obj = {}
obj.install = function (Vue) {
  // 创建构造器 ，创建一个“子类”。参数是一个包含组件选项的对象。
  const Toastcontrustor = Vue.extend(Toast)
   // 创建 Profile 实例。
  const toast = new Toastcontrustor().$mount();
  // 并挂载到一个元素上。
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
  
 
}
export default obj


export function debounce(fn, wait, immediate) {
  let timeout;            // 定时器对象
  let result;             // handleUserAction函数的执行结
  // console.log(this);     //这里的this指向是window对象
  return function () {
    // console.log(this);  //这里的this指向的是div元素，这是因为return 返回函数已经替换了fn传递的函数，fn里的this指向的是div元素
    let context = this;
    let args = arguments;//修改参数
    if (timeout) {
      clearTimeout(timeout);
    }
    if (immediate) {
      // 立即执行的话
      let callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) {
        result = fn.apply(context, args); //这是是使用apply来改变this的指向，如果不使用debounce函数的时候，this就是container DOM元素；当使用之后，this指向window?(已解决)
        //如果不使用debounce函数的时候，handleUserAction的参数就是Event； 使用之后变成undefined? 
      }
    }
    else {
      // 传统的方式的执行的话
      timeout = setTimeout(function () {
        // 由于这里实际上就是一个异步的执行结果，所有此时的result最后每次都会返回的是一个undefined
        result = fn.apply(context, args);
      }, wait);
    }
    // 在闭包函数的最后，返回函数执行的结果    
    // return result;
  }
}
 

export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};


// 封装混入返回头部
import Backtop from "components/content/Backtop";
export const backtopmixin = {
  data() {
    return {
      isbacktop: false,
    }
  },components:{
    Backtop
  },
  methods: {
    scrollbacktop() {
      this.$refs.scroll.backtopsroll(0, 0, 300);
    },
  },
}
// 封装混入头部导航
 
export const  navbarminix = { 
  methods: {
    detailback() {
      this.$router.go(-1);
    }
  },
}
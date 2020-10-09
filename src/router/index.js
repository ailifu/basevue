import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("views/Home/Home.vue");
const List = () => import("views/List/List.vue");
const Profile = () => import("views/Profile/Profile.vue");
const Cart = () => import("views/Cart/Cart.vue");

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
Vue.use(VueRouter);

const routes = [
  {
    path: "/list",
    component: List,
    meta: {
      title: "产品列表" //定义网页头部标题内容
    },
    beforeEnter: (to, from, next) => {
      document.title = to.meta.title; //通过路由守卫来到这个页面to属性，来设置头部标题内容
      next();
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "我的"
    },
    beforeEnter: (to, from, next) => {
      document.title = to.meta.title;
      next();
    }
  },
  {
    path: "/cart",
    component: Cart,
    meta: {
      title: "购物车"
    },
    beforeEnter: (to, from, next) => {
      document.title = to.meta.title;
      next();
    }
  },
  {
    path: "",
    redirect: "/home",
    beforeEnter: (to, from, next) => {
      document.title = to.meta.title;
      next();
    }
  },
  {
    path: "/home",
    component: Home,
    meta: {
      title: "首页"
    },
    beforeEnter: (to, from, next) => {
      document.title = to.meta.title;
      next();
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

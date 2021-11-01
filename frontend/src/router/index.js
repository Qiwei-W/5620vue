import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/homepage.vue";
import Register from "../views/register.vue";
import Forgotpass from "../views/forgotpassword.vue";
// import Passreset from "../views/passreset.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: "./register" },
    // 动态路径参数 以冒号开头
    { path: "/homepage", component: Home },
    { path: "/register", component: Register },
    { path: "/forgotpass", component: Forgotpass },
    // { path: "/passreset", component: Passreset },
  ],
});

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  VueRouterPush.call(this, to).catch((err) => err);
};
router.beforeEach((to, from, next) => {
  if (to.path !== from) {
    next();
  } else {
    let token = localStorage.getItem("Authorization");

    if (token === null || token === "") {
      next("/login");
    } else {
      next();
    }
  }
});

export default router;

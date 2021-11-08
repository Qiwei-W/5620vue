import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/homepage.vue";
import Register from "../views/register.vue";
import Forgotpass from "../views/forgotpassword.vue";
import Passreset from "../views/passreset.vue";
import Personal from "../views/personal.vue";
import Editprofile from "../views/editprofile.vue";
import Class from "../views/class.vue";
import CourseDetail from "../views/course-detail.vue";
import WatchVideo from "../views/watch-video.vue";
import Question from "../views/question.vue";
import Payment from "../views/payment.vue";
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
    { path: "/passreset", component: Passreset },
    { path: "/personal", component: Personal },
    { path: "/editprofile", component: Editprofile },
    { path: "/class", component: Class },
    { path: "/course-detail", name: "course", component: CourseDetail },
    { path: "/watch-video", component: WatchVideo },

    { path: "/question", component: Question },
    { path: "/payment", component: Payment },
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

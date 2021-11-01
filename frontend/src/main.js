import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import Antd from "ant-design-vue";
import Form from "ant-design-vue";
import axios from "axios";
import Axios from "axios";

import "ant-design-vue/dist/antd.css";
import router from "./router";
// import "es6-promise/auto";
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.prototype.$axios = axios;
Vue.use(Antd);
Vue.use(Form);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      sessionStorage.token = token;
    },
    delToken(state) {
      state.token = "";
      sessionStorage.removeItem("token");
    },
  },
});

axios.defaults.headers.post["Content-Type"] = "application/json";

const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

axios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("token")) {
      config.headers.Authorization = localStorage.getItem("token");
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else if (response.status === 203) {
      alert("session expired.");
      localStorage.removeItem("token");
      router.replace({
        path: "/login",
      });
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          break;
      }
    }
    return Promise.reject(error.response.data);
  }
);

new Vue({
  router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");

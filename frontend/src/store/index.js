// import axios from "axios";

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 存储token
    Authorization: localStorage.getItem("Authorization")
      ? localStorage.getItem("Authorization")
      : "",
    email: localStorage.getItem("email") ? localStorage.getItem("email") : "",
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin(state, value) {
      state.Authorization = value;
      localStorage.setItem("Authorization", Authorization);
    },
  },
});

export default store;

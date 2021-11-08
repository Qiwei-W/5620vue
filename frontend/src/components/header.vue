<template>
  <div class="homeheader">
    <router-link to="/homepage"
      ><img class="logo" :src="logo" alt=""
    /></router-link>
    <router-link to="/class"
      ><a-button type="link" ghost class="classbut classbut1"
        >All Class</a-button
      ></router-link
    >
    <router-link to="/class"
      ><a-button type="link" ghost class="classbut classbut2"
        >Suggest Class</a-button
      ></router-link
    >
    <a-input-search autosize class="inputsearch" @search="onSearch" />

    <router-link to="/personal">
      <a-avatar class="avatar" :src="avatar"
    /></router-link>
  </div>
</template>
<script>
/*eslint-disable*/
import Vue from "vue";
// import Layout from "../components/computer-layout.vue";
export default Vue.extend({
  name: "homeheader",
  props: {
    personal: Boolean,
  },

  data() {
    return {
      avatar: require("../assets/个人中心.png"),
      logo: require("../assets/logo.jpg"),
    };
  },
  methods: {
    onSearch(value) {
      this.$emit("search", value);
      // console.log(value);
    },
  },
});
</script>
<style lang="less">
.homeheader {
  position: relative;
  width: 100%;
  height: 60px;
  left: 0px;
  margin-top: -60px;
  top: 0px;
  background: rgba(116, 191, 215, 0.6);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  .logo {
    width: 80px;
    height: 100%;
    float: left;
  }
  .classbut {
    color: black;
    font-weight: bold;
    border: 0px;
    margin-top: 15px;
  }
  .classbut1 {
    right: 17%;
  }
  .classbut2 {
    right: 13%;
  }
  .ant-input {
    background: transparent;

    border: 0px solid rgba(116, 191, 215, 0.6);
  }
  .inputsearch {
    margin-left: 40px;
    position: absolute;
    height: 36px;
    width: 300px;
    font-size: 20px;
    background-color: rgba(116, 191, 215, 0.6);
    right: 20%;
    top: 14px;
  }
  .avatar {
    position: absolute;
    width: 35px;
    height: 35px;
    right: 5%;
    top: 13px;
  }
  .shopping {
    position: absolute;
    width: 35px;
    height: 35px;
    right: 13%;
    top: 13px;
  }
}
</style>

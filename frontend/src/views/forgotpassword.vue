<template>
  <div class="container">
    <Layout></Layout>
  </div>
</template>
<script>
import Vue from "vue";
import Layout from "../components/computer-layout.vue";
// import axios from "axios";
export default Vue.extend({
  name: "forgotpassword",
  components: {
    Layout,
  },
});
</script>
<style lang="less"></style>

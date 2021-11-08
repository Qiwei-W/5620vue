<template>
  <div class="questionpage">
    <Header :personal="false"></Header>
    <div class="circle"></div>
    <p
      style="
        margin: 40px auto;
        font-family: Roboto;
        color: black;
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
      "
    >
      Please complete your personal info
    </p>
  </div>
</template>
<script>
import Vue from "vue";
import Header from "../components/header.vue";
// import Card from "../components/course-card.vue";
export default Vue.extend({
  components: {
    Header,
    // Card,
  },
  data() {
    return {};
  },
});
</script>
<style lang="less">
.questionpage {
  .circle {
    position: absolute;
    width: 100%;
    height: 300px;
    border-radius: 0 0 1000px 1000px;
    background: rgba(143, 189, 203, 0.6);
  }
}
</style>

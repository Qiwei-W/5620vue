<template>
  <div class="container">
    <div class="eclipse1"></div>
    <div class="eclipse2"></div>
    <div class="eclipse3"></div>
    <img class="homeimg" src="../assets/computer.png" />
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  name: "computer-layout",
});
</script>
<style lang="less">
.homeimg {
  position: absolute;
  width: 485px;
  height: 523px;
  left: 838px;
  top: 196px;
}
.eclipse2 {
  position: absolute;
  width: 50%;
  height: 876px;
  left: 991px;
  top: 0;
  border-radius: 1000px 0 0 1000px;
  background: rgba(62, 166, 199, 0.6);
  filter: blur(4px);
}
.eclipse3 {
  position: absolute;
  width: 50%;
  height: 876px;
  left: 874px;
  top: -1px;
  border-radius: 1000px 0 0 1000px;
  background: rgba(62, 166, 199, 0.32);
  filter: blur(4px);
}
.eclipse1 {
  position: absolute;

  width: 50%;
  height: 876px;
  left: 764px;
  top: 0px;
  border-radius: 1000px 0 0 1000px;
  background: rgba(143, 189, 203, 0.6);
  filter: blur(4px);
}
</style>

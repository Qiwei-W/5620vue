<template>
  <div class="classhome">
    <Header @search="getname" :value="name" :personal="true"></Header>
    <div class="filter">
      <img class="img1" src="../assets/class-management.png" alt="" />
      <p class="p1">Suggest Course</p>
      <p class="p2">
        These courses are recommended to you based on your personal infomation
      </p>
    </div>
    <a-spin :spinning="loading">
      <a-col :span="8" v-for="item in alldata" :key="item.id">
        <keep-alive>
          <Card
            :id="item.id"
            :title="item.name"
            :diff="item.level"
            :price="item.price"
            :url="item.posturl"
          ></Card>
        </keep-alive>
      </a-col>
    </a-spin>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import Header from "../components/header.vue";
import Card from "../components/course-card.vue";
export default Vue.extend({
  components: {
    Header,
    Card,
  },
  data() {
    return {
      alldata: [],
      categories: 0,
      name: "",
      level: "",
      loading: false,
    };
  },
  created() {
    this.uid = localStorage.getItem("uid");
    this.init();
  },
  methods: {
    init() {
      this.loading = true;
      axios({
        method: "get",
        url: "http://localhost:9998/elec5620/main/suggest?id=" + this.uid,
      })
        .then((response) => {
          this.loading = false;
          this.alldata = response.data.data;
          if (response.data.success !== true) {
            this.$message.error("Suggest class loading failed");
          } else {
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>
<style lang="less" scoped>
.ant-spin-spinning {
  position: absolute;
  display: inline-block;
  opacity: 1;
  top: 550px;
}
.classhome {
  .ant-radio-button-wrapper {
    font-weight: bold;
    width: 86px;
    height: 48px;
    margin-right: 50px;
    border: 0px solid transparent;
    background-color: transparent;
    border-radius: 15px;
    border-left-width: 0;
    line-height: 48px;
  }
  .ant-radio-group-solid
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background: #acd9e7;
    color: black;
  }
  .ant-radio-button-wrapper:not(:first-child)::before {
    background: transparent;
  }
  .filter {
    width: 100%;
    height: 250px;
    background: rgba(252, 250, 246, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    .img1 {
      position: absolute;
      width: 80px;
      height: 61.2px;
      left: 83px;
      top: 150px;
    }
    .p1 {
      position: absolute;
      width: 256px;
      height: 46px;
      left: 188px;
      top: 165px;

      font-family: Malayalam Sangam MN;

      font-weight: bold;
      font-size: 35px;
      line-height: 46px;
    }
    .p2 {
      text-align: left;
      position: absolute;
      font-size: 18px;
      line-height: 46px;
      left: 85px;
      top: 210px;
    }
  }
}
</style>

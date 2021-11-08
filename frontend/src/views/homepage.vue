<template>
  <div id="home">
    <Header :personal="false"></Header>
    <div class="lunbo">
      <a-carousel autoplay>
        <div>
          <img class="carouslpic" src="../assets/20200314.png" />
        </div>
        <div>
          <img
            class="carouslpic"
            src="../assets/黄绿色创意时尚教育宣传国考培训微信公众号封面.png"
          />
        </div>
      </a-carousel>
    </div>
    <a-divider />
    <div style="background: rgba(188, 215, 224, 0.1); padding: 20px">
      <a-row>
        <img
          style="float: left; width: 40px; height: 40px; margin-bottom: 15px"
          src="../assets/remen.png"
        />
        <h2
          style="
            display: inline-block;
            position: absolute;
            top: 10px;
            left: 50px;
            font-size: 18px;
            font-weight: bold;
          "
        >
          Most Viewd Course
        </h2>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="8" v-for="item in data" :key="item.id">
          <Card
            :id="item.id"
            :title="item.name"
            :diff="item.level"
            :price="item.price"
            :url="item.posturl"
          ></Card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Header from "../components/header.vue";
import axios from "axios";
import Card from "../components/course-card.vue";
export default Vue.extend({
  components: {
    Header,
    Card,
  },
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      axios
        .get("http://localhost:9998/elec5620/main/mostviewed")
        .then((response) => {
          this.data = response.data.data;
          if (response.data.success !== true) {
            this.$message.error("Homepage loading failed");
          } else {
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log("Email checking failed.");
          console.log(error);
          this.$message.error("Email checking failed.");
        });
    },
  },
});
</script>
<style>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 380px;
  line-height: 380px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.lunbo {
  margin: 0 auto;
  margin-top: 15px;
  height: 380px;
  width: 90%;
}
.carouslpic {
  height: 380px;
  width: 100%;
}

.ant-card {
  margin: 20px 10px 10px 40px;
  background: transparent;
  width: 364px;
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  height: 299px;
}
.ant-card-meta-title {
  float: left;
  font-size: 28px;
}
.ant-card-meta-description {
  font-size: 18px;
  font-weight: bold;
}
.ant-card-cover {
  background: transparent;
}
.ant-card-cover img {
  background: transparent;
  border-radius: 50px 50px 0 0;
}
.diff {
  float: right;
  font-size: 16px;
  color: green;
}
.price {
  font-weight: bolder;
}
</style>

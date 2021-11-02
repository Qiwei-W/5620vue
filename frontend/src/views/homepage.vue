<template>
  <div id="home">
    <Header></Header>
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
        <a-col :span="8">
          <a-card hoverable>
            <img class="cardimg" slot="cover" src="../assets/java.jpg" />
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Header from "../components/header.vue";
export default Vue.extend({
  components: {
    Header,
  },
  data() {
    return {};
  },
  //   methods: {
  //     onSearch(value) {
  //       console.log(value);
  //     },
  //   },
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
  width: 300px;
  border: none;
  height: 140px;
}
.ant-card-cover {
  background: transparent;
}
.ant-card-cover img {
  background: transparent;
  border-radius: 50px;
}
</style>

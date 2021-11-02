<template>
  <div class="personal">
    <Header></Header>
    <div class="personalinfo">
      <img
        class="backimg"
        style="background-repeat: repeat-x; height: 300px; width: 100%"
        src="../assets/mountain-quotes-21-1586528450.jpg"
      />
      <img
        style="
          position: absolute;
          left: 168px;
          top: 267px;
          background: white;
          border: 1px solid white;
          border-radius: 100px;
        "
        src="../assets/touxiang.png"
      />
      <div class="personaltext">
        <p class="name">Kevin Smith</p>
        <router-link to="/editprofile"
          ><img
            style="
              float: left;
              margin: 10px 0 0 20px;
              width: 37px;
              height: 35px;
            "
            src="../assets/edit.jpg"
        /></router-link>
        <p class="email">Email:{{ this.email }}</p>
      </div>
    </div>
    <div class="personalcard">
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
            Courses purchased
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
    return { email: "keSmi@gmail.com" };
  },
  //   methods: {
  //     onSearch(value) {
  //       console.log(value);
  //     },
  //   },
});
</script>

<style lang="less">
.personal {
  .personalinfo {
    height: 450px;
    width: 1500px;
    .personaltext {
      margin-left: 20px;
      position: absolute;
      width: 800px;
      height: 400px;
      left: 300px;
      top: 370px;
    }
  }
  .personalcard {
    position: absolute;
    width: 100%;
    height: 350px;
    left: 64px;
    top: 543px;
  }
}
</style>

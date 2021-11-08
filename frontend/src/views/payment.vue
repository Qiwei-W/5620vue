<template>
  <div class="payment">
    <Header :personal="true"> </Header>
    <a-icon class="orderfont" style="margin: 25px 0 20px 40px" type="left" />
    <h1 class="orderfont">Order Payment</h1>
    <div class="divider"></div>
    <a-card title="Order information" class="paycard">
      <p class="payfont">Course Title: {{ name }}</p>
      <p class="payfont">Order Number: 0000001</p>
      <p class="payfont">Payment Amount: ${{ price }}</p>
      <p class="payfont">Payer: {{ username }}</p>
      <a-divider></a-divider>

      <a-button @click="showModal" class="paybut">Payment Completed</a-button>
      <a-modal
        class="modal"
        centered
        :closable="true"
        v-model="visible"
        :footer="null"
      >
        <div style="margin: 20px auto; width: 80px; height: 80px">
          <img
            style="width: 100%; height: 100%"
            src="../assets/duigou.jpg"
            alt=""
          />
        </div>

        <h3
          style="
            width: 200px;
            margin: 20px auto;
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
          "
        >
          Payment Successed
        </h3>
        <router-link to="/personal"
          ><a-button
            @click="buy"
            style="
              display: inline-block;
              height: 40px;
              width: 200px;
              margin: 20px 29%;
              background: rgba(62, 166, 199, 0.6);
              font-size: 18px;
              font-family: Roboto;
              font-weight: 500;
              box-sizing: border-box;
              border-radius: 60px;
            "
            >Check my course</a-button
          ></router-link
        >
      </a-modal>
    </a-card>
    <h1 style="position: absolute; left: 700px; top: 200px">
      Scan QR code to pay
    </h1>
    <img class="payimg" src="../assets/WechatIMG157.jpeg" alt="" />
  </div>
</template>
<script>
import Vue from "vue";
import Header from "../components/header.vue";
import axios from "axios";

// import Card from "../components/course-card.vue";
export default Vue.extend({
  components: {
    Header,
    // Card,
  },
  data() {
    return {
      visible: false,
      coursedata: [],
      price: 0,
      name: "",
      username: "",
      id: 0,
      uid: 2,
    };
  },
  created() {
    this.getParams();
    this.username = localStorage.getItem("username");
  },
  methods: {
    getParams() {
      this.coursedata = this.$route.query.coursedata;
      this.id = this.coursedata.id;
      this.price = this.$route.query.price || this.coursedata.price;
      this.name = this.$route.query.coursename || this.coursedata.name;
      console.log("cnm", this.id);
    },
    showModal() {
      this.visible = true;
    },
    buy() {
      axios({
        method: "post",
        url: "http://localhost:9998/elec5620/main/buy",
        data: {
          cid: this.id,
          uid: this.uid,
        },
      })
        .then((response) => {
          this.loading = false;
          if (response.data.success === true) {
            this.$router.push("/payment");
          } else {
            this.$message.error("Course detail loading failed.");
          }
        })
        .catch((error) => {
          console.log(error);
          this.$message.error("Course detail loading failed.");
        });
    },
  },
});
</script>
<style lang="less" scoped>
.payment {
  .orderfont {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    color: #000000;
    float: left;
    margin: 20px 20px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .divider {
    position: absolute;
    width: 100%;
    height: 31px;
    left: 0px;
    top: 144px;

    background: rgba(53, 131, 155, 0.82);
  }
  .ant-card-head-title {
    font-weight: bolder;
    font-size: 18px;
    color: #307d95;
  }
  .paycard {
    position: absolute;
    width: 429px;
    height: 277px;
    left: 73px;
    top: 235px;
    .payfont {
      text-align: left;
      font-family: Roboto;
      font-weight: bold;
      font-size: 14px;
      line-height: 14px;
    }
    .paybut {
      margin: 0 auto;
      background: rgba(62, 166, 199, 0.6);
      font-size: 18px;
      font-family: Roboto;
      font-weight: 500;
      box-sizing: border-box;
      border-radius: 60px;
    }
  }

  .payimg {
    position: absolute;
    left: 600px;
    top: 263px;

    width: 450px;
    height: 400px;
  }
}
</style>

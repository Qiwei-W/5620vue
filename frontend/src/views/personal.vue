<template>
  <div class="personal">
    <Header :personal="true"></Header>
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
          top: 300px;
          background: white;
          border: 1px solid white;
          border-radius: 100px;
          width: 150px;
          height: 150px;
        "
        :src="avatarurl"
      />
      <div class="personaltext">
        <p class="name">{{ name }}</p>
        <router-link to="/editprofile"
          ><img
            style="float: left; margin-left: 10px; width: 37px; height: 35px"
            src="../assets/edit.jpg"
        /></router-link>

        <p class="email">{{ this.email }}</p>
      </div>
    </div>
    <div class="personalcard">
      <a-divider />
      <div style="background: rgba(188, 215, 224, 0.1); padding: 20px">
        <a-row>
          <h2
            style="
              display: inline-block;
              position: absolute;
              top: -20px;
              left: 0px;
              font-size: 18px;
              font-weight: bold;
            "
          >
            Courses purchased
          </h2>
        </a-row>
        <a-row :gutter="16">
          <a-empty description="No course yet" v-if="!data.length"></a-empty>
          <a-col :span="8" v-for="item in data" :key="item.id">
            <Card
              v-if="data.length"
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
      data: [],
      email: "keSmi@gmail.com",
      avatarurl: "",
      name: "",
    };
  },
  created() {
    this.email = localStorage.getItem("email");
    this.init();
  },

  methods: {
    init() {
      this.mail = this.email;
      this.loading = true;
      axios({
        method: "post",
        url: "http://localhost:9998/elec5620/main/personalCenter",
        data: {
          email: this.mail,
        },
      })
        .then((response) => {
          this.loading = false;
          if (response.data.success === true) {
            this.personaldata = response.data.data;
            this.avatarurl = this.personaldata.avatarURL;
            this.name = this.personaldata.name;
            localStorage.setItem("username", this.name);
            this.data = this.personaldata.courses;
          } else {
            this.$message.error("Personal information loading failed.");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>

<style lang="less">
.personal {
  .personalinfo {
    height: 450px;
    width: 1500px;
    .personaltext {
      margin-left: 40px;
      position: absolute;
      width: 800px;
      height: 400px;
      left: 300px;
      top: 370px;
      font-size: 24px;
      font-weight: bold;
      .name {
        float: left;
        margin-bottom: 20px;
      }
      .email {
        font-weight: 400;
        position: absolute;
        left: 0;
        top: 50px;
      }
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

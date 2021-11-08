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
          <a-col :span="8" v-for="item in data" :key="item.id">
            <Card
              :title="item.title"
              :diff="item.diff"
              :price="item.price"
              :url="item.url"
            ></Card>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Header from "../components/header.vue";
import Card from "../components/course-card.vue";
export default Vue.extend({
  components: {
    Header,
    Card,
  },
  data() {
    return {
      data: [
        {
          id: 1,
          price: 2000,
          title: "Piano class",
          diff: "easy",
          url: require("../assets/java.jpg"),
        },
        {
          id: 2,
          price: 300,
          title: "Quantum Mechanics",
          diff: "hard",
          url: require("../assets/java.jpg"),
        },
        {
          id: 3,
          price: 140,
          title: "Full Stack Java Develeopment wdnmdnmdnmd",
          diff: "midium",
          url: require("../assets/java.jpg"),
        },
      ],
      email: "keSmi@gmail.com",
    };
  },
  created() {
    (this.email = localStorage.getItem("email")), console.log(this.email);
    this.my();
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

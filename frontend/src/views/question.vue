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
      Please select the answer that suits your actual situation
    </p>
    <div class="displayblock" v-for="item in data" :key="item.id">
      <a-row type="flex" justify="center" align="middle" style="margin: 20px 0">
        <div class="xss">
          <!-- <p class="pinput">{{ examques }}</p> -->
          <p class="pinput">{{ item.questionDesc }}</p>
          <br />
          <div>
            <a-radio-group
              name="radioGroup"
              class="radio"
              v-model="item.answer"
              @change="onChange"
            >
              <!-- <a-radio
                class="radioClass"
                v-for="(item, index) in examanswers"
                :key="item"
                :value="index"
              >
                {{ item }}</a-radio
              > -->
              <a-radio
                class="radioClass"
                style="display: block"
                v-for="option in item.options"
                :key="option.value"
                :value="option.label"
              >
                {{ option.label }}</a-radio
              >
            </a-radio-group>
          </div>
        </div>
        <a-button class="abtn" @click="onSubmit" :loading="loading"
          >Submit</a-button
        >
      </a-row>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import Header from "../components/header.vue";
// import Card from "../components/course-card.vue";
export default Vue.extend({
  components: {
    Header,
    // Card,
  },
  data() {
    return {
      data: [],
      item: [],
      id: "",
      answer: "",
      pid: 0,
      qid: 0,

      flag: null,
      loading: false,
    };
  },
  created() {
    this.fetchData(this.answer, this.pid, this.qid);
  },
  methods: {
    fetchData(answer, pid, qid) {
      this.loading = true;
      axios
        .post("http://localhost:9998/elec5620/main/display", {
          answer: answer,
          pid: pid,
          qid: qid,
        })
        .then((response) => {
          console.log(response);
          this.data = response.data.data;
          this.data = this.data.map((ele) => {
            this.questionid = ele.qid;
            this.flag = this.data[0].flag;
            if (this.flag === 3) {
              this.$router.push("/suggestclass");
            }
            if (this.flag === 2) {
              this.$router.push("/suggestclass");
            }
            this.pid = this.data[0].pid;
            this.qid = this.data[0].qid;

            const arr = [];
            for (let i = 0; i < Object.keys(ele).length - 3; i++) {
              if (ele["answer" + i]) {
                arr.push({
                  value: i,
                  label: ele["answer" + i],
                });
              }
            }
            return Object.assign(ele, {
              options: arr,
            });
          });
        })
        .catch((error) => {
          console.log(error);
          this.$message.error("Searching failed");
        });
      this.loading = false;
    },
    onChange(e) {
      console.log("radio checked", e.target.value);
      this.answer = e.target.value;
    },
    onSubmit() {
      this.loading = true;
      this.fetchData(this.answer, this.pid, this.qid);
    },
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
  .displayblock {
    margin: 0 auto;
    max-width: 650px;

    .xss {
      max-width: 600px;
      min-width: 300px;
      max-height: 100px;
      min-height: 50px;
      width: 50vw;
      height: 90px;
      background: #f2f2f2;
      border: 1px solid black;
      padding: 10px;
    }
    .pinput {
      position: absolute;
      float: left;
      font-weight: 700;
    }
    .ant-radio-wrapper {
      margin: 0;
    }
    .radio {
      float: left;
      text-align: left;
    }
    .radioClass {
      display: block;
      height: 100%;
    }
    .abtn {
      width: 80%;
      margin-top: 20px;
      background-color: #555b6e;
      color: white;
      font-weight: bold;
      font-size: 1.2rem;
      padding: 0.5rem;
      height: 45px;
    }
  }
}
</style>

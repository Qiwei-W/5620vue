<template>
  <div class="container">
    <div class="left">
      <a-tabs defaultActiveKey="1" :tabBarGutter="0">
        <a-tab-pane key="1" tab="Forgot Password?">
          <a-input
            style="width: 450px"
            class="forgotinput"
            v-decorator="[
              'password',
              {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              },
            ]"
            placeholder="Email Address"
          >
          </a-input>
          <a-button
            type="primary"
            style="font-size: 16px; font-weight: bold"
            class="forgotbut"
          >
            Send Verification code
          </a-button>
          <a-input
            style="width: 450px"
            class="forgotinput"
            v-decorator="[
              'code',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please input the verification code!',
                  },
                ],
              },
            ]"
            placeholder="Verification Code"
          >
          </a-input>
          <a-button
            type="primary"
            style="font-size: 24px; font-weight: bold"
            class="forgotbut"
          >
            Verify
          </a-button>
        </a-tab-pane>
      </a-tabs>
    </div>
    <Layout></Layout>
  </div>
</template>
<script>
import Vue from "vue";
import Layout from "../components/computer-layout.vue";
// import axios from "axios";
export default Vue.extend({
  name: "forgotpassword",
  components: {
    Layout,
  },
});
</script>
<style lang="less">
.forgotinput {
  float: left;
  width: 300px;
}
.forgotbut {
  width: 10px;
  height: 63px;
  margin: 30px 0;
  background: rgba(62, 166, 199, 0.6);
  border: 4px solid rgba(62, 166, 199, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
}
</style>

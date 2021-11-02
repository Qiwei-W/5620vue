<template>
  <div class="container">
    <div class="left">
      <a-tabs defaultActiveKey="1" :tabBarGutter="0">
        <a-tab-pane key="1" tab="Password Reset">
          <a-form-item has-feedback>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                    {
                      validator: validateToNextPassword,
                    },
                    {
                      min: 8,
                      message: 'Your password must between 8 and 16 characters',
                    },
                    {
                      max: 16,
                      message: 'Your password must between 8 and 16 characters',
                    },
                  ],
                },
              ]"
              type="password"
              placeholder="New Password"
            />
          </a-form-item>
          <a-form-item has-feedback>
            <a-input
              v-decorator="[
                'confirm',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    {
                      validator: compareToFirstPassword,
                    },
                  ],
                },
              ]"
              type="password"
              placeholder="Confirm New Password"
              @blur="handleConfirmBlur"
            />
          </a-form-item>
          <a-button
            type="primary"
            style="font-size: 24px; font-weight: bold"
            class="forgotbut"
          >
            Confrim
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
  methods: {
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },

    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("Passwords are not the same");
      } else {
        callback();
      }
    },

    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    },
  },
});
</script>
<style lang="less">
.forgotinput {
  float: left;
  width: 300px;
}
.forgotbut {
  width: 200px;
  height: 63px;
  margin: 30px 0;
  background: rgba(62, 166, 199, 0.6);
  border: 4px solid rgba(62, 166, 199, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
}
</style>

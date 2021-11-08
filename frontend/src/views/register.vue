<template>
  <div class="container">
    <div class="left">
      <a-tabs :defaultActiveKey="key" :tabBarGutter="0">
        <a-tab-pane key="1" tab="Log in">
          <a-form :form="form1" @submit="loginSubmit">
            <a-form-item>
              <a-input
                v-decorator="[
                  'email',
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
                placeholder="Please enter your Email Address"
              >
              </a-input>
            </a-form-item>

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
                        message:
                          'Your password must between 8 and 16 characters',
                      },
                      {
                        max: 16,
                        message:
                          'Your password must between 8 and 16 characters',
                      },
                    ],
                  },
                ]"
                type="password"
                placeholder="Please enter your Password"
              />
            </a-form-item>

            <a-form-item>
              <a-button
                type="primary"
                style="font-size: 20px; font-weight: bold"
                html-type="submit"
                class="registerbut"
              >
                Log in
              </a-button>
            </a-form-item>
          </a-form>
          <router-link to="/forgotpass"
            ><h3 class="forget">Forgot password ?</h3></router-link
          >
        </a-tab-pane>
        <a-tab-pane key="2" tab="Register">
          <a-form :form="form2" @submit="registerSubmit">
            <a-form-item>
              <a-input
                v-decorator="[
                  'email',
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
            </a-form-item>

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
                        message:
                          'Your password must between 8 and 16 characters',
                      },
                      {
                        max: 16,
                        message:
                          'Your password must between 8 and 16 characters',
                      },
                    ],
                  },
                ]"
                type="password"
                placeholder="Password must between 8 and 16 characters "
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
                placeholder="Confirm password "
                type="password"
                @blur="handleConfirmBlur"
              />
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'name',
                  {
                    rules: [
                      { required: true, message: 'Please input your name!' },
                    ],
                  },
                ]"
                placeholder="Name "
              ></a-input>
            </a-form-item>
            <a-form-item>
              <a-checkbox
                style="font-size: 18px"
                v-decorator="[
                  'agreement',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please read the agreement!',
                      },
                    ],
                  },
                  { valuePropName: 'checked' },
                ]"
              >
                I have read the
                <a href=""> agreement </a>
              </a-checkbox>
            </a-form-item>

            <a-form-item>
              <a-button
                type="primary"
                style="font-size: 20px; font-weight: bold"
                html-type="submit"
                class="registerbut"
              >
                Sign up
              </a-button>
            </a-form-item>
          </a-form>
        </a-tab-pane>
      </a-tabs>
    </div>

    <Layout></Layout>
  </div>
</template>

<script>
import Layout from "../components/computer-layout.vue";
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "forgotpassword",

  components: {
    Layout,
  },
  data() {
    return {
      key: "2",
      // email: "",
      // name: "",
      // password: "",
    };
  },
  beforeCreate() {
    this.form1 = this.$form.createForm(this, { name: "Register" });
    this.form2 = this.$form.createForm(this, { name: "Login" });
  },
  methods: {
    registerSubmit(e) {
      e.preventDefault();
      this.form2.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
      axios
        .post("http://localhost:9998/elec5620/sys/register", {
          email: this.form2.getFieldValue("email"),
          password: this.form2.getFieldValue("password"),
          name: this.form2.getFieldValue("name"),
        })
        .then((response) => {
          console.log(response);
          if (response.data.success === true) {
            this.$message.success("Sign up Successed");
            this.key = "1";
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
    loginSubmit(e) {
      e.preventDefault();
      this.form1.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
      axios
        .post("http://localhost:9998/elec5620/sys/login", {
          mail: this.form1.getFieldValue("email"),
          password: this.form1.getFieldValue("password"),
        })
        .then((response) => {
          const token = response.data.data.Authorization;
          localStorage.setItem("token", token);
          localStorage.setItem("email", this.mail);

          axios.defaults.headers.common["Authorization"] = token;
          if (response.data.success === true) {
            this.$message.success("Login Successed");
            this.$router.push("/homepage");
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
.container {
  .left {
    position: absolute;
    width: 683px;
    height: 499px;
    left: 55px;
    top: 220px;

    .ant-input {
      font-size: 18px;
      margin-top: 20px;
      padding: 10px;
      background: #ffffff;
      border: 2px solid rgba(62, 166, 199, 0.6);
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(62, 166, 199, 0.6);
      border-radius: 60px;
      width: 502px;
      height: 81px;
      .ant-input-suffix {
        text-align: justify;
      }
    }
    .registerbut {
      display: inline-block;
      width: 138px;
      height: 63px;
      margin-top: 15px;
      background: rgba(62, 166, 199, 0.6);
      border: 4px solid rgba(62, 166, 199, 0.6);
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 60px;
    }
    .forget {
      color: rgba(53, 131, 155, 1);
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 28px;
    }
  }
  .ant-tabs-tab {
    font-size: 28px;
    width: 341.5px;
    height: 82px;
    background: #ffffff;
  }
}
</style>

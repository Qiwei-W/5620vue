<template>
  <div class="edit">
    <Header :personal="true"></Header>
    <div class="editinfo">
      <img
        style="
          position: absolute;
          left: 50px;
          top: 100px;
          background: white;
          border: 1px solid white;
          border-radius: 100px;
        "
        :src="url"
      />
      <a-upload
        name="avatar"
        list-type="picture-card"
        class="avatar-uploader"
        :show-upload-list="false"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :before-upload="beforeUpload"
        @change="handleChange"
      >
        <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
        <div v-else>
          <a-icon :type="loading ? 'loading' : 'plus'" />
          <div class="ant-upload-text">Upload</div>
        </div>
      </a-upload>

      <p class="namep">Name:</p>
      <a-input class="nameinput" placeholder="Edit your name"> </a-input>
      <p class="genderp">Gender:</p>
      <a-radio-group class="genderp" style="left: 360px" v-model="gender">
        <a-radio :value="1"> Male </a-radio>
        <a-radio :value="2"> Female </a-radio>
      </a-radio-group>
    </div>
    <a-button
      type="primary"
      style="font-size: 20px; font-weight: bold; left: -100px; top: 450px"
      class="forgotbut"
    >
      Submit
    </a-button>
  </div>
</template>
<script>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

import Vue from "vue";
import Header from "../components/header.vue";
export default Vue.extend({
  components: {
    Header,
  },
  data() {
    return {
      email: "keSmi@gmail.com",
      loading: false,
      imageUrl: "",
      avtUrl: "touxiang.png",
      gender: "",
    };
  },
  computed: {
    url() {
      return `${require("../assets/" + this.avtUrl)}`;
    },
  },
  methods: {
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M;
    },
  },
});
</script>
<style lang="less">
.avatar-uploader > .ant-upload {
  width: 70px;
  height: 70px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
.edit {
  .editinfo {
    position: absolute;
    width: 90%;
    height: 786px;
    left: 72px;
    top: 139px;
    background: rgba(188, 215, 224, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    .avatar-uploader {
      position: absolute;
      left: 89px;
      top: 260px;
    }
    .namep {
      position: absolute;
      left: 250px;
      top: 165px;
      font-size: 20px;
      font-weight: bold;
    }
    .genderp {
      position: absolute;
      left: 249px;
      top: 280px;
      font-size: 20px;
      font-weight: bold;
    }
    .nameinput {
      position: absolute;
      width: 400px;
      height: 51px;
      left: 350px;
      top: 154px;
      background: #ffffff;
      border: 2px solid rgba(62, 166, 199, 0.6);
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(62, 166, 199, 0.6);
      border-radius: 60px;
    }
  }
}
</style>

<template>
  <div class="coursecard">
    <a-card hoverable :key="id" @click="pushid">
      <img style="height: 160px" slot="cover" :src="url" />
      <a-card-meta :title="title">
        <template slot="description">
          <h3 class="diff">{{ diff }}</h3>
        </template>
        <template slot="description">
          <p class="price">${{ price }}</p>
        </template>
      </a-card-meta>
    </a-card>
    <!-- </router-link> -->
  </div>
</template>
<script>
import Vue from "vue";
// import axios from "axios";
export default Vue.extend({
  name: "homeheader",
  props: {
    title: String,
    diff: String,
    price: String,
    url: String,
    id: Number,
  },

  data() {
    return {
      data: [],
    };
  },
  methods: {
    pushid() {
      localStorage.setItem("cid", this.id);
      this.$router.push({
        path: "/course-detail",
        query: {
          id: this.id,
        },
      });
    },
  },
});
</script>
<style lang="less">
.coursecard {
  .ant-card {
    margin: 20px 10px 10px 40px;
    background: transparent;
    width: 300px;
    border-radius: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    height: 250px;
    .ant-card-meta-title {
      position: absolute;
      left: 2px;
      bottom: 45px;
      font-size: 16px;
      max-width: 250px;
    }
    .ant-card-meta-description {
      font-size: 18px;
      font-weight: bold;
    }
    .ant-card-cover {
      background: transparent;
      .ant-card-cover img {
        background: transparent;
        border-radius: 50px 50px 0 0;
      }
    }
    .diff {
      position: absolute;
      bottom: 45px;
      right: 5px;
      font-size: 16px;
      color: grey;
    }
    .price {
      font-weight: normal;
      margin: 30px auto;
      font-size: 16px;
      color: red;
    }
  }
}
</style>

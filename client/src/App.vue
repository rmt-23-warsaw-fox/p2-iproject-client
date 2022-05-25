<script>
import Navbar from "@/views/Navbar.vue";
import { RouterView } from "vue-router";
export default {
  data() {
    return {
      isLogin: false,
    };
  },
  components: {
    Navbar,
    RouterView,
  },
  methods: {
    changeStatusIsLogin() {
      this.isLogin = true;
    },
    logout() {
      localStorage.removeItem("access_token");
      this.isLogin = false;
      this.$router.push("/login");
    },
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
};
</script>

<template>
  <Navbar :isLogin="isLogin" @logout="logout" />
  <RouterView @changeStatusIsLogin="changeStatusIsLogin" />
</template>

<style></style>

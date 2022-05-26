<script>
import Navbar from "./components/Navbar.vue";
import { mapWritableState } from "pinia";
import { useCustomerStore } from "@/stores/customer";
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "App",
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  },
  components: {
    Navbar,
  },
  computed: {
    ...mapWritableState(useCustomerStore, ["isLoggedIn"]),
  },
};
</script>

<template>
  <Navbar />
  <router-view />
</template>

<style>
body {
  margin: 0px;
  padding: 0px;
  background-color: #13292a;
}
</style>

<script>
import { mapWritableState } from "pinia";
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import { useNontonStore } from "./stores/counter";
export default {
  components: {
    RouterView,
    NavBar,
  },
  computed: {
    ...mapWritableState(useNontonStore, ["isLoggedIn"]),
  },
  created() {
    if (localStorage.access_token) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  },
};
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style>
body {
  background-color: #54aaad;
}
</style>

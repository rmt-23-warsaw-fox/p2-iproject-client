<script>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    RouterView,
    NavBar,
  },
};
</script>

<template>
  <RouterView />
</template>

<style>
body {
  background-color: #191a19;
  color: white;
}
</style>

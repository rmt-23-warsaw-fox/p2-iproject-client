<script >
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/header/Navbar.vue";
import Searchbar from "./components/header/Searchbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Searchbar,
  },
};

</script>

<template>
  <div id="app">
    <div class="flex justify-between border-b border-gray-500">
      <Navbar />
      <Searchbar />
    </div>

    <RouterView />
  </div>
</template>

<style>

</style>

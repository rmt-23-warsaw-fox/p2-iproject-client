<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    RouterView,
    Navbar,
  },
};
</script>

<template>
  <header>
    <Navbar style="margin-left: 10px" />
  </header>

  <RouterView style="margin-left: 10px; background-color: gray" />
</template>

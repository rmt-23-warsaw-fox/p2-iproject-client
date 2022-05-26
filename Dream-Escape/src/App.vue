<script>
import { RouterLink, RouterView } from "vue-router";
import FooterPage from "./components/FooterPage.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    FooterPage,
    RouterView,
    NavBar,
  },
};
</script>

<template>
  <NavBar></NavBar>
  <RouterView></RouterView>
  <FooterPage></FooterPage>
</template>

<style></style>

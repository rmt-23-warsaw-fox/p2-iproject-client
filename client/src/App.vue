<script>
import NavBar from "./components/NavBar.vue";
import LoginPage from "./views/LoginPage.vue";
import Footer from "./components/Footer.vue";
import HomeView from "./views/HomeView.vue";

export default {
  name: "app",
  components: {
    NavBar,
    LoginPage,
    Footer,
    HomeView,
  },
};
</script>

<template>
  <!-- <fa icon="coffe" /> -->
  <main class="main" id="top">
  <NavBar />
  <LoginPage />
  <HomeView />
  <!-- <Footer /> -->
  <!-- <RouterView /> -->
  </main>
</template>

<style></style>

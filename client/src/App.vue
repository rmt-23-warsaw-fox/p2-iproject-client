<script>
import NavBar from "./components/NavBar.vue";
import LoginPage from "./views/LoginPage.vue";
import Footer from "./components/Footer.vue";
import HomeView from "./views/HomeView.vue";
import Destination from "./views/destination.vue";

export default {
  name: "app",
  components: {
    NavBar,
    LoginPage,
    Footer,
    HomeView,
    Destination
},
};
</script>

<template>
  <main class="main" id="top">
  <NavBar />
  <RouterView/>
  <Footer />
  </main>
</template>

<style></style>

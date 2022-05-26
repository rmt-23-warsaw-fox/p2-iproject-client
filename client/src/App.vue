<script>
import NavBar from "./components/NavBar.vue";
import LoginPage from "./views/LoginPage.vue";
import Footer from "./components/Footer.vue";
import HomeView from "./views/HomeView.vue";
import Destination from "./views/destination.vue";
import RegisterPage from "./views/RegisterPage.vue";

export default {
  name: "app",
  components: {
    NavBar,
    LoginPage,
    Footer,
    HomeView,
    Destination,
    RegisterPage
},
};
</script>

<template>
  <main class="main" id="top">
  <NavBar />
  <!-- <LoginPage/> -->
  <RouterView/>
  <Footer />
  </main>
</template>

<style></style>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "NavBar",
  data() {
    return {};
  },
  components: {
    RouterLink,
  },
};
</script>

<template>
  <header class="header">
    <div id="menu-btn" class="fas fa-bars"></div>

    <a href="#" class="logo"> <i class="fas fa-paper-plane"></i> dream escape </a>

    <nav class="navbar">
      <RouterLink to="/" >home</RouterLink>
      <RouterLink to="/">about</RouterLink>
      <a href="/#destination">destination</a>
      <a href="/#services">services</a>
      <a href="/#gallery">gallery</a>
    </nav>

    <div>
      <a href="#book-form" class="btn">favorites</a>
    </div>
  </header>
</template>

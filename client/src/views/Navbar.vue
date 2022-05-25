<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Homie</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse navbar-container"
        id="navbarNavAltMarkup"
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-10">
              <div class="navbar-nav main-navbar">
                <RouterLink class="nav-link" to="/">Home</RouterLink>
                <RouterLink class="nav-link" to="/menu">Menu</RouterLink>
                <RouterLink to="/bookmarks" class="nav-link"
                  >Bookmarks</RouterLink
                >
                <RouterLink to="/order" class="nav-link"
                  >Order</RouterLink
                >
              </div>
            </div>
            <div class="col-2">
              <div class="navbar-nav">
                <RouterLink class="nav-link" to="" v-if="!isLogin"
                  >Register</RouterLink
                >
                <RouterLink v-if="!isLogin" class="nav-link" to="/login"
                  >Login</RouterLink
                >
                <RouterLink
                  @click.prevent="clickLogout"
                  v-if="isLogin"
                  class="nav-link"
                  to=""
                  >Logout</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "navbar",
  components: {
    RouterLink,
  },
  props: ["isLogin"],
  emits: ["logout"],
  methods: {
    clickLogout() {
      this.$emit("logout");
    },
  },
};
</script>

<style></style>

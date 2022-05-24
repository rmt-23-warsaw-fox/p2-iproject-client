<script>
import { RouterLink } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { mapStores } from "pinia";
import ButtonReus from "./ButtonReus.vue";
export default {
  components: {
    RouterLink,
    ButtonReus,
  },
  computed: {
    ...mapStores(useAuthStore),
  },
  methods: {
    checkLogin() {
      console.log("login");
      if (localStorage.getItem("access_token")) {
        this.authStore.isLogin = true;
      }
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">23-Store</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </ul>
          <div class="d-flex flex-wrap text-end">
            <ButtonReus
              v-if="authStore.isLogin"
              title="Log Out"
              class="btn btn-outline-success text-white"
              type="submit"
            />
            <ButtonReus
              v-if="!authStore.isLogin"
              title="Log In"
              class="btn btn-outline-success text-white me-2"
              type="submit"
            />
            <ButtonReus
              v-if="!authStore.isLogin"
              title="Register"
              class="btn btn-outline-success text-white"
              type="submit"
            />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

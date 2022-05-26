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
    async logout() {
      try {
        localStorage.clear();
        this.authStore.isLogin = false;
        this.$router.push("/");
        this.$toast.success("Logout Success", {
          position: "top-right",
          duration: 3000,
        });
      } catch (error) {
        this.$toast.error(error.response.data.message, {
          position: "top-right",
          duration: 3000,
        });
      }
    },
    toLogin() {
      this.$router.push("/login");
    },
    toRegister() {
      this.$router.push("/register");
    },
    toProfile() {
      this.$router.push("/profile");
    },
    toTransactionHistories() {
      this.$router.push("/transaction-history");
    },
    checkLogin() {
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
        <RouterLink to="/" class="navbar-brand" href="#">23-Store</RouterLink>
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
              <RouterLink
                to="/gadgets"
                class="nav-link active"
                aria-current="page"
                href="#"
                >Gadgets</RouterLink
              >
            </li>
          </ul>
          <div class="d-flex flex-wrap text-end">
            <ButtonReus
              v-if="authStore.isLogin"
              v-on:click.prevent="toTransactionHistories"
              title="Log Transaction"
              class="btn btn-outline-info text-white me-2"
              type="button"
            />
            <ButtonReus
              v-if="authStore.isLogin"
              v-on:click.prevent="toProfile"
              title="Profile"
              class="btn btn-outline-light text-white me-2"
              type="button"
            />
            <ButtonReus
              v-if="authStore.isLogin"
              v-on:click.prevent="logout"
              title="Log Out"
              class="btn btn-outline-success text-white"
              type="button"
            />
            <ButtonReus
              v-if="!authStore.isLogin"
              v-on:click.prevent="toLogin"
              title="Log In"
              class="btn btn-outline-primary text-white me-2"
              type="button"
            />
            <ButtonReus
              v-if="!authStore.isLogin"
              v-on:click.prevent="toRegister"
              title="Register"
              class="btn btn-outline-success text-white"
              type="button"
            />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import { useCustomerStore } from "../stores/customer";

export default {
  name: "Navbar",
  computed: {
    ...mapWritableState(useCustomerStore, ["isLoggedIn"]),
  },
  methods: {
    signOutHandler() {
      localStorage.clear();
      this.isLoggedIn = false;
      this.$router.push("/login");

      this.$toast.success("Logged out successfully", {
        position: "top-right",
        duration: 3000,
      });
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/">
        <div>
          <a class="navbar-brand">Trivastop</a>
        </div>
      </router-link>
      <div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link to="/login">
              <li v-if="!isLoggedIn" class="nav-item">
                <a class="nav-link">Sign In</a>
              </li>
            </router-link>
            <router-link to="/register">
              <li v-if="!isLoggedIn" class="nav-item">
                <a class="nav-link">Sign Up</a>
              </li>
            </router-link>
            <li
              v-if="isLoggedIn"
              v-on:click.prevent="signOutHandler"
              class="nav-item"
            >
              <a class="nav-link">Sign Out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #499fa4 !important;
}

.nav-item {
  margin-left: 30px;
}

.navbar-brand:hover {
  cursor: pointer;
}

.nav-link:hover {
  cursor: pointer;
}

a {
  text-decoration: none;
}
</style>

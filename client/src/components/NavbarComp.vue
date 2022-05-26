<script>
import { RouterLink } from "vue-router";
import { useAccomodationStore } from "../stores/accomodation";
import { mapState } from "pinia";
export default {
  name: "NavbarComp",
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(useAccomodationStore, ["isLogin"]),
  },
  methods: {
    logout() {
      Swal.fire({
        icon: "question",
        text: "Are you sure to logout ?",
        confirmButtonText: "Yes",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          const auth2 = gapi.auth2.getAuthInstance();
          auth2.signOut().then(function () {
            localStorage.removeItem("access_token");
          });
          localStorage.removeItem("access_token");
          this.$router.push({ name: "login" });
        }
      });
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-sm bg-light navbar-light">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand ms-5">Rent Room</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav ms-auto me-5">
          <li class="nav-item" v-if="isLogin">
            <RouterLink to="/wishlist" class="nav-link">Wishlist</RouterLink>
          </li>
          <li class="nav-item" v-if="isLogin">
            <RouterLink to="/transactions" class="nav-link"
              >Transaction</RouterLink
            >
          </li>
          <li class="nav-item" v-if="!isLogin">
            <RouterLink to="/login" class="nav-link">Login</RouterLink>
          </li>
          <li class="nav-item" v-if="!isLogin">
            <RouterLink to="/register" class="nav-link">Register</RouterLink>
          </li>
          <li class="nav-item" v-if="isLogin">
            <a class="nav-link" @click.prevent="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style>
.nav-item {
  cursor: pointer;
}
</style>

<script>
import { mapWritableState } from "pinia";
import { useInventoryStore } from "../stores/inventory";

export default {
  name: "NavBar",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
      this.isLogin = false;
    },
  },

  computed: {
    ...mapWritableState(useInventoryStore, ["isLogin"]),
  },
};
</script>

<template>
  <fa icon="coffe" />
  <nav
    class="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block"
    data-navbar-on-scroll="data-navbar-on-scroll"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <!-- logo go travel here -->
        <img
          class="d-inline-block"
          src="../assets/img/gallery/logo.png"
          width="50"
          alt="logo"
        />
        <span class="fw-bold text-primary ms-2">Go Traveling</span>
      </router-link>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mx-auto pt-2 pt-lg-0 font-base">
          <li class="nav-item px-2">
            <a class="nav-link fw-medium active" aria-current="page" href="#destinations"
              ><span class="nav-link-icon text-800 me-1 fa fa-map-marker"></span
              ><span class="nav-link-text">Locations </span></a
            >
          </li>
          <li class="nav-item px-2">
            <a class="nav-link" href="#flights">
              <span class="nav-link-icon text-800 me-1 fa fa-plane"></span
              ><span class="nav-link-text">Flights</span></a
            >
          </li>
          <li class="nav-item px-2">
            <a class="nav-link" href="#hotels">
              <span class="nav-link-icon text-800 me-1 fa fa-hotel"></span
              ><span class="nav-link-text">Hotels</span></a
            >
          </li>
          <li class="nav-item px-2">
            <a class="nav-link" href="#activities"
              ><span class="nav-link-icon text-800 me-1 fa fa-bolt"></span
              ><span class="nav-link-text">Activities</span></a
            >
          </li>
        </ul>
        <form>
          <button class="btn text-800 order-1 order-lg-0 me-2" type="button">
            Support
          </button>
          <router-link to="/login">
            <button class="btn btn-voyage-outline order-0" type="submit" v-if="!isLogin">
              <span class="text-primary">Log in</span>
            </button>
          </router-link>

          <button class="btn btn-voyage-outline order-0" type="submit" v-if="isLogin">
            <span class="text-primary" @click.prevent="logout">Log Out</span>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style></style>

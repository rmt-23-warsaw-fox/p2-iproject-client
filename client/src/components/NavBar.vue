<script>
import { mapActions, mapState } from "pinia";
import { useNontonStore } from "../stores/counter";

export default {
  name: "NavBar",
  methods: {
    ...mapActions(useNontonStore, ["logout"]),
  },
  computed: {
    ...mapState(useNontonStore, ["isLoggedIn"]),
  },
};
</script>

<template>
  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"
        >Nonton Movie Yuk! 🎬</router-link
      >
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Trending Now</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/reviews" class="nav-link active"
              >Movie Reviews</router-link
            >
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link to="/" @click="logout" class="nav-link active"
              >Log Out</router-link
            >
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/login" class="nav-link active"
              >Sign In</router-link
            >
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

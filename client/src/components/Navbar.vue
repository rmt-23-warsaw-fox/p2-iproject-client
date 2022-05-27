<script>
import { RouterLink, RouterView } from "vue-router";
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Navbar",
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(useCounterStore, ["isLoggedIn"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["logout"]),
  },
};
</script>

<template>
  <nav class="p-2 shadow-sm fixed-top" style="background-color: lightgray">
    <div class="col-12 d-flex justify-content-end">
      <div v-if="isLoggedIn" class="row mx-2">
        <button class="btn btn-primary">
          <RouterLink to="/users/register" class="text-white links"
            >Sign Up</RouterLink
          >
        </button>
      </div>
      <div v-if="isLoggedIn" class="row mx-2">
        <button class="btn btn-secondary">
          <RouterLink to="/users/login" class="text-white links"
            >Sign In</RouterLink
          >
        </button>
      </div>
      <div v-if="!isLoggedIn" class="row mx-2">
        <button class="btn btn-danger">
          <a @click="logout" class="text-white links">Logout</a>
        </button>
      </div>
    </div>
  </nav>
</template>

<style>
.links {
  text-decoration: none;
}
</style>

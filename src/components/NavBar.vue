<script>
import { RouterLink } from "vue-router";
import { mapActions, mapState } from 'pinia'
import {mainStore} from '../stores/mainStore.js';
export default {
  name: "NavBar",
  methods: {
      ...mapActions(mainStore, ["logOut"]),
  },
  computed: {
      ...mapState(mainStore,["isLoggedIn"]),
  }
};
</script>
<template>
  <div class="navbar text-white bg-black/30 font-jakarta">
    <div class="flex-1">
      <RouterLink class="btn btn-ghost normal-case text-xl" to="/"
        >Stella</RouterLink
      >
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <div v-if = "!isLoggedIn" class="flex">
          <li><RouterLink to="/login">Sign In</RouterLink></li>
          <li><RouterLink to="/register">Create an account</RouterLink></li>
        </div>
        <div v-if = "isLoggedIn" class="flex">
          <li><RouterLink to="/profile">Profile</RouterLink></li>
          <li><a @click.prevent = "logOut()">Logout</a></li>
        </div>
      </ul>
    </div>
  </div>
</template>

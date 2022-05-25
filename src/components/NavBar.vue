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
  <div class="navbar text-white bg-black/80 font-jakarta">
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
          <li><RouterLink to="/profile" class = "avatar">
              <div class = "w-10 rounded-full"><img src="https://api.lorem.space/image/face?hash=64318" alt="profile picture"></div>
              <span>Profile</span>
              </RouterLink></li>
          <li><a @click.prevent = "logOut()">Logout</a></li>
        </div>
      </ul>
    </div>
  </div>
</template>

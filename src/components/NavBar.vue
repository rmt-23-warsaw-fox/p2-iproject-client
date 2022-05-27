<script>
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import { mainStore } from "../stores/mainStore.js";
export default {
  name: "NavBar",
  methods: {
    ...mapActions(mainStore, ["logOut"]),
    imageSource() {
      function arrayBufferToBase64(buffer) {
        var binary = "";
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
      }
      if (this.profilePicture === null) {
        return null;
      } else {
        if (this.profilePicture.imageType === "url") {
          const x = this.profilePicture.imageData.data;
          return `${arrayBufferToBase64(x)}`;
        } else {
          const x = this.profilePicture.imageData.data;
          return `data:${this.profilePicture.imageType};base64,${arrayBufferToBase64(x)}`;
        }
      }
    },
  },
  computed: {
    ...mapState(mainStore, ["isLoggedIn"]),
  },
  data() {
    return {
      profilePicture: localStorage.getItem("User_Profile")
        ? JSON.parse(localStorage.getItem("User_Profile")).Profile_Picture
        : null,
    };
  },
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
        <div v-if="!isLoggedIn" class="flex">
          <li><RouterLink to="/login">Sign In</RouterLink></li>
          <li><RouterLink to="/register">Create an account</RouterLink></li>
        </div>
        <div v-if="isLoggedIn" class="flex">
          <li>
            <RouterLink to="/profile" class="avatar">
              <div class="w-10 rounded-full">
                <img :src="imageSource()" alt="profile picture" />
              </div>
              <span>Profile</span>
            </RouterLink>
          </li>
          <li><a @click.prevent="logOut()">Logout</a></li>
        </div>
      </ul>
    </div>
  </div>
</template>

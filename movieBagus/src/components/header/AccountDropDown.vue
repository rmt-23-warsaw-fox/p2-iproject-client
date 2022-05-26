<script>
import { mapState, mapActions } from "pinia";
import { allInOneStore } from "../../stores/stores";

export default {
  data() {
    return {
      isOpen: false,
    };
  },

   computed: {
    ...mapState(allInOneStore, ["isLoggedIn"]),
  },

  methods: {
    ...mapActions(allInOneStore, ['logout']),
    
      localLogout() {
      this.logout();
      this.$router.push("/login");
    },
  }

  
};
</script>

<template>
 <div class="relative">

    <!-- KLIK UNTUK MEMBUKA -->
    <button @click="isOpen = !isOpen" class="focus:outline-none">
      <img
        src="../../assets/images/user.jpg"
        alt=""
        class="h-10 rounded-full mr-1"
      />
    </button>

    <!-- KLIK UNTUK MENUTUP -->
    <button
      @click="isOpen = false"
      v-if="isOpen"
      class="fixed top-0 right-0 bottom-0 w-full h-full cursor-default bg-black opacity-50 "
    ></button>

    <!-- DROPDOWN -->
    <div
      v-if="isOpen"
      class="absolute bg-white py-2 rounded-lg w-48 right-0 mr-3 shadow-xl"
      >
      <!-- PROFILE -->
      <a
        class="text-gray-500 block px-4 py-2 hover:bg-indigo-500 hover:text-white"
        v-if="isLoggedIn"
        v-on:click.prevent="this.$router.push('/profile/:id')"
        >Profile
      </a>

      <!-- FAVORITE -->
      <a
        class="text-gray-500 block px-4 py-2 hover:bg-indigo-500 hover:text-white"
        v-if="isLoggedIn"
        >Favorite
      </a>

      <!-- LOGIN -->
      <a
        class="text-gray-500 block px-4 py-2 hover:bg-indigo-500 hover:text-white"
        v-on:click.prevent="this.$router.push('/login')"
        >Login
      </a>

      <!-- LOGOUT -->
      <a
        v-on:click.prevent="localLogout"
        v-if="isLoggedIn"
        href=""
        class="text-gray-500 block px-4 py-2 hover:bg-indigo-500 hover:text-white"
        >Logout
      </a>

    </div>

  </div>
</template>

<style>

</style>
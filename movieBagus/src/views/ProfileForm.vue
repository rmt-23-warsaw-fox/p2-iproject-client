<script>
import { mapActions, mapState } from 'pinia';
import { allInOneStore } from '../stores/stores';

export default {
  name: "RegisterForm",
  data() {
    return {
      credential: {
        username: "",
        email: "",
        password: "",
      },
    }
  },
  computed: {
    // ...mapState(allInOneStore, ["isLoggedIn"])
  },
  methods: {
    // ...mapActions(allInOneStore, ["doRegisterFromBackend"]),
    // async formSubmitHandler() {
    //   await this.doRegisterFromBackend(this.credential);
    //   if(this.isLoggedIn) {
    //     this.$router.push("/")
    //   }
    // },
  },
};
</script>

<template>
<!-- This is an example component -->
<div class="h-screen font-sans login bg-cover">
<div class="container mx-auto h-full flex flex-1 justify-center items-center">
    <div class="w-full max-w-lg">
      <div class="leading-loose">
        <form class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl" v-on:submit.prevent="formSubmitHandler">
            <p class="text-white font-medium text-center text-lg font-bold">EDIT PROFILE</p>
             <div class="">
                <label class="block text-sm text-white" for="text">Username</label>
                <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="text" id="text"  placeholder="Input username" aria-label="email" required v-model="credential.username">
              </div>
              <div class="">
                <label class="block text-sm text-white" for="email">Email</label>
                <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="email" id="email"  placeholder="Input email" aria-label="email" required v-model="credential.email">
              </div>
              <div class="mt-2">
                <label class="block  text-sm text-white">Password</label>
                 <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password" id="password" placeholder="Input password" arial-label="password" required v-model="credential.password">
              </div>

              <div class="mt-4 items-center flex justify-between">
                <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                  type="submit">EDIT</button>
              </div>
        </form>

      </div>
    </div>
  </div>
</div>
</template>

<style>
.login{
  /*
    background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');
  */
  background: url('http://bit.ly/2gPLxZ4');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
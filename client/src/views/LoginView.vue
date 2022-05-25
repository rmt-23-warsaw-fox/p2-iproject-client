<script>
import { inject } from "vue";
import { useUserStore } from "../stores/user";
import { mapWritableState,mapActions } from "pinia";
export default {
  name: "LoginForm",
  props: [],
  emits: [],
  computed: {
    ...mapWritableState(useUserStore, []),
  },
  methods: {
    ...mapActions(useUserStore,["login"]),
    regist(){
      this.$router.push('/register')
    },
    async dologin() {
      this.login(this.objUser)
    },
    async handleClickSignIn() {

    },
  },
  data() {
    return {
      objUser: {
        username: "",
        password: "",
      },
    };
  },
  setup() {

  },
};
</script>

<template>
  <div class="self-center flex items-center h-[100vh] justify-center my-auto">
    <form
      class="bg-gray-600 flex-col justify-center p-12 rounded-lg"
      @submit.prevent
    >
      <h1 class="flex justify-center text-2xl mb-6 text-white">USER LOGIN</h1>
      <div class="flex-col pb-4">
        <label for="" class="text-white">username</label>
        <input
          type="text"
          name=""
          id=""
          v-model="objUser.username"
          class="bg-slate-200 rounded-sm w-full h-8"
        />
      </div>
      <div class="flex-col pb-10">
        <label for="" class="text-white">password</label>
        <input
          type="password"
          name=""
          id=""
          v-model="objUser.password"
          class="bg-slate-200 rounded-sm w-full h-8"
        />
      </div>
      <button
        type="submit"
        class="bg-teal-300 py-1 w-full rounded-md transition ease-in-out delay-150 text-gray-200 text-xl hover:bg-teal-500 h-12 hover:text-white hover:-translate-y-1 hover:scale-105"
        @click.prevent="dologin"
      >
        LOGIN
      </button>
      <p class="flex justify-center text-sm text-gray-300 mt-4">
        dont have account ? register
      </p>

      <button
        type="submit"
        class="bg-orange-400 py-1 w-full rounded-md transition ease-in-out delay-150 text-gray-200 text-xl hover:bg-orange-500 h-12 hover:text-white hover:-translate-y-1 hover:scale-105 mt-2"
        @click.prevent="regist"
      >
        REGISTER
      </button>

      <button
        class="bg-white py-1 w-full rounded-md transition ease-in-out delay-150 text-gray-400 text-xl hover:bg-red-500 h-12 hover:text-white hover:-translate-y-1 hover:scale-105 mt-2"
        
      >
        <span>
          <span class="text-sm">sign in with</span>
          GOOGLE
        </span>
        <i class="fa-brands fa-google"></i>
      </button>
    </form>
  </div>
</template>

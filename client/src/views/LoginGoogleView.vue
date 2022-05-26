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
    async handleClickSignIn() {

    },
  },
  data() {
    return {
      objUser: {
        ign: "",
        tagline: "",
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
      <h1 class="flex justify-center text-2xl mb-6 text-white">Google User Sign In Form</h1>
      <div class="flex-col pb-4">
        <label for="" class="text-white">IGN</label>
        <input
          type="text"
          placeholder="TenZ"
          v-model="objUser.ign"
          class="bg-slate-200 rounded-sm w-full h-8"
        />
      </div>
      <div class="flex-col pb-10">
        <label for="" class="text-white">Tagline</label>
        <input
          type="password"
          placeholder="2002"
          v-model="objUser.tagline"
          class="bg-slate-200 rounded-sm w-full h-8"
        />
      </div>

   

      <button
        class="bg-white py-1 w-full rounded-md transition ease-in-out delay-150 text-gray-400 text-xl hover:bg-red-500 h-12 hover:text-white hover:-translate-y-1 hover:scale-105 mt-2"
        @click.prevent="handleClickSignIn"
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

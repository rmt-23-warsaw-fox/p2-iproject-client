<script>
import {  useUserStore } from '../stores/user';
import { mapActions,mapState } from 'pinia';
export default {
  name: "RegisterForm",
  props: [],
  emits: [],
  computed : {
 
  },
  methods: {
    ...mapActions(useUserStore,['register']),
    doRegist(){
      this.register(this.objUser)
    }
  },
  data() {
    return {
      objUser : {
        username : '',
        email : '',
        password : '',
        phoneNumber : '',
        address : ''
      }
    };
  },
};
</script>

<template>
  <div class="flex items-center h-[100vh] justify-center my-auto">
    <form class="bg-zinc-700 flex-col justify-center p-12 rounded-lg shadow-xl">
      <h1 class="flex justify-center text-2xl mb-6 text-white">REGISTER</h1>
      <div class="flex-col pb-2">
        <label for="" class="text-white">username</label>
        <input
          type="text"
          v-model="objUser.username"
          name=""
          placeholder="John Doe"
          class="bg-white rounded-sm w-full h-8"
        />
      </div>
      <div class="flex-col pb-2">
        <label for="" class="text-white">email</label>
        <input
          type="text"
          name=""
          v-model="objUser.email"
          placeholder="your@mail.com"
          class="bg-white rounded-sm w-full h-8"
        />
      </div>
      <div class="flex-col pb-2">
        <label for="" class="text-white">password</label>
        <input
          type="password"
          name=""
          v-model="objUser.password"
          placeholder="chickenNugget123"
          class="bg-white rounded-sm w-full h-8"
        />
      </div>
      <div class="flex-col pb-2">
        <label for="" class="text-white">phone number</label>
        <input
          type="text"
          name=""
          v-model="objUser.phoneNumber"
          placeholder=""
          class="bg-white rounded-sm w-full h-8"
        />
      </div>
      <div class="flex-col pb-10">
        <label for="" class="text-white">address</label>
        <input
          type="text"
          name=""
          v-model="objUser.address"
          class="bg-white rounded-sm w-full h-8"
        />
      </div>
      <button
        type="submit"
        class="bg-teal-300 py-1 w-full rounded-md transition ease-in-out delay-150 text-gray-200 text-xl hover:bg-teal-500 h-12 hover:text-white hover:-translate-y-1 hover:scale-105"
        @click.prevent="doRegist"
      >
        REGISTER
      </button>
    </form>
  </div>
</template>

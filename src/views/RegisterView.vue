<script>
import { RouterLink } from "vue-router";
import { mapActions } from "pinia";
import { mainStore } from "../stores/mainStore.js";
export default {
  name: "RegisterView",
  data() {
    return {
      formObject: {
        email: "",
        displayName: "",
        password: "",
        profilePic: undefined,
      },
    };
  },
  methods: {
    ...mapActions(mainStore, ["register"]),
    selectFile() {
      this.formObject.profilePic = this.$refs.profilePic.files[0];
    },
  },
};
</script>

<template>
  <!-- component -->
  <div class="bg-base-200 min-h-screen flex flex-col">
    <div
      class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <div class="bg-white px-6 py-8 rounded-xl shadow-xl text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
        <form @submit.prevent="register(formObject)" enctype="multipart/form-data">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
              v-model="formObject.email"
            />
          </div>
          <div class="form-control mt-3">
            <label class="label">
              <span class="label-text">Display Name</span>
            </label>
            <input
              type="text"
              placeholder="display name"
              class="input input-bordered"
              v-model="formObject.displayName"
            />
          </div>
          <div class="form-control mt-3">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              class="input input-bordered"
              v-model="formObject.password"
            />
          </div>
          <div class="form-control mt-3">
            <label class="label">
              <span class="label-text">Profile Picture</span>
            </label>
            <input type="file" ref="profilePic" @change="selectFile()" class="input"/>
          </div>
  
          <div class="form-control mt-6">
            <button type="submit" class="btn">Create Account</button>
          </div>

        </form>
        <div class="text-grey-dark mt-6 text-center">
          Already have an account?
          <RouterLink
            class="no-underline border-b border-blue text-blue"
            to="/login"
          >
            Log in </RouterLink
          >.
        </div>
      </div>
    </div>
  </div>
</template>

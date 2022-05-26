<script>
import { useAccomodationStore } from '../stores/accomodation'
import { mapWritableState, mapActions } from 'pinia';
export default {
  name: "LoginView",
  computed: {
      ...mapWritableState(useAccomodationStore, ['dataLogin'])
  },
  methods: {
      ...mapActions(useAccomodationStore, ['login', 'loginWithGoogle']),
      async getTokenId() {
      try {
        const googleUser = await this.$gAuth.signIn();
        const token = googleUser.getAuthResponse().id_token;
        this.loginWithGoogle(token);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<template>
  <div class="wrapper d-flex justify-content-center">
    <div class="content-form form-login shadow">
      <h2 class="text-center">Login</h2>
      <form>
        <div class="mt-3 mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Enter your email"
            v-model="dataLogin.email"
          />
        </div>
        <div class="mt-3 mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter your password"
            v-model="dataLogin.password"
          />
        </div>
        <button type="submit" class="btn btn-warning w-100 mb-3 mt-3" @click.prevent="login">
          Login
        </button>
        <div class="d-flex justify-content-center mb-3 text-dark">Atau</div>
        <div class="btn-google" @click="getTokenId">
          <img src="../assets/btn_google_dark_normal_ios.svg" alt="" />
          <div class="btn-google-text">Sign In With Google</div>
          <div class="layer"></div>
        </div>
      </form>
    </div>
  </div>
</template>

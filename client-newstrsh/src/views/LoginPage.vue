<script>
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';

export default {
  data() {
    return {
      loginInfo: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ['backendLogin']),
    async login() {
      try {
        await this.backendLogin(this.loginInfo);
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
  },
};
</script>

<template>
  <div class="login-page">
    <div class="form">
      <form class="login-form" @submit.prevent="login">
        <input
          type="text"
          id="email"
          placeholder="email address"
          v-model="loginInfo.email"
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          v-model="loginInfo.password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered?
          <router-link to="/register"> Create an account</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: 'Inter', sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #1976d2;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
}
body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

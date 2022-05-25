<script>
import navbar from "./components/navbar.vue";

import linkUrl from './api/axios'

export default {
  components: { navbar },
  data() {
    return {
      login: false
    }
  },
  name: "appVue",
  methods: {
    async isRegister(username, email, password, phoneNumber, address) {
      try {
        const register = await linkUrl.post(`users/register`, {
          username,
          email,
          password,
          phoneNumber,
          address,
        });
      } catch (err) {
        this.form.message = err.response.data.message;
        this.$toast.open(this.form);
      }
    },
    async isLogin(email, password) {
      try {
        console.log(312);
        const login = await linkUrl.post(`users/login`, {
          email,
          password,
        });
        localStorage.setItem("access_token", login.data.access_token);
        localStorage.setItem("UserId", login.data.id);
        this.login = true
        this.$router.push("/");
      } catch (err) {
        this.form.message = err.response.data.message;
        this.$toast.open(this.form);
      }
    },
    trueLogout() {
      this.login = false
    }
  },
};
</script>

<template>
  <div id="app">
    <navbar 
    @trueLogoutEmit='trueLogout'
    :trueLoginprops='login'
    />
    <router-view 
     @isLoginEmit="isLogin"
     @registerEmit="isRegister"/>
  </div>
</template>

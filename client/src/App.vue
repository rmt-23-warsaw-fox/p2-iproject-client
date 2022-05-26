<script>
import navbar from "./components/navbar.vue";

import linkUrl from "./api/axios";

export default {
  components: { navbar },
  data() {
    return {
      login: false,
      name: "",
      email: "",
      password: "",
      phoneNumber: "",      
      form: {
        message: "",
        type: "error",
        duration: 10000,
        dismissible: true,
        queue: false,
        position: "top",
        onClick: this.onClick,
        onDismiss: this.onDismiss,
    }
    };
  },
  name: "appVue",
  methods: {
    async checkRegister(name, email, password, phoneNumber) {
      try {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        const emailRegister = await linkUrl.post(`users/checkRegister`, {
          name,
          email,
          password,
          phoneNumber,
        })
      } catch (err) {
        this.form.message = err.response.data.message;
        this.$toast.open(this.form);
      }
    },
    async isRegister() {
      try {
        await linkUrl.post(`users/register`, {
          name: this.name,
          email: this.email,
          password: this.password,
          phoneNumber: this.phoneNumber,
        });
        this.$router.push("/login");
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
        this.login = true;
        this.$router.push("/");
      } catch (err) {
        this.form.message = err.response.data.message;
        this.$toast.open(this.form);
      }
    },
    trueLogout() {
      this.login = false;
    },
  },
};
</script>

<template>
  <div id="app">
    <navbar @trueLogoutEmit="trueLogout" :trueLoginprops="login" />
    <router-view @isLoginEmit="isLogin" @registerEmit="checkRegister" />
  </div>
</template>

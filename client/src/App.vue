<script>
import navbar from "./components/navbar.vue";

import linkUrl from "./api/axios";

export default {
  components: { navbar },
  data() {
    return {
      login: false,     
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
    async isRegister(name, email, password, phoneNumber) {
      try {
        const emailRegister = await linkUrl.post(`users/register`, {
          name,
          email,
          password,
          phoneNumber,
        })
        this.form.type = 'success'
        this.form.message = 'Berhasil registrasi, silahkan check email';
        this.$toast.open(this.form);
        this.isLogin(email, password)
      } catch (err) {
        this.form.type = 'error'
        this.form.message = err.response.data.message;
        this.$toast.open(this.form);
      }
    },
    async isLogin(email, password) {
      try {
        const login = await linkUrl.post(`users/login`, {
          email,
          password,
        });
        localStorage.setItem("access_token", login.data.access_token);
        localStorage.setItem("UserId", login.data.id);
        this.login = true;
        this.$router.push("/");
      } catch (err) {
        this.form.type = 'error'
        this.form.message = err.response.data.message;
        this.$toast.open(this.form);
      }
    },
    trueLogout() {
      this.login = false;
    },
    isLoginGoogle() {
      this.login = true;
      this.$router.push('/')
    }
  },
};
</script>

<template>
  <div id="app">
    <navbar @trueLogoutEmit="trueLogout" :trueLoginprops="login" />
    <router-view 
    @isLoginEmit="isLogin" 
    @registerEmit="isRegister"
    @isGoogle='isLoginGoogle'
    />
  </div>
</template>

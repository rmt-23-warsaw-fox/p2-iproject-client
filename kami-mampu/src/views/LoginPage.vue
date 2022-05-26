<script>
import { mapActions, mapWritableState } from "pinia";
import { useCustomerStore } from "../stores/customer";
export default {
  name: "LoginPage",
  data() {
    return {
      userLogin: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapWritableState(useCustomerStore, ["isLoggedIn"]),
  },
  methods: {
    ...mapActions(useCustomerStore, ["login"]),

    async loginButtonHandler() {
      try {
        const { data } = await this.login(this.userLogin);

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("CustomerId", data.CustomerId);

        this.isLoggedIn = true;
        this.$router.push("/");

        this.$toast.success("Logged in successfully", {
          position: "top-right",
          duration: 3000,
        });
      } catch (error) {
        this.$toast.error(error.response.data.message, {
          position: "top-right",
          duration: 3000,
        });
      }
    },
    async loginGoogleButtonHandler() {
      try {
        let googleUser = await this.$gAuth.signIn();
        let token = googleUser.getAuthResponse().id_token;
        const { data } = await this.loginGoogle(token);

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("CustomerId", data.CustomerId);

        this.isLoggedIn = true;

        this.$router.push("/");
        this.$router.push("/");

        this.$toast.success("Logged in successfully", {
          position: "top-rightt",
          duration: 3000,
        });
      } catch (error) {
        this.$toast.error(error.response.data.message, {
          position: "top-right",
          duration: 3000,
        });
      }
    },
  },
};
</script>

<template>
  <div class="login-form">
    <div class="login-item">
      <h3>Login to give a helping hand for people in needs!</h3>
    </div>
    <div class="login-item">
      <form @submit.prevent="loginButtonHandler">
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" v-model="userLogin.email" />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            v-model="userLogin.password"
          />
        </div>
        <button class="btn btn-login form-control">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-form {
  background-color: #499fa4;
  border-radius: 20px;
  height: 400px;
  margin-top: 20vh;
  margin-right: 30vw;
  margin-left: 30vw;
  border: 1px solid #91cabe;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.login-item {
  margin-top: 15px;
}

h4,
h6 {
  margin-top: 50px;
}

.btn-login {
  margin-top: 20px;
  width: 210px;
  background-color: #b5dfd6;
  border: 1px solid #91cabe;
}
</style>

<script>
import "../assets/css/style.css";
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      userInput: {
        userLogin: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["loginAction"]),
    async loginEvent() {
      try {
        const { data } = await this.loginAction(this.userInput);
        localStorage.setItem("access_token", data.access_token);
        this.$router.push("/home");
      } catch (err) {
        console.log(err.respones.data.message);
      }
    },
  },
};
</script>

<template>
  <div class="main">
    <div class="container">
      <div class="signin-content">
        <div class="signin-image">
          <figure>
            <img src="../assets/images/signin-image.jpg" alt="sing up image" />
          </figure>
          <router-link to="/register" class="signup-image-link"
            >Create an account</router-link
          >
        </div>

        <div class="signin-form">
          <h2 class="form-title">Sign in</h2>
          <form
            method="POST"
            class="register-form"
            id="login-form"
            @submit.prevent="loginEvent"
          >
            <div class="form-group">
              <label for="your_name"
                ><i class="zmdi zmdi-account material-icons-name"></i
              ></label>
              <input
                v-model="userInput.userLogin"
                type="text"
                name="your_name"
                id="your_name"
                placeholder="User name / email"
              />
            </div>
            <div class="form-group">
              <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
              <input
                v-model="userInput.password"
                type="password"
                name="your_pass"
                id="your_pass"
                placeholder="Password"
              />
            </div>
            <div class="form-group form-button">
              <input
                type="submit"
                name="signin"
                id="signin"
                class="form-submit"
                value="Log in"
              />
            </div>
          </form>
          <div class="social-login"></div>
        </div>
      </div>
    </div>
  </div>
</template>

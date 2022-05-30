<script>
import { useCounterStore } from "@/stores/counter";
import { mapWritableState, mapActions } from "pinia";
export default {
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapWritableState(useCounterStore, ["access_token1"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["loginGoogle", "loginP"]),
    async loginSubmit(payload) {
      console.log("loginSubmit");
      console.log(payload, "<<<< payload");
      const success = await this.loginP(payload);
      console.log("success", success);
      if (success) {
        await this.$router.push("/diagnose");
      }
    },
    async googleOAuth() {
      console.log("google oauth yow");
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        const token = googleUser.getAuthResponse().id_token;

        this.loginGoogle(token);
        this.$router.push("/");
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
    register() {
      this.$router.push("/register");
    },
    loginDoctor() {
      this.$router.push("/doctor/login");
    },
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.$router.push("/");
    }
  },
};
</script>
<template>
  <div class="login" style="width: 80%; margin: auto">
    <form class="form-input" @submit.prevent="loginSubmit(input)">
      <div class="form-group">
        <h4>Patient Login Page</h4>
        <br />
        <label for="exampleInputEmail1">E-Mail</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="input.email"
        />
        <small id="username" class="form-text text-muted"
          >We'll never share your information with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="input.password"
        />
      </div>
      <br />
      <button type="submit" class="btn btn btn-outline-info">Submit</button>
      <button class="btn1 btn btn-outline-info" @click="register()">
        Register
      </button>
      <button class="btn1 btn btn-outline-info" @click="googleOAuth()">
        Login With Google
      </button>
      <br />
      <br />
      <p>Are you a doctor?</p>
      <button class="btn btn-outline-info" @click="loginDoctor()">
        Login As A Doctor
      </button>
    </form>
  </div>
</template>

<style>
.btn1 {
  margin-left: 20px;
}
.form-input {
  padding: 20px 20px 20px 20px;
  padding-left: 50px;
  padding-right: 50px;
}
.button-below {
  margin-left: 50px;
  margin-bottom: 20px;
}
</style>

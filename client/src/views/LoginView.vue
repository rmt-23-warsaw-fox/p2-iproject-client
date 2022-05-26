<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Login Page",
  methods: {
    ...mapActions(useCounterStore, ["login"]),
    loginChild() {
      this.login(this.loginData)
    }
  },
  computed: {
    loginData() {
      return {
        email: "",
        password: "",
      };
    },
  },
};
</script>

<template>
  <div
    class="container d-flex justify-content-center"
    style="margin-top: 25vh"
    id="pageLogin"
  >
    <div class="row">
      <div
        class="card border-0"
        style="background-color: #151515; border-radius: 25px"
      >
        <div class="card-body d-flex flex-column align-items-center">
          <h5 class="card-title mb-3 fw-bold text-center" style="color: white">
            Login
          </h5>
          <p class="card-subtitle mb-2 text-muted text-center mb-4">
            Login to access your account
          </p>
          <form id="loginForm" style="min-width: 20vw" @submit.prevent="loginChild">
            <div class="input-group mb-3">
              <div class="col-sm">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  id="loginEmail"
                  v-model="loginData.email"
                  required
                />
              </div>
            </div>
            <div class="input-group mb-4">
              <div class="col-sm">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  id="loginPassword"
                  v-model="loginData.password"
                  required
                />
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="col-sm">
                <button class="btn btn-success form-control">Login</button>
              </div>
            </div>
          </form>
          <p class="card-subtitle mb-1 text-muted small text-center mb-0">
            Don't have an account yet?
            <router-link to="/signup" href="#">Sign Up</router-link>
          </p>
          <p class="card-subtitle mb-3 text-muted small text-center mb-0">
            Or Sign In with Google
          </p>
          <button class="btn btn-dark">Sign In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

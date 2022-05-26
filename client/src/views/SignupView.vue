<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Signup Page",
  methods: {
    ...mapActions(useCounterStore, ["register"]),
    registerChild() {
      this.register(this.registerData)
    }
  },
  computed: {
    registerData() {
      return {
        username: "",
        email: "",
        password: "",
      };
    },
  },
};
</script>

<template>
  <div
    class="container d-flex flex-column align-items-center"
    style="margin-top: 25vh"
    id="pageRegister"
  >
    <div class="row">
      <div
        class="card border-0"
        style="background-color: #151515; border-radius: 25px"
      >
        <div class="card-body d-flex flex-column align-items-center">
          <h5 class="card-title mb-4 fw-bold">Register</h5>
          <p class="card-subtitle mb-2 text-muted text-center mb-4">
            Enter your information to create an account
          </p>
          <form id="registerForm" style="width: 20vw" @submit.prevent="registerChild">
            <div class="input-group mb-3">
              <div class="col-sm">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  id="registerUsername"
                  v-model="registerData.username"
                  required
                />
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="col-sm">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  id="registerEmail"
                  v-model="registerData.email"
                  required
                />
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="col-sm">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  id="registerPassword"
                  v-model="registerData.password"
                  required
                />
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="col-sm">
                <button class="btn btn-success form-control">Signup</button>
              </div>
            </div>
          </form>
          <p class="card-subtitle mb-1 text-muted small text-center mb-0">
            Already have an account?
            <router-link to="/login" href="#">Login</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

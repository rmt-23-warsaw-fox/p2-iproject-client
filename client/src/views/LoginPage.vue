<script>
import { mapActions, mapWritableState } from "pinia";
import { useNontonStore } from "../stores/counter";

export default {
  name: "LoginPage",
  methods: {
    ...mapActions(useNontonStore, ["login"]),
    loginClick() {
      this.login();
      this.$router.push("/");
    },
  },
  computed: {
    ...mapWritableState(useNontonStore, ["user"]),
  },
};
</script>

<template>
  <div
    class="card w-50 text-bg-secondary rounded-4"
    style="margin-left: 25vw; margin-top: 15%"
  >
    <div class="card-body">
      <h2 style="text-align: center">Welcome to our app!</h2>
      <h4 style="text-align: center">Please Login</h4>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="user.email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="user.password"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          @click.prevent="loginClick"
          style="margin-left: 45%"
        >
          Login
        </button>
      </form>
      <br />
      <p style="text-align: center">
        Don't have an account?
        <router-link to="/register" style="color: greenyellow"
          >Register</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import Navbar from "../components/Navbar.vue";

export default {
  name: "LoginPage",
  components: {
    Navbar,
  },
  computed: {
    ...mapWritableState(useCounterStore, ["email", "password"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["login"]),
  },
};
</script>

<template>
  <Navbar />
  <div class="container vh-100 text-center">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-4">
        <div class="card shadow-sm">
          <h1 class="m-5">Login Form</h1>
          <form @submit.prevent="login">
            <div class="form-floating my-3 mx-5">
              <input v-model="email" type="text" class="form-control" />
              <label for="">Email</label>
            </div>
            <div class="form-floating my-3 mx-5">
              <input v-model="password" type="password" class="form-control" />
              <label for="">Password</label>
            </div>
            <div class="d-flex col-12 justify-content-end">
              <button class="btn btn-primary m-5">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

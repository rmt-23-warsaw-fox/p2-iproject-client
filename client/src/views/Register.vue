<script>
import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import Navbar from "../components/Navbar.vue";

export default {
  name: "RegisterPage",
  computed: {
    ...mapWritableState(useCounterStore, [
      "name",
      "email",
      "password",
      "address",
    ]),
  },
  methods: {
    ...mapActions(useCounterStore, ["register"]),
  },
  components: { Navbar },
};
</script>

<template>
  <Navbar />
  <div class="text-center vh-100 container">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8">
        <div class="card shadow-sm">
          <h1 class="m-5">Register Form</h1>
          <form @submit.prevent="register">
            <div class="form-floating m-5">
              <input v-model="name" type="text" class="form-control" />
              <label for="">Name</label>
            </div>
            <div class="form-floating m-5">
              <input v-model="email" type="email" class="form-control" />
              <label for="">Email</label>
            </div>
            <div class="form-floating m-5">
              <input v-model="password" type="password" class="form-control" />
              <label for="">Password</label>
            </div>
            <div class="form-floating m-5">
              <input v-model="address" type="text" class="form-control" />
              <label for="">Address</label>
            </div>
            <div class="d-flex justify-content-end col-12">
              <button type="submit" class="btn btn-primary m-5">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

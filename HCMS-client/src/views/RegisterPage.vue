<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      input: {
        username: "",
        password: "",
        email: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["register"]),
    async registerSubmit(payload) {
      console.log("registerSubmit");
      console.log(payload, "<<<< payload");
      await this.register(payload);
      this.$router.push("/login");
    },
  },
};
</script>
<template>
  <form class="form-input" @submit.prevent="registerSubmit(input)">
    <div class="form-group">
      <label for="username">Name</label>
      <input
        type="text"
        class="form-control"
        id="username"
        aria-describedby="emailHelp"
        placeholder="username"
        v-model="input.username"
      />
      <small id="username" class="form-text text-muted"
        >We'll never share your information with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Password"
        v-model="input.password"
      />
      <br />
      <label for="email">Email</label>
      <input
        type="text"
        class="form-control"
        id="email"
        placeholder="Email"
        v-model="input.email"
      />
      <br />
      <label for="phoneNumber">Phone Number</label>
      <input
        type="text"
        class="form-control"
        id="phoneNumber"
        placeholder="Phone Number"
        v-model="input.phoneNumber"
      />
      <br />
      <label for="address">Address</label>
      <input
        type="text"
        class="form-control"
        id="address"
        placeholder="address"
        v-model="input.address"
      />
    </div>
    <br />
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<style>
.form-input {
  padding: 20px 20px 20px 20px;
  padding-left: 50px;
  padding-right: 50px;
}
</style>

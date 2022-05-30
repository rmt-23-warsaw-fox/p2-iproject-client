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
    ...mapActions(useCounterStore, ["loginGoogle", "loginD"]),
    async loginSubmitD(payload) {
      console.log("loginSubmit");
      console.log(payload, "<<<< payload");
      const success = await this.loginD(payload);
      console.log("success", success);
      if (success) {
        await this.$router.push("/doctor/approve");
      }
    },
  },
};
</script>
<template>
  <div class="login" style="width: 80%; margin: auto">
    <form class="form-input" @submit.prevent="loginSubmitD(input)">
      <div class="form-group">
        <h4>Doctor Login Page</h4>
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

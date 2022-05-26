<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      phoneNumber: ''
    }
  },
  name: "registerUser",
  emits: [],
  methods: {
    isRegister() {
      this.$emit(
      'registerEmit',
      this.username,
      this.email,
      this.password,
      this.phoneNumber,
      )
    }
  },
};
</script>

<template>
  <div id="register">
    <form>
      <div class="container-login">
        <h2 class="text-center">Register</h2>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            v-model="name"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Phone Number"
            v-model="phoneNumber"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary click"
          @click.prevent="isRegister"
        >
          Register</button
        ><br /><br />
      </div>
    </form>
  </div>
</template>

<style>
.container-login {
  width: 200%;
  margin-top: 50%;
  box-shadow: 0 2px 15px;
  padding: 10px;
  margin-left: 200%;
}

.click {
  width: 90%;
}
</style>



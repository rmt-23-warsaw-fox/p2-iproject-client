<script>
export default {
  data() {
    return {
      data: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
};
</script>

<template>
  <form
    class="Login-form"
    v-on:submit.prevent=""
    action=""
    method=""
    style="
      width: 100%;
      align-items: center;
      display: flex;
      justify-content: center;
      margin-top: 10%;
    "
  >
    <div class="card" style="background-color: aquamarine; display: flex">
      <div class="card-header" style="display: flex; justify-content: center">
        <h1>Login</h1>
        <br />
      </div>
      <div class="card-body">
        <label for="username">Username</label><br />
        <input
          type="text"
          v-model="data.username"
          class="login"
          id="username"
          name="username"
          placeholder="username"
          style="width: 100%"
        />
        <br />
        <label for="email">Email</label><br />
        <input
          type="text"
          v-model="data.email"
          class="login"
          id="email"
          name="email"
          placeholder="email@mail.com"
          style="width: 100%"
        />
        <br />
        <label for="password">Password</label> <br />
        <input
          type="password"
          v-model="data.password"
          class="login"
          id="password"
          name="password"
          placeholder="password"
          style="width: 100%"
        /><br />
        <br />
        <input
          style="width: 100%"
          class="btn btn-secondary"
          type="submit"
          value="Sign in"
        />
        <br />
        <br />
        <a href="#" v-on:click.prevent="toRegister" style="float: left"
          >Not registered yet?</a
        >
        <button
          v-on:click.prevent="signGoogle"
          style="width: 100%"
          class="btn btn-outline-secondary"
          id="register"
        >
          Use Google Account
        </button>
      </div>
    </div>
  </form>
</template>

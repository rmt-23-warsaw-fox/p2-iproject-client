<script>
import { mapActions, mapWritableState } from "pinia";
import { useAllStore } from "../stores/allStore";

export default {
  computed: {
    ...mapWritableState(useAllStore, ["data"]),
    Title() {
      if (this.$route.name === "register") {
        return "Register";
      } else if (this.$route.name == "login") {
        return "Login";
      }
    },
    button() {
      if (this.$route.name === "register") {
        return "Sign up";
      } else if (this.$route.name == "login") {
        return "Sign In";
      }
    },
  },
  methods: {
    ...mapActions(useAllStore, ["login", "register", "signInGoogle"]),
    submit() {
      console.log(this.data);
      if (this.$route.name === "register") {
        this.register(this.data);
      } else if (this.$route.name == "login") {
        this.login(this.data);
      }
    },
    toRegister() {
      this.$router.push("/register");
    },
    toLogin() {
      this.$router.push("/login");
    },
    async signGoogle() {
      try {
        const googleUser = await this.$gAuth.signIn();
        const tokenGoogle = googleUser.xc.id_token;
        const signIn = await this.signInGoogle(tokenGoogle);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <form
    class="Login-form bg-black"
    v-on:submit.prevent="submit"
    action=""
    method=""
    style="
      width: 100%;
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 50px;
    "
  >
    <div class="card bg-info" style="background-color: aquamarine; width: 50%">
      <div class="card-header" style="justify-content: center">
        <h1>{{ Title }}</h1>
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
          :value="button"
        />
        <br />
        <br />
        <button
          v-on:click.prevent="signGoogle"
          style="width: 100%"
          class="btn btn-outline-dark"
          id="loginGoogle"
        >
          Use Google Account
        </button>
      </div>
    </div>
  </form>
</template>

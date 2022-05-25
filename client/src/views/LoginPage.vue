<template>
  <section id="login-customer">
    <div class="container-fluid">
      <div class="row row-login">
        <div class="col-12 col-md-6 col-sm-8 m-auto">
          <div class="card bg">
            <div class="card-body">
              <div class="title">
                <h2>Homie Login</h2>
              </div>
              <form action="">
                <input
                  type="email"
                  class="form-control my-4 py-2"
                  name="email"
                  id=""
                  placeholder="Email"
                  v-model="localEmail"
                />
                <input
                  type="password"
                  class="form-control my-4 py-2"
                  name="password"
                  id=""
                  placeholder="Password"
                  v-model="localPassword"
                />
                <div class="text-center mt-3">
                  <button class="btn btn-primary" @click.prevent="clickLogin">
                    Login
                  </button>
                  <p class="mt-2">Or</p>
                  <button class="btn google-btn">
                    <img
                      class="google-logo"
                      src="../assets/google-logo-9824.png"
                      alt=""
                    />
                    Sign in with Google
                  </button>
                  <div class="my-4">
                    Don't have an account ?
                    <RouterLink to="/register">Sign Up</RouterLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useLoginStore } from "../stores/login";
import { mapActions, mapWritableState } from "pinia";
export default {
  name: "loginPage",
  data() {
    return {
      localEmail: "",
      localPassword: "",
    };
  },
  emits: ["changeStatusIsLogin"],
  computed: {
    ...mapWritableState(useLoginStore, ["email", "password"]),
  },
  methods: {
    ...mapActions(useLoginStore, ["login"]),
    async clickLogin() {
      try {
        this.email = this.localEmail;
        this.password = this.localPassword;
        const res = await this.login();
        console.log(res);
        localStorage.setItem("access_token", res.data.access_token);
        this.$emit("changeStatusIsLogin");
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
#login-customer {
  height: 100vh;
}
.bg {
  border-radius: 20px;
}
.row-login {
  height: 100vh;
}
.title {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.google-logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.google-btn {
  border: 1px solid black;
  border-radius: 8px;
}
</style>

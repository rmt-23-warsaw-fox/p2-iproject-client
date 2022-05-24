<script>
import MainHeader from "../components/MainHeader.vue";
import MainFooter from "../components/MainFooter.vue";
import ButtonReus from "../components/ButtonReus.vue";
import { useAuthStore } from "../stores/auth";
import { mapStores } from "pinia";
export default {
  components: {
    MainHeader,
    MainFooter,
    ButtonReus,
  },
  computed: {
    ...mapStores(useAuthStore),
  },
  methods: {
    async login() {
      try {
        const { data } = await this.authStore.login();
        localStorage.setItem("access_token", data.access_token);
        this.$router.push("/");
        this.$toast.success("Login Success", {
          position: "top-right",
          duration: 3000,
        });
      } catch (error) {
        this.$toast.error(error.response.data.message, {
          position: "top-right",
          duration: 3000,
        });
      }
    },
  },
  created() {
    this.authStore.inputUser = {
      email: "",
      password: "",
    };
  },
};
</script>

<template>
  <MainHeader />
  <div class="b-example-divider"></div>
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 mb-3">
          Login dan mulai berbelanja di 23-Store
        </h1>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light">
          <div class="form-floating mb-3">
            <input
              v-model="authStore.inputUser.email"
              type="email"
              class="form-control"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              v-model="authStore.inputUser.password"
              type="password"
              class="form-control"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <ButtonReus
            v-on:click.prevent="login"
            title="Log In"
            class="w-100 btn btn-lg btn-primary"
            type="submit"
          />
        </form>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<style>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}
</style>

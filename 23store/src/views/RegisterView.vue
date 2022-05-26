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
    async checkToken() {
      try {
        const { data } = await this.authStore.checkToken();
        this.authStore.userProfile.id = data.data.id;
        this.authStore.userProfile.email = data.data.email;
        this.authStore.userProfile.firstName = data.data.profile.firstName;
        this.authStore.userProfile.lastName = data.data.profile.lastName;
        this.authStore.userProfile.phone = data.data.profile.phone;
        this.authStore.userProfile.address = data.data.profile.address;
      } catch (error) {
        localStorage.clear();
        this.authStore.isLogin = false;
        this.authStore.userProfile = {
          id: "",
          email: "",
          firstName: "",
          lastName: "",
          phone: "",
          address: "",
        };
      }
    },
    async register() {
      try {
        const { data } = await this.authStore.register();

        this.$router.push("/login");
        this.$toast.success("Register Success", {
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
    this.checkToken();
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
          Daftar dan dapatkan kemudahan berbelanja di 23-Store
        </h1>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light">
          <div class="form-floating mb-3">
            <input
              v-model="authStore.inputUser.email"
              type="email"
              id="email"
              class="form-control"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              v-model="authStore.inputUser.password"
              type="password"
              id="password"
              class="form-control"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <ButtonReus
            title="Register"
            v-on:click.prevent="register"
            class="w-100 btn btn-lg btn-primary"
            type="submit"
          />
          <hr class="my-4" />
          <small class="text-muted"
            >By clicking Sign up, you agree to the terms of use.</small
          >
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

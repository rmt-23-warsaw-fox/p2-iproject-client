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
  },
  created() {
    this.checkToken();
  },
};
</script>

<template>
  <MainHeader />
  <div class="b-example-divider"></div>
  <div class="container my-5">
    <div class="bg-light shadow p-5 text-danger text-center">
      <h1 class="display-1 fw-bold">- 404 -</h1>
      <h2 class="display-4 fw-bold">Page Not Found !!!</h2>
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

<script>
import { useAccomodationStore } from "../stores/accomodation";
import { mapActions, mapState, mapWritableState } from "pinia";
import LoadingComp from "../components/LoadingComp.vue";

export default {
  name: "RegisterView",
  components: {
    LoadingComp,
  },
  computed: {
    ...mapWritableState(useAccomodationStore, ["dataRegister"]),
    ...mapState(useAccomodationStore, ['isLoading'])
  },
  methods: {
    ...mapActions(useAccomodationStore, ["register", "cekLogin"]),
  },
  created() {
    this.cekLogin();
  }
};
</script>

<template>
  <div>
    <LoadingComp v-if="isLoading"/>
    <div class="wrapper d-flex justify-content-center">
      <div class="content-form form-register shadow">
        <h2 class="text-center">Register</h2>
        <form>
          <div class="d-flex justify-content-between">
            <div class="left-side w-100">
              <div class="mt-3 mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="Enter your First Name"
                  v-model="dataRegister.firstName"
                />
              </div>
              <div class="mt-3 mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder="Enter your Last Name"
                  v-model="dataRegister.lastName"
                />
              </div>
              <div class="mt-3 mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email"
                  v-model="dataRegister.email"
                />
              </div>
              <div class="mt-3 mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter your password"
                  v-model="dataRegister.password"
                />
              </div>
            </div>
            <div class="vr mx-4"></div>
            <div class="right-side w-100">
              <div class="mt-3 mb-3">
                <label for="phoneNumber" class="form-label">Phone Number</label>
                <input
                  type="text"
                  class="form-control"
                  id="phoneNumber"
                  placeholder="Enter your Phone Number"
                  v-model="dataRegister.phoneNumber"
                />
              </div>
              <div class="mt-3 mb-3">
                <label for="adrress" class="form-label">Address</label>
                <textarea
                  class="form-control"
                  id="address"
                  placeholder="Enter your Address"
                  rows="5"
                  v-model="dataRegister.address"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="w-100 d-flex justify-content-center mb-3 mt-5">
            <button
              type="submit"
              class="btn btn-success w-75"
              @click.prevent="register"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

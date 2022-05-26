<template>
  <section id="register-customer">
    <div class="container-fluid">
      <div class="row row-register">
        <div class="col-12 col-md-6 col-sm-8 m-auto">
          <div class="card bg">
            <div class="card-body">
              <h3 class="text-center mb-5">Register</h3>
              <form action="">
                <input
                  type="text"
                  class="form-control my-4 py-2"
                  name="username"
                  id=""
                  placeholder="Username"
                  v-model="localUsername"
                />
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
                <input
                  type="text"
                  class="form-control my-4 py-2"
                  name="phoneNumber"
                  id=""
                  placeholder="Phone Number"
                  v-model="localPhoneNumber"
                />
                <input
                  type="text"
                  class="form-control my-4 py-2"
                  name="address"
                  id=""
                  placeholder="Address"
                  v-model="localAddress"
                />
                <div class="text-center my-3">
                  <button
                    @click.prevent="clickRegister"
                    class="btn btn-primary"
                  >
                    Register
                  </button>
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
import { useRegisterStore } from "../stores/register";
import { mapWritableState, mapActions } from "pinia";
export default {
  name: "registerPage",
  data() {
    return {
      localUsername: "",
      localEmail: "",
      localPassword: "",
      localPhoneNumber: "",
      localAddress: "",
    };
  },
  computed: {
    ...mapWritableState(useRegisterStore, [
      "username",
      "email",
      "password",
      "phoneNumber",
      "address",
    ]),
  },
  methods: {
    ...mapActions(useRegisterStore, ["register"]),
    async clickRegister() {
      try {
        this.username = this.localUsername;
        this.email = this.localEmail;
        this.password = this.localPassword;
        this.phoneNumber = this.localPhoneNumber;
        this.address = this.localAddress;
        const res = await this.register();
        this.$router.push("/login");
      } catch (err) {
        this.$swal.fire({
          icon: "error",
          title: err.response.status,
          text: err.response.data.message,
        });
      }
    },
  },
};
</script>

<style>
#register-customer {
  height: 100vh;
}
.row-register {
  height: 100vh;
}
.bg {
  border-radius: 20px;
}
</style>

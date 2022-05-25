<script>
import { mapActions, mapWritableState } from "pinia";
import { useCustomerStore } from "../stores/customer";
export default {
  name: "RegisterPage",
  data() {
    return {
      userRegister: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapWritableState(useCustomerStore, ["isLoggedIn"]),
  },
  methods: {
    ...mapActions(useCustomerStore, ["register"]),

    async registerButtonHandler() {
      try {
        const { data } = await this.register(this.userRegister);

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("CustomerId", data.CustomerId);

        this.isLoggedIn = true;
        this.$router.push("/");

        this.$toast.success("Register success", {
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
};
</script>

<template>
  <div class="register-form">
    <div class="register-item">
      <h3>Register now to help people around!</h3>
    </div>
    <div class="register-item">
      <form @submit.prevent="registerButtonHandler">
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            v-model="userRegister.email"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            v-model="userRegister.password"
          />
        </div>

        <button class="btn btn-register form-control">Register</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.register-form {
  background-color: #499fa4;
  border-radius: 20px;
  height: 450px;
  margin-top: 20vh;
  margin-right: 35vw;
  margin-left: 35vw;
  border: 1px solid #91cabe;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.register-item {
  margin-top: 15px;
}

h4,
h6 {
  margin-top: 50px;
}
.btn-login {
  margin-top: 10px;
  margin-left: 32px;
  width: 210px;
  background-color: #b5dfd6;
  border: 1px solid #91cabe;
}

.btn-register {
  margin-top: 20px;
  background-color: #b5dfd6;
  border: 1px solid #91cabe;
}
</style>

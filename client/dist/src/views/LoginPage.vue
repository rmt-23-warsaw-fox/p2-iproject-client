<script>
import axiosInstance from "../api";
import { useInventoryStore } from "../stores/inventory";
import { mapWritableState } from "pinia";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  computed: {
    ...mapWritableState(useInventoryStore, ["isLogin"]),
  },

  methods: {
    async login() {
      try {
        const { data } = await axiosInstance.post("/users/login", {
          email: this.email,
          password: this.password,
        });

        localStorage.setItem("access_token", data.access_token);
        this.$router.push("/");
        this.isLogin = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <div class="container wrap">
    <div class="row m-5 no-gutters shadow-lg">
      <div class="col-md-6 d-none d-md-block">
        <img
          src="../../src/assets/polynesia-g368b24158_1920.jpg"
          class="img-fluid"
          style="min-height: 100%"
        />
      </div>
      <div class="col-md-6 bg-white p-5">
        <h3 class="pb-3">Login Form</h3>
        <div class="form-style">
          <form @submit.prevent="login">
            <div class="form-group pb-3">
              <input
                type="email"
                placeholder="Email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="email"
              />
            </div>
            <div class="form-group pb-3">
              <input
                type="password"
                placeholder="Password"
                class="form-control"
                id="exampleInputPassword1"
                v-model="password"
              />
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <input name="" type="checkbox" value="" />
                <span class="pl-2 font-weight">Remember Me</span>
              </div>
              <div><a href="#">Forget Password?</a></div>
            </div>
            <div class="pb-2">
              <button type="submit" class="btn btn-dark w-100 font-weight-bold mt-2">
                Submit
              </button>
            </div>
          </form>
          <div class="sideline">OR</div>
          <div>
            <!-- <a href="/auth/facebook"> -->
            <a href="">
              <button type="submit" class="btn btn-primary w-100 font-weight-bold mt-2">
                <i class="fa fa-facebook" aria-hidden="true"></i> Login With Facebook
              </button>
            </a>
          </div>
          <div>
            <a href="">
              <button type="submit" class="btn btn-primary w-100 font-weight-bold mt-2">
                <i class="fas fa-google" aria-hidden="true"></i>
                Login With Google
              </button>
            </a>
          </div>
          <div class="pt-4 text-center">
            Get Members Benefit. <router-link to="/register">Sign Up</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.wrap {
  margin-top: 150px;
}
.form-style input {
  border: 0;
  height: 50px;
  border-radius: 0;
  border-bottom: 1px solid #ebebeb;
}
.form-style input:focus {
  border-bottom: 1px solid #007bff;
  box-shadow: none;
  outline: 0;
  background-color: #ebebeb;
}
.sideline {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgb(76, 72, 72);
}
button {
  height: 50px;
}
.sideline:before,
.sideline:after {
  content: "";
  border-top: 1px solid #ebebeb;
  margin: 0 20px 0 0;
  flex: 1 0 20px;
}
.sideline:after {
  margin: 0 0 0 20px;
}
</style>

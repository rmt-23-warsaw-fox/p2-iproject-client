<template>
  <div
    style="
      background-image: url('https://images.unsplash.com/photo-1622630998477-20aa696ecb05?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246');
      height: 100vh;
      width: 100vw;
      background-size: cover;
      background-repeat: no-repeat;
    "
  >
    <div class="row h-100">
      <div class="col-6"></div>
      <div class="col-6 d-flex align-items-center justify-content-center">
        <div class="card py-3 w-50 my-auto" style="background-color: #b9b5b5da">
          <form class="px-4">
            <h1 class="text-center font-monospace">LOGIN</h1>
            <div class="mb-3">
              <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" v-model="email" id="exampleDropdownFormEmail1" placeholder="email" />
            </div>
            <div class="mb-3">
              <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" v-model="password" id="exampleDropdownFormPassword1" placeholder="Password" />
            </div>
            <div class="mb-3"></div>
            <button type="submit" @click.prevent="this.login(this.email, this.password)" class="btn btn-warning">Sign in</button>
          </form>
          <div class="dropdown-divider"></div>
          <router-link to="/register" class="dropdown-item" href="#">Create Account? Sign up</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useCoinsStore } from '../stores/coins'
export default {
    name: "LoginPage",
    data(){
      return{
        email: "",
        password: ""
      }
    },
    methods: {
      ...mapActions(useCoinsStore, ['login'])
    }
};
</script>
<style></style>

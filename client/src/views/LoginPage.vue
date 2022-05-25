<script>
import { mapActions } from 'pinia'
import {useUserStore} from '../stores/user'

export default {
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    ...mapActions(useUserStore, ['login']),
    localLogin() {
      this.login(this.email, this.password)
    }
  }
}
</script>

<template>
  <div class="container-fluid container-center height-92-percent bg-light">
    <div class="card p-2 rounded-3 width-400">
      <div class="card-header bg-pink-primary rounded-top text-white text-center">
        <h5 class="font-500">Sign In</h5>
      </div>
      <div class="card-body bg-light rounded-bottom">
        <form v-on:submit.prevent="localLogin()" class="mb-2">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label font-500">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
              aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label font-500">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
          </div>

          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary font-500">Sign In</button>
          </div>
        </form>
        <small class="font-500 text-muted">Don't have an account? </small>
        <a href="" class="text-decoration-none"><small class="font-500">Sign Up</small></a>
      </div>
    </div>

  </div>
</template>
<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user'
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      username: null,
      email: null,
      password: null,
      genre: null,
      bio: null
    }
  },
  methods: {
    ...mapActions(useUserStore, ['register']),
    localRegister() {
      this.register(this.username, this.email, this.password, this.genre, this.bio)
      this.username = null
      this.email = null
      this.password = null
      this.genre = null
      this.bio = null
    }
  }
}
</script>

<template>
<Navbar></Navbar>
  <div class="container-fluid container-center height-92-percent bg-light">
    <div class="card p-2 rounded-3 width-400">
      <div class="card-header bg-pink-primary rounded-top text-white text-center">
        <h5 class="font-500">Form Register</h5>
      </div>
      <div class="card-body bg-light rounded-bottom">
        <form v-on:submit.prevent="localRegister()" class="mb-2">
          <div class="mb-3">
            <label class="form-label font-500">Username</label>
            <input v-model="username" type="text" class="form-control">
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label font-500">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
              aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label font-500">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="mb-3">
            <label class="form-label font-500">Gender</label>
            <select v-model="genre" class="form-select" aria-label="Default select example">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label font-500">Bio</label>
            <textarea v-model="bio" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary font-500">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
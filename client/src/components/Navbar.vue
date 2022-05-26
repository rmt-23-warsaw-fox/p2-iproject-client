<script>
import { RouterLink, RouterView } from 'vue-router'

export default{
  data () {
    return {
      token: localStorage.getItem('access_token')
    }
  },
  methods: {
    doLoggedOut(){
      localStorage.removeItem('access_token')
      localStorage.removeItem('senderId')
      localStorage.removeItem('receiverId')
      this.$router.push('/login')
    }
  },
  updated() {
    this.token = localStorage.getItem('access_token')
  }
}
</script>

<template>
  <!-- nav bar -->
  <div class="bg-pink-dark container-center-x" style="min-height: 7vh">
    <nav class="navbar navbar-expand-lg navbar-dark " style="width: 800px;">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand" href="#"><strong>PabloStory</strong></RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse container-right" id="navbarNav">
          <ul class="navbar-nav">
            <li v-if="!token" class="nav-item">
              <RouterLink to="/login" class="btn btn-outline-light font-500" aria-current="page" href="#">
                Sign In
              </RouterLink>
            </li>
            <li v-else class="nav-item">
              <a v-on:click.prevent="doLoggedOut()" class="btn btn-outline-light font-500" aria-current="page" href="#">
                Sign Out
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
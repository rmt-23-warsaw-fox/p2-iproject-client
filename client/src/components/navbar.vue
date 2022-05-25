<script>

export default {
  name: 'navbarVue',
  data() {
    return {
      token: ''
    }
  },
  methods: {
    isLogout() {
      this.$emit('trueLogoutEmit')
      localStorage.clear()
      this.token = ''
      this.$router.push('/login')
    }
  },
  created() {
    this.token = localStorage.getItem('access_token')
  },
  props: ['trueLoginprops']
}
</script>

<template>
  <div id="navbar">
    <div id="title">
      <router-link to="/" id="home-tag">Veducation</router-link>
    </div>
    <div>
    <button type="button" class="btn btn-outline-primary sign"
    @click.prevent="isLogout"
    >Logout</button>
    <router-link type="button" class="btn btn-outline-primary sign" 
    to='/login'>Sign In</router-link>
    <router-link type="button" class="btn btn-outline-primary sign" 
    to="/register">Sign Up</router-link>
    <router-link type="button" class="btn btn-outline-primary sign" 
    to='/login/listFavourite'
    v-if="trueLoginprops || token"
    >Paket saya</router-link>
    </div>
  </div>
</template>

<style>
#home-tag {
  text-decoration: none;
  font-size: 25px;
  color: black;
}

#title {
  margin-left: 30px;
  margin-top: 5px;
}
#navbar {
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 50px;
  background-color: rgb(209, 214, 238);
  top: 50%;
  
}
</style>
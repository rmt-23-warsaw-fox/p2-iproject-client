<script>
export default {
  data(){
    return {

    }
  },
  computed : {

  },
  methods : {
    goToLoginPage(){
      this.$router.push('/login')
    },
    logout(){
      localStorage.removeItem("access_token")
      this.$router.push('/login')
    }
  }
}
</script>
<template>
  <nav class="flex justify-between bg-purple-800 h-12 items-center text-white ">
    <div class="ml-4 text-xl ">ValoKuy</div>
    <div class="flex gap-4 mr-4">
      <button>Livechat</button>
      <button>My Matches</button>
      <button>Agents</button>
      <button
      @click.prevent="goToLoginPage"
      >Sign In</button>
      <button
      @click.prevent="logout"
      >Sign Out</button>
    </div>
  </nav>
</template>
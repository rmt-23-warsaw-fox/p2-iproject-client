<script>
export default {
  data(){
    return {

    }
  },
  computed : {

  },
  methods : {
    goToRegist(){
      this.$router.push('/login')
    }
  }
}
</script>
<template>
  <nav class="flex justify-between bg-purple-800 h-12 items-center text-white">
    <div class="ml-4 text-xl ">ValoKuy</div>
    <div class="flex gap-4 mr-4">
      <button>Livechat</button>
      <button>My Matches</button>
      <button>Agents</button>
      <button>Sign In</button>
      <button>Sign Out</button>
    </div>
  </nav>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

export default {
  name: "App",
  components: {
    RouterView,
    NavBar
}
}
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style>
body {
  background-color: #191A19;
  color: white
}
</style>

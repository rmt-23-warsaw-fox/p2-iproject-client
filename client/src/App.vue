<script>
import navbar from './components/navbar.vue'

export default {
  components: { navbar },
  name: 'appVue'
}
</script>

<template>
  <div id="app">
  <navbar/>
  <router-view/>
  </div>
</template>

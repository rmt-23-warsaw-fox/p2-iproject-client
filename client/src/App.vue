<template>
  <div class="bg-repeat min-h-screen bg-gradient-to-tl from-black to-zinc-900">
    <navbar v-if="this.signedin" />
    <RouterView />
  </div>
</template>
<script>
import { RouterView } from "vue-router"
import navbar from "@/views/navbar.vue"
import "@/assets/base.css"
import { usePoofStore } from "@/stores/counter"
import { mapActions, mapState, mapWritableState } from "pinia"

export default {
  components: { RouterView, navbar },
  computed: {
    ...mapWritableState(usePoofStore, ["signedin"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.signedin = true
    }
  },
}
</script>

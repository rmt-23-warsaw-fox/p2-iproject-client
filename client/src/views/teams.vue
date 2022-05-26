<script>
import { mapActions, mapState, mapWritableState } from "pinia"
import { usePoofStore } from "../stores/counter"

export default {
  computed: {
    ...mapState(usePoofStore, ["teams"]),
  },
  methods: {
    ...mapActions(usePoofStore, ["getTeams"]),
  },
  created() {
    this.getTeams(this.$route.params.page)
  },
}
</script>

<template>
  <pre class="text-white">
 {{ teams }}
  </pre>
</template>

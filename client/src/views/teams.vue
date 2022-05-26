<script>
import { mapActions, mapState } from "pinia"
import { usePoofStore } from "../stores/counter"

export default {
  computed: {
    ...mapState(usePoofStore, ["teams"]),
  },
}
</script>

<template>
  <pre class="text-white">
 {{ teams }}
  </pre>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "./stores/counter";
import { RouterLink, RouterView } from "vue-router";
export default {
  computed: {
    ...mapWritableState(useCounterStore, ["products"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getProducts", "getOrder"]),
  },
  created() {
    this.getProducts();
    this.getOrder();
  },
};
</script>

<template>
  <RouterView />
</template>

<style></style>

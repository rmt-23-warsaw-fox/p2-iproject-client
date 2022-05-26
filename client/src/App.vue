<script>
import { mapWritableState } from "pinia";
import { useCounterStore } from "./stores/counter";

export default {

  computed: {
    ...mapWritableState(useCounterStore, ["isLogin"]),
    ...mapWritableState(useCounterStore, ["user"])
  },
  created() {
    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("foundName")
    ) {
      this.user = localStorage.getItem("foundName")
    } else {
      this.isLogin = false;
    }
  },

};
</script>

<template>
  <RouterView />
</template>

<style>
</style>

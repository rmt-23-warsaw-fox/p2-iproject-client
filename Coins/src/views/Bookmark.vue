<template>
  <!-- navbar -->
  <Navbar />
  <!-- navbar -->

  <!-- mycoin -->
  <div class="container d-flex flex-wrap align-items-center my-5 h-100">
    <Card v-for="data in this.myCoins" :key="id"  :data="data" />
  </div>
</template>
<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCoinsStore } from "../stores/coins";
import Navbar from "../components/Navbar.vue";
import Card from "../components/CardCoins.vue"
export default {
  name: "bookmark",
  components: {
    Navbar,
    Card

  },

    computed: {
        ...mapState(useCoinsStore, ['myCoins'])
    },
  methods: {
      ...mapActions(useCoinsStore, ['getMyCoins'])
  },

  created(){
      this.getMyCoins()
  }
};
</script>
<style></style>

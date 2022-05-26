<script>
import BannerComp from "../components/BannerComp.vue";
import CardSearchComp from "../components/CardSearchComp.vue";
import { useAccomodationStore } from "../stores/accomodation";
import { mapState } from "pinia";
export default {
  name: "SearchView",
  components: {
    BannerComp,
    CardSearchComp,
  },
  computed: {
    ...mapState(useAccomodationStore, ['accomodations']),
    lengthAccomodation() {
      return this.accomodations.length;
    }
  },
  created() {
    
  }
};
</script>

<template>
  <div class="main-container">
    <BannerComp>
        <h1 class="text-light">Search Result</h1>
    </BannerComp>
    <div class="container mt-4 w-50">
      <h2 class="text-center mt-5 fw-bold" v-if="!lengthAccomodation">No search result of accomodation</h2>
      <CardSearchComp 
        v-for="accomodation in accomodations"
        :accomodation="accomodation"
        :key="accomodation.id"
      />
    </div>
  </div>
</template>
<style>
.main-container {
  min-height: 80vh;
}
</style>

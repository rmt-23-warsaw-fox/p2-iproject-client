<script>
import BannerComp from "../components/BannerComp.vue";
import CardSearchComp from "../components/CardSearchComp.vue";

export default {
  name: "SearchView",
  components: {
    BannerComp,
    CardSearchComp,
  },
};
</script>

<template>
  <div>
    <BannerComp>
        <h1 class="text-light">Search Result</h1>
    </BannerComp>
    
    <div class="container mt-4 w-50">
      <CardSearchComp />
      <CardSearchComp />
      <CardSearchComp />
      <CardSearchComp />
    </div>
  </div>
</template>

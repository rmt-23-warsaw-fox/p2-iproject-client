<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Detail Page",
  methods: {
    ...mapActions(useCounterStore, ["fetchDetail"]),
  },
  computed: {
    ...mapState(useCounterStore, ["coin"]),
  },
  created() {
    this.fetchDetail(this.$route.params.id)
  }
};
</script>

<template>
  <div class="container mt-4">
    <div class="d-flex">
      <img :src="coin.image.large" alt="" style="width:300px;height:300px" class="flex-shrink-0">

      <div class="ml-3 d-flex flex-column">
        <h2>{{coin.name}}</h2>
        <p>{{coin.description.en.slice(0, coin.description.en.indexOf("."))}}</p>
        <p>Rank: {{coin.market_cap_rank}}</p>
        <p>Current Price: $ {{coin.market_data.current_price.usd.toLocaleString("en-EN")}}</p>
        <p>Market Cap: $ {{coin.market_data.market_cap.usd.toLocaleString("en-EN")}}</p>
      </div>
    </div>
  </div>
</template>

<style>
h2 {
  font-size: 3em;
  font-weight: 700
}
p {
  font-weight: 200;
}
</style>
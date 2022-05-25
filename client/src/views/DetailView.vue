<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Detail Page",
  methods: {
    ...mapActions(useCounterStore, ["fetchDetail", "fetchHistory"]),
  },
  computed: {
    ...mapState(useCounterStore, ["coin", "history"]),
  },
  created() {
    this.fetchDetail(this.$route.params.id)
    this.fetchHistory(this.$route.params.id, 1)
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

  <div class="container mt-5">
    <line-chart :data="history" :points="false" :min="null" height="80vh" :colors="['#2ed14e', '#666']"></line-chart>
  </div>
  <div class="container d-flex ">
    <button class="btn btn-success m-1 form-control" @click.prevent="fetchHistory(this.$route.params.id, 1)">24 Hours</button>
    <button class="btn btn-success m-1 form-control" @click.prevent="fetchHistory(this.$route.params.id, 7)">1 Week</button>
    <button class="btn btn-success m-1 form-control" @click.prevent="fetchHistory(this.$route.params.id, 14)">2 Weeks</button>
    <button class="btn btn-success m-1 form-control" @click.prevent="fetchHistory(this.$route.params.id, 30)">1 Month</button>
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
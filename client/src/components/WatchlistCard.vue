<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import axios from "axios";
export default {
  props: ["coinName"],
  methods: {
    ...mapActions(useCounterStore, ["deleteWatchlist"]),

    async coinDetails(coin) {
      try {
        let response = await axios({
          method: "get",
          url: `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
        });
        this.coinData = response.data;
        this.loaded = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  data() {
    return {
      coinData: {},
      loaded: false,
    };
  },
  created() {
    this.coinDetails(this.coinName);
  },
};
</script>

<template>
  <div v-if="loaded === true" class="container mb-3">
    <div class="card bg-dark">
      <div
        class="d-flex flex-row align-items-center m-2 ml-3 justify-content-center"
      >
        <img :src="coinData.image.small" style="height: 30px; width: 30px" />
        <h5 class="p-2 m-0" style="color: #2ed14e">{{ coinData.name }}</h5>
      </div>
      <hr class="m-0" />
      <div class="card-body pt-1">
        <div class="d-flex flex-row justify-content-between">
          <div>
            <p class="mb-0">Ticker:</p>
            <p class="h5 text-white">{{ coinData.symbol }}</p>
          </div>
          <div>
            <p class="mb-0">%24h Change:</p>
            <p
              v-if="coinData.market_data.price_change_percentage_24h > 0"
              class="h5"
              style="color: green"
            >
              {{ coinData.market_data.price_change_percentage_24h }} %
            </p>
            <p
              v-else-if="coinData.market_data.price_change_percentage_24h == 0"
              class="h5"
              style="color: white"
            >
              {{ coinData.market_data.price_change_percentage_24h }} %
            </p>
            <p v-else class="h5" style="color: red">
              {{ coinData.market_data.price_change_percentage_24h }} %
            </p>
          </div>
          <div>
            <p class="mb-0">Market Capitalization:</p>
            <p class="h5 text-white">
              $
              {{ coinData.market_data.market_cap.usd.toLocaleString("en-EN") }}
            </p>
          </div>
        </div>
        <a href="#" class="btn btn-danger" @click.prevent="deleteWatchlist(coinName)">Delete from watchlist</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Compare Page",
  data() {
    return {
      loaded: false,
    };
  },
  methods: {
    ...mapActions(useCounterStore, [
      "logout",
      "fetchCompare",
      "fetchCompareHistory",
    ]),
  },
  computed: {
    ...mapState(useCounterStore, ["loggedIn", "compareInfo", "compareData"]),
    comparison() {
      return {
        coin1: "bitcoin",
        coin2: "ethereum",
        date: 1,
      };
    },
  },
  created() {
    this.fetchCompare(this.comparison);
    this.fetchCompareHistory(this.comparison);
    this.loaded = true;
  },
};
</script>

<template>
  <nav
    class="container d-flex justify-content-between align-items-center mt-3 mb-3"
  >
    <router-link
      to="/"
      class="h3 mb-0"
      style="text-decoration: none; color: #2ed14e"
      >CryptoSphere</router-link
    >
    <div>
      <div
        v-if="loggedIn"
        class="d-flex flex-row justify-content-center align-items-center"
      >
        <router-link
          to="/watchlist"
          class="mb-0 mr-3 h5"
          style="text-decoration: none; color: gray"
          >Watchlist</router-link
        >
        <a @click.prevent="logout" class="btn btn-dark pt-1 pb-1 pl-3 pr-3"
          >Logout</a
        >
      </div>
      <router-link v-else to="/login" class="btn btn-dark pt-1 pb-1 pl-3 pr-3"
        >Login / Signup</router-link
      >
    </div>
  </nav>
  <div class="container" v-if="loaded === true">
    <h2>Compare</h2>
    <form
      @submit.prevent="
        fetchCompare(comparison);
        fetchCompareHistory(comparison);
      "
    >
      <select id="coin2" v-model="comparison.coin1">
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="tether">Tether</option>
        <option value="usd-coin">USD Coin</option>
        <option value="bnb">BNB</option>
        <option value="xrp">XRP</option>
        <option value="dogecoin">Dogecoin</option>
      </select>
      <select id="coin1" v-model="comparison.coin2">
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="tether">Tether</option>
        <option value="usd-coin">USD Coin</option>
        <option value="bnb">BNB</option>
        <option value="xrp">XRP</option>
        <option value="dogecoin">Dogecoin</option>
      </select>
      <input type="submit" />
    </form>
    <div class="d-flex flex-row justify-content-between">
      <div>
        <h3 class="text-success">{{ compareInfo.coin1.name }}</h3>
        <h4>Market Cap Rank: {{ compareInfo.coin1.market_cap_rank }}</h4>
        <h4>Current Price: $ {{ compareInfo.coin1.market_data.current_price.usd.toLocaleString("en-EN") }}</h4>
        <h4>Market Cap: $ {{ compareInfo.coin1.market_data.market_cap.usd.toLocaleString("en-EN") }}</h4>
      </div>
      <div class="align-self-end">
        <h3 class="text-warning">{{ compareInfo.coin2.name }}</h3>
        <h4>Market Cap Rank: {{ compareInfo.coin2.market_cap_rank }}</h4>
        <h4>Current Price: $ {{ compareInfo.coin2.market_data.current_price.usd.toLocaleString("en-EN") }}</h4>
        <h4>Market Cap: $ {{ compareInfo.coin2.market_data.market_cap.usd.toLocaleString("en-EN") }}</h4>
      </div>
    </div>
    <line-chart
      :data="compareData"
      :library="{ grid: 'white' }"
      :points="false"
      :min="null"
      height="30vh"
      :colors="['green', 'yellow']"
    ></line-chart>
  </div>
</template>

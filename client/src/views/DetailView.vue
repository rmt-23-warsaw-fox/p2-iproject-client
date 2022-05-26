<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Detail Page",
  data() {
    return {
      loaded: false
    }
  },
  methods: {
    ...mapActions(useCounterStore, [
      "fetchDetail",
      "fetchHistory",
      "addWatchlist",
    ]),
  },
  computed: {
    ...mapState(useCounterStore, ["coin", "history", "loggedIn"]),
    description() {
      return this.coin.description.en.split(". ")[0];
    },
  },
  created() {
    this.fetchDetail(this.$route.params.id);
    this.fetchHistory(this.$route.params.id, 1);
    this.loaded = true
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
  <div v-if="loaded == true" class="container mt-4">
    <div class="d-flex">
      <img
        :src="coin.image.large"
        alt=""
        style="width: 300px; height: 300px"
        class="flex-shrink-0"
      />

      <div class="ml-5 d-flex flex-column justify-content-center">
        <h2>{{ coin.name }}</h2>
        <p><span v-html="description"></span>.</p>
        <p>Rank: {{ coin.market_cap_rank }}</p>
        <p>
          Current Price: $
          {{ coin.market_data.current_price.usd.toLocaleString("en-EN") }}
        </p>
        <p>
          Market Cap: $
          {{ coin.market_data.market_cap.usd.toLocaleString("en-EN") }}
        </p>
        <button
          v-if="loggedIn"
          class="btn btn-success"
          @click.prevent="addWatchlist(coin.id)"
        >
          Add to Watchlist
        </button>
      </div>
    </div>
  </div>

  <div v-if="loaded == true" class="container mt-5">
    <line-chart
      :data="history"
      :library="{ grid: 'white' }"
      :points="false"
      :min="null"
      height="80vh"
      :colors="['#2ed14e', '#666']"
    ></line-chart>
  </div>
  <div class="container d-flex">
    <button
      class="btn btn-success m-1 form-control"
      @click.prevent="fetchHistory(this.$route.params.id, 1)"
    >
      24 Hours
    </button>
    <button
      class="btn btn-success m-1 form-control"
      @click.prevent="fetchHistory(this.$route.params.id, 7)"
    >
      1 Week
    </button>
    <button
      class="btn btn-success m-1 form-control"
      @click.prevent="fetchHistory(this.$route.params.id, 14)"
    >
      2 Weeks
    </button>
    <button
      class="btn btn-success m-1 form-control"
      @click.prevent="fetchHistory(this.$route.params.id, 30)"
    >
      1 Month
    </button>
  </div>
</template>

<style>
h2 {
  font-size: 3em;
  font-weight: 700;
}
p {
  font-weight: 200;
}
</style>

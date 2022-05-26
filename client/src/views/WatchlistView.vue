<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import WatchlistCard from "../components/WatchlistCard.vue";
export default {
  name: "Watchlist Page",
  methods: {
    ...mapActions(useCounterStore, ["logout", "getWatchlist"]),
    detailView(id) {
      this.$router.push(`/coins/${id}`);
    },
  },
  computed: {
    ...mapState(useCounterStore, ["loggedIn", "watchlist"]),
  },
  components: { WatchlistCard },
  created() {
    this.getWatchlist();
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
  <div class="container">
    <h2>Watchlist</h2>
  </div>
  <div>
    <WatchlistCard
    v-for="coin in watchlist"
    :key="coin.id"
    :coinName="coin.coin"
  />
  </div>
</template>

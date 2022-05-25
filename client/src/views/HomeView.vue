<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Home Page",
  methods: {
    ...mapActions(useCounterStore, ["fetchMarkets"]),
    fetchMarketsChild(id) {
      this.fetchMarkets(id);
    },
    detailView(id) {
      this.$router.push(`/coins/${id}`);
    },
  },
  computed: {
    ...mapState(useCounterStore, ["markets"]),
  },
  created() {
    this.fetchMarkets();
  },
};
</script>

<template>
  <div class="">
    <div
      id="MainSection"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <h1>CryptoSphere</h1>
      <p>Your one stop solution for tracking cryptocurrency</p>
    </div>
  </div>

  <div class="container mt-4">
    <table class="table table-borderless">
      <thead>
        <tr>
          <th class="h4">#</th>
          <th>Price</th>
          <th>24h High / Low</th>
          <th>24h % Change</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="coin in markets"
          @click.prevent="detailView(coin.id)"
          style="cursor: pointer"
        >
          <td>
            <div class="d-flex">
              <img :src="coin.image" style="height: 50px" />
              <div class="d-flex flex-column ml-3">
                <p class="mb-1">{{ coin.name }}</p>
                <p class="ticker">{{ coin.symbol.toUpperCase() }}</p>
              </div>
            </div>
          </td>
          <td>$ {{ coin.current_price.toLocaleString("en-EN") }}</td>
          <td>
            <p class="mb-1 highlow">{{ coin.high_24h.toLocaleString("en-EN") }} / {{coin.low_24h.toLocaleString("en-EN") }}</p>
          </td>
          <td v-if="coin.price_change_percentage_24h > 0" class="text-success">
            {{ coin.price_change_percentage_24h.toFixed(2) }}%
          </td>
          <td
            v-else-if="coin.price_change_percentage_24h == 0"
            class="text-success"
          >
            {{ coin.price_change_percentage_24h.toFixed(2) }}%
          </td>
          <td v-else class="text-danger">
            {{ coin.price_change_percentage_24h.toFixed(2) }}%
          </td>
          <td>$ {{ coin.market_cap.toLocaleString("en-EN") }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <nav>
    <ul class="pagination justify-content-center">
      <li class="page-item" v-for="n in 10">
        <a class="page-link" href="#" @click.prevent="fetchMarketsChild(n)">{{
          n
        }}</a>
      </li>
    </ul>
  </nav>
</template>

<style>
#MainSection {
  height: 50vh;
  background-image: url("../assets/istockphoto-1204128037-170667a.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  font-weight: 800;
  font-size: 3em;
  font-family: "Arial", Helvetica, sans-serif;
  margin-bottom: 0.5em;
}
p {
  color: rgb(202, 202, 202);
  font-weight: 600;
}
th {
  background-color: #2ed14e;
}
table th:first-child {
  border-radius: 10px 0 0 10px;
}
table th:last-child {
  border-radius: 0 10px 10px 0;
}
tr td {
  color: white;
}
.ticker {
  font-size: 0.8em;
  color: gray;
}
.pagination .page-link {
  background: #575757;
  border: none;
  color: white;
}
.highlow {
  font-size: 0.9em;
}
</style>

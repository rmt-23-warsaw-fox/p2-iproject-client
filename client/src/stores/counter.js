import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    url: "http://localhost:3000/",
    markets: [],
    coin: {}
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async fetchMarkets(id) {
      try {
        let response = await axios({
          method: "get",
          url: this.url + `markets?page=${id}`,
        });

        this.markets = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchDetail(id) {
      try {
        let response = await axios( {
          method: "get",
          url: this.url + `coin?coin=${id}`
        })
        this.coin = response.data
      } catch (error) {
        console.log(error)
      }
    }
  },
});

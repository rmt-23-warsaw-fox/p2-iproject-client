import { defineStore } from "pinia";
import axios from "axios";
import router from "../router/index";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    url: "http://localhost:3000/",
    markets: [],
    coin: {},
    history: [],
    loggedIn: true,
    watchlist: [],
    news: []
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async fetchNews() {
      try {
        let response = await axios({
          method: "get",
          url: this.url + `news`,
        });
        console.log(response)
        this.news = response.data.articles;
      } catch (error) {
        console.log(error);
      }
    },
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
        let response = await axios({
          method: "get",
          url: this.url + `coin?coin=${id}`,
        });
        this.coin = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchHistory(id, date) {
      try {
        let response = await axios({
          method: "get",
          url: this.url + `coin/history?coin=${id}&dates=${date}`,
        });
        this.history = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async register(obj) {
      try {
        let response = await axios({
          method: "post",
          url: this.url + "register",
          data: {
            username: obj.username,
            email: obj.email,
            password: obj.password,
          },
        });
        router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
    async login(obj) {
      try {
        let response = await axios({
          method: "post",
          url: this.url + "login",
          data: {
            email: obj.email,
            password: obj.password,
          },
        });
        localStorage.setItem("access_token", response.data.access_token);
        this.loggedIn = true;
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      this.loggedIn = false;
      localStorage.clear();

      router.push("/");
    },
    async getWatchlist() {
      try {
        let response = await axios({
          method: "get",
          url: this.url + `watchlist`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.watchlist = response.data.Watchlists;
      } catch (error) {
        console.log(error);
      }
    },
    async addWatchlist(coin) {
      try {
        let response = await axios({
          method: "post",
          url: this.url + `watchlist`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            coin
          }
        });
        router.push("/watchlist")
      } catch (error) {
        console.log(error)
      }
    },
    async deleteWatchlist(coin) {
      try {
        let response = await axios({
          method: "delete",
          url: this.url + `watchlist`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            coin
          }
        });
        this.getWatchlist()
      } catch (error) {
        console.log(error)
      }
    }
  },
});

import { defineStore } from "pinia";
import axios from "axios";
import router from "../router/index";
import Swal from "sweetalert2";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    url: "https://cryptosphereserver.herokuapp.com/",
    markets: [],
    coin: {},
    history: [],
    loggedIn: true,
    watchlist: [],
    news: [],
    compareInfo: {},
    compareData: []
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
        this.news = response.data.articles;
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error.response,
          icon: "error",
          confirmButtonText: "Ok",
        });
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
        Swal.fire({
          title: "Error!",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
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
        Swal.fire({
          title: "Error!",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    },
    async fetchCompare(obj) {
      try {
        let response = await axios({
          method: "get",
          url: this.url + `compare?coin1=${obj.coin1}&coin2=${obj.coin2}&dates=${obj.date}`,
        });
        this.compareInfo = response.data
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error.response,
          icon: "error",
          confirmButtonText: "Ok",
        });
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
        Swal.fire({
          title: "Error!",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    },
    async fetchCompareHistory(obj) {
      try {
        let response = await axios({
          method: "get",
          url: this.url + `compare/history?coin1=${obj.coin1}&coin2=${obj.coin2}&dates=${obj.date}`,
        });
        this.compareData = response.data
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error.response,
          icon: "error",
          confirmButtonText: "Ok",
        });
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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Register Success",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/login");
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    },
    async logout() {
      this.loggedIn = false;
      localStorage.clear();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logout Success",
        showConfirmButton: false,
        timer: 1500,
      });
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
        Swal.fire({
          title: "Error!",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
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
            coin,
          },
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Added to Watchlist",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/watchlist");
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
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
            coin,
          },
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Deleted from Watchlist",
          showConfirmButton: false,
          timer: 1500,
        });
        this.getWatchlist();
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    },
  },
});

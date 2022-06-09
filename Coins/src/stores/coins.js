import { defineStore } from "pinia";
import axios from "axios";
import swal from "sweetalert2";
import router from "../router/index.js";

export const useCoinsStore = defineStore({
  id: "coin",
  state: () => ({
    coins: [],
    dataPage: [],
    newsData: [],
    myCoins: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    //login
    async login(email, password) {
      try {
        const { data } = await axios({
          method: "POST",
          url: "https://iprojecttitamulyana.herokuapp.com/users/login",
          data: {
            email: email,
            password: password,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        swal.fire({
          icon: "success",
          title: `success login`,
          showConfirmButton: true,
          timer: 1500,
        });
        router.push("/");
      } catch (err) {
        swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
          showConfirmButton: true,
          timer: 1500,
        });
      }
    },

    logout() {
      localStorage.clear();
      router.push("/login");
    },

    async active(token) {
      try {
        console.log(token);
        const { data } = await axios({
          method: "PUT",
          url: "https://iprojecttitamulyana.herokuapp.com/users/login?token=" + token,
        });
        console.log(data);
        swal.fire({
          icon: "success",
          title: `success activate`,
          showConfirmButton: true,
          timer: 4000,
        });
        router.push("/login");
      } catch (err) {
        swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
          showConfirmButton: true,
          timer: 1500,
        });
      }
    },

    //register
    async register(username, email, password, address, phone) {
      try {
        const { data } = await axios({
          method: "POST",
          url: "https://iprojecttitamulyana.herokuapp.com/users/register",
          data: {
            username: username,
            email: email,
            password: password,
            address: address,
            phone: phone,
          },
        });
        swal.fire({
          icon: "success",
          title: `create account success, check your email for activate`,
          showConfirmButton: true,
          timer: 1500,
        });
        router.push("/login");
      } catch (err) {
        swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
          showConfirmButton: true,
          timer: 1500,
        });
      }
    },

    //get coins
    async getCoins() {
      try {
        const { data } = await axios({
          method: "GET",
          url: "https://iprojecttitamulyana.herokuapp.com/coins",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        this.coins = data;
        this.pageControl();
      } catch (err) {
        swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
          showConfirmButton: true,
          timer: 1500,
        });
      }
    },

    //pageControl
    pageControl(page = 0) {
      let result = this.coins.slice((0 + page) * 10, (0 + page + 1) * 10);
      return (this.dataPage = result);
    },

    //search
    search(name) {
      let result = this.coins.filter((el) => el.name.includes(name));
      return (this.dataPage = result);
    },

    //bookmark
    async bookmark(input) {
      try {
        const { data } = await axios({
          method: "POST",
          url: "https://iprojecttitamulyana.herokuapp.com/coins/add",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            name: input.name,
            code: input.code,
            price: input.price,
            percentace: input.percentace,
            image: input.image,
          },
        });
        this.getMyCoins();
        swal.fire({
          icon: "success",
          title: `success add ${input.name} coins to MyCoins`,
          showConfirmButton: true,
          timer: 2500,
        });
      } catch (err) {
        console.log(err);
        swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
          showConfirmButton: true,
          timer: 1500,
        });
      }
    },

    async news() {
      try {
        const { data } = await axios({
          method: "GET",
          url: "https://iprojecttitamulyana.herokuapp.com/coins/news",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        let random = Math.floor(Math.random() * 10);
        let result = data.slice((0 + random) * 3, (0 + random + 1) * 3);
        this.newsData = result;
      } catch (err) {
        swal.fire({
          icon: "error",
          title: `no news`,
          showConfirmButton: true,
          timer: 1500,
        });
      }
    },

    //mycoins
    async getMyCoins() {
      try {
        const { data } = await axios({
          method: "GET",
          url: "https://iprojecttitamulyana.herokuapp.com/coins/mycoins",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.myCoins = data;
        this.getMyCoins()
      } catch (err) {
        swal.fire({
          icon: "error",
          title: `no coins`,
          showConfirmButton: true,
          timer: 1500,
        });
      }
    },

    async delMyCoins(id) {
      try {
        const { data } = await axios({
          method: "DELETE",
          url: "https://iprojecttitamulyana.herokuapp.com/coins/mycoins",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            bookmarkId: id,
          },
        });

        this.getMyCoins();
        swal.fire({
          icon: "success",
          title: `success delete coins`,
          showConfirmButton: true,
          timer: 1500,
        });
      } catch (err) {
        swal.fire({
          icon: "error",
          title: `no coins`,
          showConfirmButton: true,
          timer: 1500,
        });
      }
    },

    async putMyCoins(id, coin, price) {
      try {
        const { data } = await axios({
          method: "PUT",
          url: "https://iprojecttitamulyana.herokuapp.com/coins/mycoins",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            bookmarkId: id,
            mycoins: coin,
            price: price,
          },
        });

        this.getMyCoins();
        swal.fire({
          icon: "success",
          title: `success add amount`,
          showConfirmButton: true,
          timer: 1500,
        });
      } catch (err) {
        swal.fire({
          icon: "error",
          title: `no coins`,
          showConfirmButton: true,
          timer: 1500,
        });
      }
    },
  },
});

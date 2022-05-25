import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:1000";

export const useAllStore = defineStore({
  id: "allStore",
  state: () => ({
    isLogin: false,
    data: {
      username: "",
      email: "",
      password: "",
    },
    seatNumber: "",
    allMovies: [],
    oneMovie: {},
    row: [],
  }),
  actions: {
    async home() {
      try {
        const allMovie = await axios.get(`${baseUrl}/movies`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.$state.allMovies = allMovie.data.allMovie;
        console.log(this.$state.allMovies);
      } catch (error) {
        console.log(error);
      }
    },
    async detail(id) {
      try {
        console.log(id, "ID");
        const oneMovie = await axios.get(`${baseUrl}/movies/detail/${id}`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.$state.oneMovie = oneMovie.data.movies;
        console.log(this.$state.oneMovie);
      } catch (error) {
        console.log(error);
      }
    },
    async register(dataRegister) {
      try {
        const doRegister = await axios.post(
          `${baseUrl}/users/register/customer`,
          {
            username: dataRegister.username,
            email: dataRegister.email,
            password: dataRegister.password,
          }
        );
        if (doRegister) {
          this.router.push("/login");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async login(dataLogin) {
      try {
        const doLogin = await axios.post(`${baseUrl}/users/login`, {
          username: dataLogin.username,
          email: dataLogin.email,
          password: dataLogin.password,
        });
        const access_token = doLogin.data.access_token;
        localStorage.setItem("access_token", access_token);
        this.$state.isLogin = true;
        if (doLogin) {
          this.router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      try {
        this.$state.isLogin = false;
        localStorage.clear();
      } catch (error) {
        console.log(error);
      }
    },
    async booking(id) {
      try {
        const bookIt = await axios.post(
          `${baseUrl}/seats/booking/${id}`,
          { seatNumber: this.$state.seatNumber },
          { headers: { access_token: localStorage.getItem("access_token") } }
        );
        if (bookIt) {
          this.router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async allRows() {
      try {
        const allRows = await axios.get(`${baseUrl}/seats/rows`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.$state.row = allRows.data.allRow;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

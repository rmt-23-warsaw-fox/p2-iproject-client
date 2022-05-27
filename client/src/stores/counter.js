import { defineStore } from "pinia";
import axios from "axios";
import swal from "sweetalert";

export const useNontonStore = defineStore("nonton", {
  state: () => ({
    baseUrl: "https://i-project-server.herokuapp.com",
    // baseUrl: "http://localhost:3001",
    user: {},
    dataMovies: [],
    dataDetail: {},
    toPostReview: {},
    isLoggedIn: false,
    qrCode: "",
  }),
  getters: {},
  actions: {
    async login() {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/login",
          data: {
            email: this.user.email,
            password: this.user.password,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLoggedIn = true;
        delete this.user.email;
        delete this.user.password;
      } catch (error) {
        swal({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      }
    },

    logout() {
      localStorage.clear();
      this.isLoggedIn = false;
    },

    async register() {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/register",
          data: {
            fullname: this.user.fullname,
            email: this.user.email,
            password: this.user.password,
          },
        });
        delete this.user.fullname;
        delete this.user.email;
        delete this.user.password;
        swal({
          title: "Register Success!",
          text: "Please login",
          icon: "success",
        });
        this.router.push("/login");
        console.log(data);
      } catch (error) {
        swal({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      }
    },

    async fetchTrending(pages) {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + `/movies/movie-trending?pages=${pages}`,
        });
        this.dataMovies = data.results;
      } catch (error) {
        console.log(error);
      }
    },

    async generateQR(MovieId) {
      try {
        const { data } = await axios({
          method: "get",
          url: `https://api.happi.dev/v1/qrcode?data=http://localhost:3000/movie-detail/${MovieId}&width=300&dots=000000&bg=FFFFFF&apikey=214863U44LabmbxDJcynHBF5VNV6Q57JCxcmqe8NzVzcYXMSZBiP1WUx`,
        });
        this.qrCode = data.qrcode;
      } catch (error) {
        console.log(error);
      }
    },

    async movieDetail(MovieId) {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + `/movies/movie-detail/${MovieId}`,
        });
        this.dataDetail = data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async postReview(MovieId) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + `/reviews/add/${MovieId}`,
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            review: this.toPostReview.review,
          },
        });
        console.log(data);
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
});

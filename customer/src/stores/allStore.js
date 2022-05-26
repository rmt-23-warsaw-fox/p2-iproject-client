import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const baseUrl = "https://watchthecinema.herokuapp.com";
const tmdbUrl = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const api_key = "9b0b4216296cf8879ace43db3e62f6e9";

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
    booked: [],
    currentPage: 1,
    totalPages: 1,
  }),
  actions: {
    async home(page) {
      try {
        let currentPage = "";
        if (page > 0) {
          this.$state.currentPage = page;
          currentPage += `&page=${page}`;
        }
        const allMovie = await axios.get(
          `${tmdbUrl}/movie/now_playing?api_key=${api_key}${currentPage}`
        );
        this.$state.totalPages = allMovie.data.total_pages;
        this.$state.allMovies = allMovie.data.results;
        this.$state.allMovies.forEach((movie) => {
          movie.backdrop_path = `${imgUrl}/${movie.backdrop_path}`;
          movie.poster_path = `${imgUrl}/${movie.poster_path}`;
          if (movie.vote_average >= 7.5) {
            movie.ticketPrice = 85000;
          } else if (movie.vote_average >= 7) {
            movie.ticketPrice = 75000;
          } else if (movie.vote_average >= 6) {
            movie.ticketPrice = 60000;
          } else {
            movie.ticketPrice = 50000;
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    async detail(MovieId) {
      try {
        const oneMovie = await axios.get(
          `${tmdbUrl}/movie/${MovieId}?api_key=${api_key}`
        );
        this.$state.oneMovie = oneMovie.data;
        this.$state.oneMovie.backdrop_path = `${imgUrl}/${this.$state.oneMovie.backdrop_path}`;
        this.$state.oneMovie.poster_path = `${imgUrl}/${this.$state.oneMovie.poster_path}`;
        if (this.$state.oneMovie.vote_average >= 7.5) {
          this.$state.oneMovie.ticketPrice = 85000;
        } else if (this.$state.oneMovie.vote_average >= 7) {
          this.$state.oneMovie.ticketPrice = 75000;
        } else if (this.$state.oneMovie.vote_average >= 6) {
          this.$state.oneMovie.ticketPrice = 60000;
        } else {
          this.$state.oneMovie.ticketPrice = 50000;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async register(dataRegister) {
      try {
        const doRegister = await axios.post(
          `${baseUrl}/users/register/customers`,
          {
            username: dataRegister.username,
            email: dataRegister.email,
            password: dataRegister.password,
          }
        );
        if (doRegister) {
          this.router.push("/login");
          Toast.fire({
            icon: "success",
            title: "User registered!",
          });
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops, something went wrong!",
        });
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
          Swal.fire({
            icon: "success",
            title: "Welcome!",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops, something went wrong!",
        });
        console.log(error);
      }
    },
    async signInGoogle(tokenGoogle) {
      try {
        const googleLogin = await axios.post(`${baseUrl}/users/loginGoogle`, {
          token: tokenGoogle,
        });
        const access_token = googleLogin.data.access_token;
        localStorage.setItem("access_token", access_token);
        this.$state.isLogin = true;
        Swal.fire({
          icon: "success",
          title: "Welcome!",
        });
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
    async booking() {
      try {
        const bookIt = await axios.post(
          `${baseUrl}/seats/booking/`,
          {
            seatNumber: this.$state.seatNumber,
            movie: this.$state.oneMovie,
          },
          { headers: { access_token: localStorage.getItem("access_token") } }
        );
        console.log(bookIt.data.payment, "PAYMENT");
        console.log(bookIt.data["dummy account"], "DUMMY EMAIL");
        if (bookIt) {
          this.router.push("/");
          Toast.fire({
            icon: "success",
            title: "Booking success!",
          });
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "Seats is unavailable",
        });
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
    async checkTicket() {
      try {
        const allTicket = await axios.get(`${baseUrl}/seats/booking`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.$state.booked = allTicket.data.booked;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

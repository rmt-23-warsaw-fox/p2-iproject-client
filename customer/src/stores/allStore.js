import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:1000";
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
  }),
  actions: {
    // async home() {
    //   try {
    //     const allMovie = await axios.get(`${baseUrl}/movies`, {
    //       headers: { access_token: localStorage.getItem("access_token") },
    //     });
    //     this.$state.allMovies = allMovie.data.allMovie;
    //     console.log(this.$state.allMovies);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    async home() {
      try {
        const allMovie = await axios.get(
          `${tmdbUrl}/movie/now_playing?api_key=${api_key}`
        );
        this.$state.allMovies = allMovie.data.results;
        this.$state.allMovies.forEach((movie) => {
          movie.backdrop_path = `${imgUrl}/${movie.backdrop_path}`;
          movie.poster_path = `${imgUrl}/${movie.poster_path}`;
          if (movie.vote_average >= 7.5) {
            // console.log(movie.title, "WOW");
            movie.ticketPrice = 85000;
          } else if (movie.vote_average >= 7) {
            movie.ticketPrice = 75000;
            // console.log(movie.title, "Good");
          } else if (movie.vote_average >= 6) {
            movie.ticketPrice = 60000;
            // console.log(movie.title, "OK");
          } else {
            movie.ticketPrice = 50000;
            // console.log(movie.title, "Not Bad");
          }
        });
        // console.log(this.$state.allMovies, "TEST");
      } catch (error) {
        console.log(error);
      }
    },
    async detail(MovieId) {
      try {
        // console.log(id, "ID");
        // const oneMovie = await axios.get(`${baseUrl}/movies/detail/${id}`, {
        //   headers: { access_token: localStorage.getItem("access_token") },
        // });
        const oneMovie = await axios.get(
          `${tmdbUrl}/movie/${MovieId}?api_key=${api_key}`
        );
        this.$state.oneMovie = oneMovie.data;
        this.$state.oneMovie.backdrop_path = `${imgUrl}/${this.$state.oneMovie.backdrop_path}`;
        this.$state.oneMovie.poster_path = `${imgUrl}/${this.$state.oneMovie.poster_path}`;
        if (this.$state.oneMovie.vote_average >= 7.5) {
          // console.log(movie.title, "WOW");
          this.$state.oneMovie.ticketPrice = 85000;
        } else if (this.$state.oneMovie.vote_average >= 7) {
          this.$state.oneMovie.ticketPrice = 75000;
          // console.log(movie.title, "Good");
        } else if (this.$state.oneMovie.vote_average >= 6) {
          this.$state.oneMovie.ticketPrice = 60000;
          // console.log(movie.title, "OK");
        } else {
          this.$state.oneMovie.ticketPrice = 50000;
          // console.log(movie.title, "Not Bad");
        }
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
    async signInGoogle(tokenGoogle) {
      try {
        const googleLogin = await axios.post(`${baseUrl}/users/loginGoogle`, {
          token: tokenGoogle,
        });
        const access_token = googleLogin.data.access_token;
        localStorage.setItem("access_token", access_token);
        this.$state.isLogin = true;
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

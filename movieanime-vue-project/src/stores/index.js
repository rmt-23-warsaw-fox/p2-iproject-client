import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';

export const useAllInOne = defineStore('allInOne', {
  state() {
    return {
      email: '',
      password: '',
      address: '',
      phoneNumber: '',
      popularList: [],
      movieList: [],
      movieDetail: [],
      searchList: [],
      recommendedList: [],
      movieId: '',
      query: '',
      page: 1,
      isLogin: false,
      baseUrlMovie: 'http://localhost:3001',
    };
  },
  actions: {
    async fetchPopular() {
      try {
        let { data } = await axios.get(`${this.baseUrlMovie}/movie/popular`);

        this.popularList = data.results;
      } catch (err) {
        console.log(err.response);
      }
    },
    async fetchTrending() {
      try {
        let { data } = await axios.get(`${this.baseUrlMovie}/movie/trending`);

        this.movieList = data.results;
      } catch (err) {
        console.log(err.response);
      }
    },
    async fetchDetail(id) {
      try {
        let { data } = await axios.get(`${this.baseUrlMovie}/movie/detail/${id}`);

        this.movieId = id;
        this.movieDetail = data;
        console.log(data);
        this.router.push(`/detail/${data.id}`);
      } catch (err) {
        console.log(err.response);
      }
    },
    async searchMovie() {
      try {
        let { data } = await axios.get(
          `${this.baseUrlMovie}/movie/search/?query=${this.query}&page=${this.page}`
        );

        this.searchList = data;
        console.log(this.query, this.page);
        this.router.push({ path: '/search', query: { query: this.query, page: this.page } });
      } catch (err) {
        console.log(err.response);
      }
    },
    async register() {
      try {
        await axios.post(`${this.baseUrlMovie}/user/register`, {
          email: this.email,
          password: this.password,
          address: this.address,
          phoneNumber: this.phoneNumber,
        })
        Swal.fire({
          icon: 'success',
          title: 'Nice!',
          text: "You have registered successfully",
        })
        
        this.router.push('/login')
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Failed!',
          text: `${err.response.data.message}`,
        })
      } finally { 
        this.email = ''
        this.password = ''
        this.address = ''
        this.phoneNumber = ''
      }
    },
    async login() {
      try {
        const { data } = await axios.post(`${this.baseUrlMovie}/user/login`, {
          email: this.email,
          password: this.password
        })

        localStorage.setItem('access_token', data.access_token)
        this.isLogin = true
        Swal.fire({
          icon: 'success',
          title: 'Nice!',
          text: `${data.message}`,
        })
        this.router.push('/')
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Failed!',
          text: `${err.response.data.message}`,
        })
      }
    },
    formatDate(input) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(input).toLocaleDateString('en-EN', options);

      return date;
    },
  },
});

import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';

export const useAllInOne = defineStore('allInOne', {
  state() {
    return {
      movieList: [],
      movieDetail: [],
      movieId: '',
    };
  },
  actions: {
    async fetchTrending() {
      try {
        let { data } = await axios.get('http://localhost:3001/movie/trending');

        this.movieList = data.results;
      } catch (err) {
        console.log(err.response);
      }
    },
    async fetchDetail(id) {
      try {
        let { data } = await axios.get(`http://localhost:3001/movie/detail/${id}`);

        this.movieId = id;
        this.movieDetail = data;
        this.router.push(`/detail/${data.id}`);
      } catch (err) {
        console.log(err.response);
      }
    },
    formatDate(input) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(input).toLocaleDateString('en-EN', options);

      return date;
    },
  },
});

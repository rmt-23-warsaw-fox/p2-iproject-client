<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useAllInOne } from '../stores';

export default {
  data() {
    return {
      localPage: null
    }
  },
  computed: {
    ...mapWritableState(useAllInOne, ['query', 'page']),
    ...mapState(useAllInOne, ['searchList']),
  },
  methods: {
    ...mapActions(useAllInOne, ['searchMovie', 'formatDate', 'fetchDetail']),

    changePage() {
      this.page = this.localPage
    },

    pageIncrement() {
      this.localPage++
    }
  },
};
</script>

<template>
  <div>
    <div class="container" style="margin-top: 90px">
      <div class="container">
        <div class="row" style="width: 85vw; margin-bottom: 20px; outline-style: groove; border-radius: 5px;" v-for="movie in searchList.results" :key="movie.id"> 
          <div class="col-1" style="padding-left: 0">
            <img @click.prevent="fetchDetail(movie.id)" :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" :alt="movie.original_title" class="card-img-top" style="width: 135px; height: 13vw; object-fit: cover; border-radius: 5px; cursor: pointer;">
          </div>
          <div class="col" style="margin-top: 10px; margin-left: 30px;">
            <h5 @click.prevent="fetchDetail(movie.id)" style="cursor: pointer;">{{movie.original_title}}</h5>
            <p style="color: grey">{{ formatDate(movie.release_date) }}</p>
            <p>{{movie.overview}}</p>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center;">
      <button @click="" style="margin-right: 10px"> &lt; </button><span style="font-weight: bold">Current Page: {{searchList.page}}</span>
      <button @click="pageIncrement(), changePage(), searchMovie()" style="margin-left: 10px"> > </button>
      <p style="font-weight: bold; margin-top: 20px; margin-bottom: 0;">Total Pages: {{searchList.total_pages}}</p>  
      <p style="font-weight: bold">Total Movies: {{searchList.total_results}}</p>  
    </div>
  </div> 
</template>

<style>
h5:hover {
  color: #0077b6;
  width: fit-content;
}
</style>
<script>
import { mapActions, mapState } from 'pinia';
import { useAllInOne } from '@/stores/index';

export default {
  computed: {
    ...mapState(useAllInOne, ['movieList']),
  },
  methods: {
    ...mapActions(useAllInOne, ['fetchTrending', 'formatDate', 'fetchDetail']),
  },
  created() {
    this.fetchTrending();
  },
};
</script>

<template>
  <div class="container" style="margin-top: 90px; justify-content: center">
    <h3>Trending Movies</h3>
    <div class="row">
      <div class="card" style="width: 12rem" v-for="movie in movieList" :key="movie.id">
        <a @click.prevent="fetchDetail(movie.id)" style="cursor: pointer"
          ><img
            class="card-img-top"
            :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
            :alt="movie.original_title"
            style="border-radius: 5px"
        /></a>
        <div class="card-body">
          <p class="card-text" style="font-weight: bolder; margin-bottom: 0">
            {{ movie.original_title }}
          </p>
          <p class="card-text" style="font-weight: lighter">{{ formatDate(movie.release_date) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useAllInOne } from '../stores';

export default {
  computed: {
    ...mapState(useAllInOne, ['movieDetail', 'movieId']),
  },
  methods: {
    ...mapActions(useAllInOne, ['fetchDetail']),
  },
  created() {
    this.fetchDetail(this.movieId);
  },
};
</script>

<template>
  <div style="margin-top: 90px">
    <div class="container">
      <div class="card" style="width: 12rem">
        <img
          class="card-img-top"
          :src="`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`"
          :alt="movieDetail.original_title"
          style="border-radius: 5px"
        />
        <div class="card-body">
          <p class="card-text" style="font-weight: bolder; margin-bottom: 5px">
            {{ movieDetail.original_title }}
          </p>
          <a class="btn btn-primary" href="" style="margin-left: 20px"
            ><p style="margin-bottom: 0">Watch Trailer</p></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

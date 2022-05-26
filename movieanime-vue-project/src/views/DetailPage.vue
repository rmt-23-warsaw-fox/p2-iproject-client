<script>
import { mapActions, mapState } from 'pinia';
import { useAllInOne } from '../stores';
import YouTube from 'vue3-youtube';

export default {
  components: { YouTube },
  computed: {
    ...mapState(useAllInOne, ['movieDetail', 'movieId']),
  },
  methods: {
    ...mapActions(useAllInOne, ['fetchDetail']),
    onReady() {
      this.$refs.youtube.playVideo();
    },
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
        </div>
      </div>
      <div>
        <YouTube src="https://www.youtube.com/watch?v=jNQXAC9IVRw" ref="youtube" />
      </div>
    </div>
  </div>
</template>

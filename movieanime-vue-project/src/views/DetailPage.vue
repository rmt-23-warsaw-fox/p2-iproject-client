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
  <div style="margin-top: 90px;">
    <div class="container" style="margin-top: 90px">
      <div class="container">
        <div
          class="row"
          style="width: 85vw; margin-bottom: 20px; outline-style: groove; border-radius: 5px"
        >
          <div class="col-1" style="padding-left: 0">
            <img
              :src="`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`"
              :alt="movieDetail.original_title"
              class="card-img-top"
              style="
                width: 135px;
                height: 15vw;
                object-fit: cover;
                border-radius: 5px;
                cursor: pointer;
              "
            />
          </div>
          <div class="col" style="margin-top: 10px; margin-left: 30px">
            <h5 style="cursor: pointer">{{ movieDetail.original_title }}</h5>
            <p>{{ movieDetail.overview }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

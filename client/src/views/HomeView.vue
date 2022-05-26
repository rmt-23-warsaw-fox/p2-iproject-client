<script>
import { mapActions, mapState } from "pinia";
import { useNontonStore } from "../stores/counter";

export default {
  name: "HomeView",
  methods: {
    ...mapActions(useNontonStore, ["fetchTrending", "movieDetail"]),
    detailClick(MovieId) {
      this.movieDetail(MovieId);
      this.$router.push(`/movie-detail/${MovieId}`);
    },
  },
  computed: {
    ...mapState(useNontonStore, ["dataMovies"]),
  },
  created() {
    this.fetchTrending();
  },
};
</script>

<template>
  <h1 class="display-6 text-center mt-5">Now Trending</h1>
  <div class="container">
    <div class="row">
      <div
        v-for="movie in dataMovies"
        v-bind:key="movie.id"
        @click.prevent="detailClick(movie.id)"
        class="card"
        style="
          width: 18rem;
          margin-left: 20px;
          margin-top: 30px;
          cursor: pointer;
        "
      >
        <img
          :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
          class="card-img-top"
          alt="movie poster_path"
          style="width: 15rem; height: 15rem; margin-top: 10px"
        />
        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

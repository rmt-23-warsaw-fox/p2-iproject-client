<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { RouterLink } from "vue-router";
import { useAllStore } from "../stores/allStore";

export default {
  computed: {
    ...mapState(useAllStore, ["allMovies"]),
    ...mapWritableState(useAllStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useAllStore, ["home"]),
  },
  components: {
    RouterLink,
  },
  created() {
    this.home();
  },
};
</script>

<template>
  <div style="">
    <div
      class="card bg-warning"
      style="width: 13rem"
      v-for="movie in allMovies"
    >
      <RouterLink :to="{ name: 'detail', params: { id: movie.id } }">
        <!-- IMG -->
        <img
          class="card-img-top"
          :src="movie.backdrop_path"
          :alt="movie.title"
          style="width: 100%"
        />
      </RouterLink>
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">{{ movie.overview }}</p>
        <RouterLink :to="{ name: 'booking', params: { MovieId: movie.id } }">
          <button class="btn btn-primary" v-on:click="">Booking</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

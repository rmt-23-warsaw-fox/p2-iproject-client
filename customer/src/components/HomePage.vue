<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { RouterLink } from "vue-router";
import { useAllStore } from "../stores/allStore";

export default {
  computed: {
    ...mapState(useAllStore, ["allMovies", "totalPages"]),
    ...mapWritableState(useAllStore, ["isLogin", "currentPage"]),
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
  <div class="card-deck row row-sm-3" style="gap: 30px">
    <div
      class="card bg-warning col-md-6"
      style="width: 17rem; padding;: 5%;"
      v-for="movie in allMovies"
    >
      <RouterLink :to="{ name: 'detail', params: { id: movie.id } }">
        <img
          class="card-img-top"
          :src="movie.poster_path"
          :alt="movie.title"
          style="width: 100%"
        />
      </RouterLink>
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">{{ movie.overview }}</p>
      </div>
      <RouterLink :to="{ name: 'booking', params: { MovieId: movie.id } }">
        <button class="btn btn-primary" v-on:click="">Booking</button>
      </RouterLink>
    </div>
  </div>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item disabled" v-if="currentPage === 1">
        <span class="page-link" v-on:click.prevent="">Previous</span>
      </li>
      <li class="page-item" v-if="currentPage > 1">
        <span class="page-link" v-on:click.prevent="home(currentPage - 1)"
          >Previous</span
        >
      </li>
      <div v-for="pages in totalPages">
        <li
          class="page-item"
          v-if="
            pages !== currentPage &&
            (!(pages > currentPage + 2 || pages < currentPage - 2) ||
              pages === 1 ||
              pages === totalPages)
          "
        >
          <span
            v-if="pages != 1"
            class="page-link"
            v-on:click.prevent="home(pages)"
            >{{ pages }}</span
          >
          <span
            v-if="pages == 1 && pages !== currentPage"
            class="page-link"
            v-on:click.prevent="home(1)"
            >{{ 1 }}</span
          >
        </li>
        <li class="page-item active" v-if="pages === currentPage">
          <span class="page-link" v-on:click.prevent="home(pages)">{{
            pages
          }}</span>
        </li>
      </div>
      <li class="page-item disabled" v-if="currentPage == totalPages">
        <span class="page-link" v-on:click.prevent="">Next</span>
      </li>
      <li class="page-item" v-if="totalPages > 1 && currentPage != totalPages">
        <span class="page-link" v-on:click.prevent="home(currentPage + 1)"
          >Next</span
        >
      </li>
    </ul>
  </nav>
</template>

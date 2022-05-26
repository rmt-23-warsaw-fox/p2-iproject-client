<script>
import axios from "axios";
import { Carousel, Slide } from "vue3-carousel";

export default {
  data() {
    return {
      upcomingMovies: [],
    };
  },
  components: {
    Carousel,
    Slide,
  },
  mounted() {
    this.fetchUpcomingMovies();
  },
  methods: {
    async fetchUpcomingMovies() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=93a882d2427e407e913daed9d97fc683&language=en-US&page=1"
      );

      this.upcomingMovies = response.data.results.slice(1, 6);
      console.log(this.upcomingMovies);
    },
  },
};
</script>

<template>
  <div id="example">
    <h2 class="uppercase text-yellow-500 font-semibold text-lg mt-20 ml-2">
      Upcoming Movies
    </h2>
  <Carousel
    :controls-visible="true"
    :clickable="false"
    :key="upcomingMovies.length"
    :listData="upcomingMovies"
    :height="500"
  >
    <Slide :index="i" :key="i" v-for="(movie, i) in this.upcomingMovies">
      <div class="carousel__item">
        <router-link :to="`/movie/${movie.id}`">
           <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" />
        </router-link>
      </div>
    </Slide>
    
  </Carousel>
  </div>
</template>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>

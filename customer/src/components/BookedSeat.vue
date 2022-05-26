<script>
import { mapActions, mapState } from "pinia";
import { useAllStore } from "../stores/allStore";

export default {
  computed: {
    ...mapState(useAllStore, ["booked"]),
  },
  methods: {
    ...mapActions(useAllStore, ["checkTicket"]),
  },
  created() {
    this.checkTicket();
  },
};
</script>

<template>
  <div class="card-group" style="gap: 15px">
    <div class="card bg-warning" style="width: 13rem" v-for="movie in booked">
      <RouterLink :to="{ name: 'detail', params: { id: movie.id } }">
        <img
          class="card-img-top"
          :src="movie.movieImg"
          :alt="movie.movieTitle"
          style="width: 100%"
        />
      </RouterLink>
      <div class="card-body">
        <h5 class="card-title">{{ movie.movieTitle }}</h5>
        <p class="card-text">Your seat: {{ movie.seatNumber }}</p>
      </div>
    </div>
  </div>
</template>

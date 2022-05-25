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
  <div class="card bg-warning" style="width: 13rem" v-for="movie in booked">
    <RouterLink :to="{ name: 'detail', params: { id: movie.Movie.id } }">
      IMG
      <!-- <img
                class="card-img-top"
                :src="food.imgUrl"
                :alt="food.name"
                style="width: 100%"
              /> -->
    </RouterLink>
    <div class="card-body">
      <h5 class="card-title">{{ movie.Movie.name }}</h5>
      <p class="card-text">{{ movie.seatNumber }}</p>
    </div>
  </div>
</template>

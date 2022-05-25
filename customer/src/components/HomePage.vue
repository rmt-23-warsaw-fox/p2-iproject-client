<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
};
</script>

<template>
  <div class="card bg-warning" style="width: 13rem">
    <RouterLink :to="{ name: 'detail', params: {} }">
      IMG
      <!-- <img
                class="card-img-top"
                :src="food.imgUrl"
                :alt="food.name"
                style="width: 100%"
              /> -->
    </RouterLink>
    <div class="card-body">
      <!-- <h5 class="card-title">{{ food.name }}</h5>
              <p class="card-text">{{ food.description }}</p> -->
      <button class="btn btn-primary" v-on:click="">Booking</button>
    </div>
  </div>
</template>

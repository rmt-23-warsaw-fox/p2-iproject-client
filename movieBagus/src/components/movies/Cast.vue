<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    casts: {
      required: true,
    },
  },
  methods: {
    castProfileImage(cast) {
      if (cast.profile_path) {
        return "https://image.tmdb.org/t/p/w300/" + cast.profile_path;
      } else {
        return "https://via.placeholder.com/300x450";
      }
    },
  },
};

</script>

<template>
<div class="container mx-auto  border-b border-gray-600 px-4 py-4">
    <h2 class="text-4xl font-semibold mb-5">
      Cast
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div class="mr-2" >
        <img
          src="../../assets/images/aktor.jpg"
          alt=""
          class="hover:opacity-75 tansition easy-in-out duration-150"
        />
        <span class="text-gray-300">Contoh aktor</span>
      </div>
    </div>
  </div>
</template>

<style>

</style>
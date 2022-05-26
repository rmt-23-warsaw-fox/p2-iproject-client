<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import { useAllStore } from "../stores/allStore";
export default {
  computed: {
    ...mapState(useAllStore, ["oneMovie"]),
  },
  methods: {
    ...mapActions(useAllStore, ["detail"]),
    priceInRupiah(price) {
      const intl = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });
      return intl.format(price);
    },
  },
  components: {
    RouterLink,
  },
  created() {
    this.detail(this.$route.params.id);
  },
};
</script>

<template>
  <div
    class="card"
    :style="{
      'background-image': `url(${oneMovie.backdrop_path})`,
      width: '100%',
    }"
  >
    <div
      class="container"
      style="background-color: aliceblue; padding: 0%; margin-left: 5%"
    >
      <div class="row">
        <div class="col-sm-4">
          <img
            :src="oneMovie.poster_path"
            :alt="oneMovie.title"
            srcset=""
            style="size: 50px; max-width: 100%"
          />
        </div>
        <div class="col">
          <div class="row">
            <h1>
              {{ oneMovie.title }}
            </h1>
            <h5>{{ oneMovie.tagline }}</h5>
          </div>
          <div class="row"><br /></div>
          <div class="row">
            <p>
              {{ oneMovie.overview }}
            </p>
          </div>
          <div class="row">
            <br />
            <h5>{{ priceInRupiah(oneMovie.ticketPrice) }}</h5>
          </div>
          <RouterLink :to="{ path: `/ticket/${oneMovie.id}` }">
            <button class="btn btn-primary">Booking</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

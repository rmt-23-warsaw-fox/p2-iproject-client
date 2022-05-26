<script>
import { mapState, mapActions } from "pinia";

export default {
  name: "CardDestination",
  props: ["destination"],
  computed: {},
  methods: {
    changeCurrencyToRupiah(value) {
      return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value);
    },

    clickDetail(id) {
      this.$router.push(`/destination/${id}`);
    },
  },
};
</script>

<template>
  <div class="box">
    <div class="image">
      <img v-bind:src="destination.imageUrl" alt="" />
    </div>
    <div class="content">
      <h3>{{ destination.name }}</h3>
      <p>{{ destination.description }}</p>
      <a href="#">read more <i class="fas fa-angle-right"></i></a>
    </div>
  </div>
</template>

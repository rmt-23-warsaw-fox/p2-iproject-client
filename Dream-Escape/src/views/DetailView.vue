<script>
import { useDestinationStore } from "../stores/destination";
import { mapActions, mapState } from "pinia";
export default {
  name: "DetailView",
  computed: {
    ...mapState(useDestinationStore, ["detailDestination", "qrCode"]),
  },
  methods: {
    ...mapActions(useDestinationStore, ["fetchDetail", "getQR"]),

    changeCurrencyToRupiah(value) {
      return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value);
    },
  },
  created() {
    this.fetchDetail(this.$route.params.id);
  },
};
</script>

<template>
  <section class="detail">
    <div class="image">
      <img v-bind:src="detailDestination.imageUrl" alt="" />
    </div>

    <div class="content">
      <h3 class="title">{{ detailDestination.name }}</h3>
      <p>
        {{ detailDestination.description }}
      </p>
      <span class="price">{{ changeCurrencyToRupiah(detailDestination.price) }} / people</span
      ><br />
    </div>
  </section>
</template>

<style>

</style>

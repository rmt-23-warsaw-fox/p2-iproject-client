<script>
import { useDestinationStore } from "../stores/destination";
import { mapActions, mapState, mapWritableState } from "pinia";
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

    changePage() {
      this.$router.push(`/orderform/${this.$route.params.id}`);
    },
  },
  created() {
    this.fetchDetail(this.$route.params.id);
    this.getQR(this.$route.params.id);
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
      ><br /> <br><br>
      <img v-bind:src="qrCode" style="width:170px ;" alt="qrCode" />
    </div>
    <a v-on:click="changePage()" class="btn" id="add-to-favs-button">book now</a>
  </section>
</template>

<style></style>

<script>
import { useFoodyBuddyStore } from "../stores/allInOne";
import { mapActions, mapState } from "pinia";
export default {
  name: "DetailView",
  computed: {
    ...mapState(useFoodyBuddyStore, ["detailFood", "qrCode"]),
  },
  methods: {
    ...mapActions(useFoodyBuddyStore, ["fetchDetail", "addFavs", "getQR"]),
    changeCurrencyToRupiah(value) {
      return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value);
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
      <img v-bind:src="detailFood.imgUrl" alt="" />
    </div>

    <div class="content">
      <h3 class="title">{{ detailFood.name }}</h3>
      <h3 class="subTitle">{{ detailFood.category }}</h3>

      <p>
        {{ detailFood.description }}
      </p>
      <span class="price">{{ changeCurrencyToRupiah(detailFood.price) }}</span
      ><br />
      <a v-on:click="addFavs(detailFood.id)" class="btn" id="add-to-favs-button"
        >add to favorites</a
      >
      <br />
      <br />
      <img v-bind:src="qrCode" alt="" />
    </div>
  </section>
</template>

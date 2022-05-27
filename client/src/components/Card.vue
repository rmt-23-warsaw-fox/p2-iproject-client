<script>
import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Card",
  props: ["product"],
  computed: {
    // ...mapWritableState(useCounterStore, ["product"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["buy"]),
  },
};
</script>

<template>
  <!-- {{ product }} -->
  <div class="col">
    <div class="card shadow-sm" style="position: relative">
      <span
        style="position: absolute; top: 20px; right: 20px; color: white"
      ></span>
      <img :src="product.imageUrl" class="card-img-top" alt="" />
      <div class="container">
        <p class="h4">{{ product.name }}</p>
        <p class="">{{ product.description }}</p>
        <p class="h6">Harga Rp.{{ product.price }}</p>
        <p class="">Stock {{ product.stock }}</p>
        <button @click.prevent="buy(product.id)" class="btn btn-primary mb-3">
          Beli
        </button>
      </div>
    </div>
  </div>
</template>

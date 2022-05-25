<script>
import { useGadgetStore } from "../stores/gadgets";
import { mapStores } from "pinia";
export default {
  computed: {
    ...mapStores(useGadgetStore),
  },
  props: ["gadget"],
  methods: {
    toDetail() {
      this.$router.push(`/detail/${this.gadget.detail}`);
    },
  },
};
</script>

<template>
  <div class="col">
    <div class="bg-light text-center rounded p-3">
      <div class="my-3">
        <a
          class="text-dark"
          style="text-decoration: none"
          v-on:click.prevent="toDetail"
          href=""
        >
          <h2 class="display-5">{{ gadget.phone_name }}</h2>
        </a>
      </div>
      <a v-on:click.prevent="toDetail" href="">
        <img
          class="img-fluid"
          v-bind:src="gadget.image"
          alt="Responsive image"
        />
      </a>
      <!-- <h6 class="display-6 mt-2 text-primary fw-bold">
        {{ gadget.priceShow }}
      </h6> -->
    </div>
  </div>
</template>

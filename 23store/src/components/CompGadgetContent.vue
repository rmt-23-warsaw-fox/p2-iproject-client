<script>
export default {
  props: ["gadget"],
  methods: {
    toDetail() {
      this.$router.push(`/detail/${this.gadget.detail}`);
    },
  },
};
</script>

<template>
  <div class="col text-center">
    <div class="card bg-light">
      <div class="card-body">
        <a
          class="text-dark"
          style="text-decoration: none"
          v-on:click.prevent="toDetail"
          href=""
        >
          <h2 class="card-title">{{ gadget.phone_name }}</h2>
        </a>
        <!-- <h2 class="display-7 mt-2 text-success fw-bold">
          {{ gadget.priceShow }}
        </h2> -->
      </div>
      <div class="px-5 pb-5">
        <a v-on:click.prevent="toDetail" href="">
          <img v-bind:src="gadget.image" class="card-img-top" alt="..." />
        </a>
      </div>
    </div>
  </div>
</template>

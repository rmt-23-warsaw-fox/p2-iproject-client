<template>
  <div id="orderPage-customer">
    <div class="order-container my-5">
      <h1 class="text-center">Your Order</h1>
      <div class="order-detail my-5">
        <h3 class="text-center">
          Virtual Account: {{ orderDetail.virtualAccount }}
        </h3>
        <p class="order-note">
          Please note that if you click the button mean that the process is
          already done
        </p>
        <button class="btn btn-success">Done</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useOrderStore } from "../stores/order";
import { mapActions, mapState } from "pinia";
export default {
  name: "orderPage",
  methods: {
    ...mapActions(useOrderStore, ["getOrder"]),
  },
  computed: {
    ...mapState(useOrderStore, ["orderDetail"]),
  },
  async created() {
    await this.getOrder();
  },
};
</script>

<style>
.order-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.order-note {
  color: red;
}
</style>

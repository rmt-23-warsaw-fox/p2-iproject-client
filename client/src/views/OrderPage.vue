<template>
  <div id="orderPage-customer">
    <div class="order-container my-5">
      <h1 class="text-center">Your Order</h1>
      <div class="order-detail my-5">
        <h3 class="text-center">Virtual Account: {{ order.virtualAccount }}</h3>
        <p class="order-note">
          Please note that if you click the button mean that the process is
          already done
        </p>
        <button
          v-if="order.virtualAccount"
          @click="clickDone(orderDetail.external_id, orderDetail.totalPrice)"
          class="btn btn-success"
        >
          Done
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useOrderStore } from "../stores/order";
import { mapActions, mapState } from "pinia";
export default {
  name: "orderPage",
  data() {
    return {
      order: {},
    };
  },
  methods: {
    ...mapActions(useOrderStore, ["getOrder", "payOrder"]),
    async clickDone(external_id, totalPrice) {
      try {
        await this.payOrder(external_id, totalPrice);
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    ...mapState(useOrderStore, ["orderDetail"]),
  },
  async created() {
    await this.getOrder();
    this.order = this.orderDetail;
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

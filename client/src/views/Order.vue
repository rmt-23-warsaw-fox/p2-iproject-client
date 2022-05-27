<script>
import { mapState, mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Card from "../components/Card.vue";
import Table from "../components/Table.vue";

export default {
  name: "OrderPage",
  components: {
    Navbar,
    Sidebar,
    Card,
    Table,
  },
  computed: {
    ...mapState(useCounterStore, ["order"]),
    ...mapWritableState(useCounterStore, ["bank", "amount", "payment_type"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getOrder", "charge", "va_numbers"]),
  },
  created() {
    this.getOrder();
  },
};
</script>

<template>
  <div class="wrapper vh-100 text-center">
    <Navbar />
    <div class="d-flex position-relative">
      <Sidebar />
      <main
        class="text-center mt-5 vh-100 row position-absolute"
        style="width: 80%; right: 2em"
      >
        <div class="mt-5">
          <Table :order="order" />
          <div class="card p-3 shadow-sm">
            <form
              @submit.prevent="charge(order.orderCode, order.Product.price)"
            >
              <div class="row">
                <div class="col">
                  <p>Please select your payment type:</p>
                  <input
                    v-model="payment_type"
                    type="radio"
                    id="bank_transfer"
                    name="payment_type"
                    value="bank_transfer"
                  />
                  <label for="bank_transfer">Bank Transfer</label><br />
                </div>
                <div class="col">
                  <p for="cars">Choose bank:</p>

                  <select v-model="bank" name="bank" id="bank">
                    <option value="bri">Bank BRI</option>
                    <option value="bni">Bank BNI</option>
                    <option value="bca">Bank BCA</option>
                    <option value="permata">Bank Permata</option>
                  </select>
                </div>

                <div class="col">
                  <button type="submit" class="btn btn-warning my-3">
                    Checkout
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
.jumbotron {
  color: white;
  background-image: url("https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_1280.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.title {
  background-color: rgba(0, 0, 0, 0.452);
  width: 500px;
}
</style>

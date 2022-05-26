<script>
import { useOrderStore } from "../stores/order";
import { mapActions, mapState } from "pinia";

export default {
  name: "OrderView",
  data() {
    return {
      objOrder: {
        fullName: "",
        email: "",
        phone: "",
        amount: 0,
        date: "",
      },
    };
  },
  components: {},
  computed: {},
  methods: {
    ...mapActions(useOrderStore, ["addOrder", "finishOrder"]),

    order() {
      this.addOrder(this.objOrder, this.$route.params.id);
    },
  },
  created() {},
};
</script>

<template>
  <section class="booking">
    <h1 class="heading-title">book your trip!</h1>
    <form class="book-form">
      <div class="flex">
        <div class="inputBox">
          <span>name :</span>
          <input
            v-model="objOrder.fullName"
            type="text"
            placeholder="enter your name"
            name="name"
            required
          />
        </div>
        <div class="inputBox">
          <span>email :</span>
          <input
            v-model="objOrder.email"
            type="email"
            placeholder="enter your email"
            name="email"
            required
          />
        </div>
        <div class="inputBox">
          <span>phone :</span>
          <input
            v-model="objOrder.phone"
            type="text"
            placeholder="enter your number"
            name="phone"
            required
          />
        </div>
        <div class="inputBox">
          <span>amount :</span>
          <input
            v-model="objOrder.amount"
            type="number"
            placeholder="number of guests"
            name="guests"
            required
          />
        </div>
        <div class="inputBox">
          <span>date :</span>
          <input v-model="objOrder.date" type="date" name="leaving" required />
        </div>
      </div>

      <button v-on:click.prevent="order()" class="btn" type="submit">submit</button>
    </form>
  </section>
</template>

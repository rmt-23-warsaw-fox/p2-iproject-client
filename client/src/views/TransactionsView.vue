<script>
import CardTransactionComp from "../components/CardTransactionComp.vue";
import BannerComp from "../components/BannerComp.vue";
import { useAccomodationStore } from '../stores/accomodation'
import { mapState, mapActions } from 'pinia';
export default {
  name: "TransactionsView",
  components: {
    CardTransactionComp,
    BannerComp,
  },
  computed: {
      ...mapState(useAccomodationStore, ['transactions'])
  },
  methods: {
      ...mapActions(useAccomodationStore, ['fetchTransactions'])
  },
  created() {
      this.fetchTransactions();
  }
};
</script>
<template>
  <div class="main">
      <BannerComp>
          <h1 class="text-light">Your History Transactions</h1>
      </BannerComp>
    <div class="container transactions bg-white shadow">
      <h2 class="text-center mt-5 mb-5 fw-bold" v-if="!transactions.length">You don't have more transaction yet.</h2>
      <CardTransactionComp 
        v-for="transaction in transactions"
        :transaction="transaction"
      />
    </div>
  </div>
</template>
<style>
.main {
  min-height: 80vh;
}
.transactions {
  width: 60%;
  border-radius: 15px;
  margin-top: 20px;
  padding: 20px 30px;
}

.transaction-card {
  background-color: rgb(247, 234, 185);
  border-radius: 15px;
  position: relative;
}

.transaction-card img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
}

.transaction-card .detail {
  padding: 20px 30px;
}

.transaction-card h3 {
  font-size: 20px;
  font-weight: 900;
}
.transaction-card h5 {
  font-size: 14px;
}
.transaction-card p {
  font-size: 12px;
}
.status {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 5px 10px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>

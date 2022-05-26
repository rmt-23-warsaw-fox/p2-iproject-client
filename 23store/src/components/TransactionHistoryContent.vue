<script>
import CompTransactionHistory from "./CompTransactionHistory.vue";
import { useTransactionHistoryStore } from "../stores/transaction-history";
import { mapStores } from "pinia";
export default {
  components: {
    CompTransactionHistory,
  },
  computed: {
    ...mapStores(useTransactionHistoryStore),
  },
  methods: {
    async getTransactionHistory() {
      try {
        let { data } =
          await this.transactionHistoryStore.getTransactionHistory();
        data.transactionHistory.forEach((transaction) => {
          let day = new Date(transaction.createdAt).getDate();
          let month = new Date(transaction.createdAt).getMonth() + 1;
          let year = new Date(transaction.createdAt).getFullYear();
          transaction.createdAt = `${day}-${month}-${year}`;
          transaction.price = transaction.price * 1000;
          transaction.price = transaction.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          });
          transaction.priceTotal = transaction.priceTotal * 1000;
          transaction.priceTotal = transaction.priceTotal.toLocaleString(
            "id-ID",
            {
              style: "currency",
              currency: "IDR",
            }
          );
        });
        this.transactionHistoryStore.transactions = data.transactionHistory;
        this.transactionHistoryStore.totalPages = data.totalPages;
      } catch (error) {
        console.log(error);
      }
    },
    async getTransactionHistoryByPage(page) {
      try {
        let { data } =
          await this.transactionHistoryStore.getTransactionHistoryByPage(page);
        data.transactionHistory.forEach((transaction) => {
          let day = new Date(transaction.createdAt).getDate();
          let month = new Date(transaction.createdAt).getMonth() + 1;
          let year = new Date(transaction.createdAt).getFullYear();
          transaction.createdAt = `${day}-${month}-${year}`;
          transaction.price = transaction.price * 1000;
          transaction.price = transaction.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          });
          transaction.priceTotal = transaction.priceTotal * 1000;
          transaction.priceTotal = transaction.priceTotal.toLocaleString(
            "id-ID",
            {
              style: "currency",
              currency: "IDR",
            }
          );
        });
        this.transactionHistoryStore.transactions = data.transactionHistory;
        this.transactionHistoryStore.totalPages = data.totalPages;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getTransactionHistory();
  },
};
</script>

<template>
  <div class="container mt-5">
    <h2>Daftar Transaksi</h2>
    <CompTransactionHistory
      v-for="transaction in transactionHistoryStore.transactions"
      v-bind:key="transaction.id"
      v-bind:transaction="transaction"
    />
    <nav class="d-flex justify-content-center" aria-label="...">
      <ul class="pagination">
        <li class="page-item">
          <a
            v-on:click.prevent=""
            class="page-link"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >Previous</a
          >
        </li>
        <li
          v-for="i in transactionHistoryStore.getTotalPages"
          class="page-item"
        >
          <a
            v-on:click.prevent="getTransactionHistoryByPage(i)"
            class="page-link"
            href="#"
            >{{ i }}</a
          >
        </li>
        <li class="page-item">
          <a v-on:click.prevent="" class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

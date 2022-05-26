import { defineStore } from "pinia";
import server from "../api/server";

export const useTransactionHistoryStore = defineStore({
  id: "transactionHistory",
  state: () => ({
    transactions: [],
    totalPages: 0,
  }),
  getters: {
    getTotalPages: (state) => {
      let arrTotalPages = [];
      for (let i = 1; i <= state.totalPages; i++) {
        arrTotalPages.push(i);
      }
      return arrTotalPages;
    },
  },
  actions: {
    getTransactionHistory() {
      return server({
        method: "get",
        url: "/transaction-history",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
    },
    getTransactionHistoryByPage(page) {
      return server({
        method: "get",
        url: `/transaction-history?page=${page}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
    },
  },
});

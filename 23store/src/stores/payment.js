import { defineStore } from "pinia";
import server from "../api/server";

export const usePaymentStore = defineStore({
  id: "payment",
  state: () => ({}),
  getters: {},
  actions: {
    getPaymentToken(sendOrder) {
      return server({
        method: "post",
        url: "/payment",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: sendOrder,
      });
    },
    successPayment(payment) {
      return server({
        method: "post",
        url: "/payment/success",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: payment,
      });
    },
  },
});

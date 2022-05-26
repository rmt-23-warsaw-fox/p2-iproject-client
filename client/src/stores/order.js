import { defineStore } from "pinia";
import instance from "../api/instance";
export const useOrderStore = defineStore({
  id: "OrderPage",
  state: () => ({
    orderDetail: {},
  }),
  getters: {},
  actions: {
    async getOrder() {
      try {
        const res = await instance({
          method: "get",
          url: "/public/orders",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.orderDetail = res.data[0];
      } catch (err) {
        console.log(err);
      }
    },
    async payOrder(ei, tp) {
      try {
        const res = await instance({
          method: "post",
          url: "xendit/pay",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            external_id: ei,
            totalPrice: tp,
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
});

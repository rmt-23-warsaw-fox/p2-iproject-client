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
  },
});

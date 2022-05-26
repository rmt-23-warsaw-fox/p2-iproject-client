import { defineStore } from "pinia";
import instance from "../api/instance";
export const useBookmarkStore = defineStore({
  id: "BookmarkPage",
  state: () => ({
    bookmarks: [],
    chefs: [],
  }),
  getters: {},
  actions: {
    async getBookmarks() {
      try {
        const res = await instance({
          method: "get",
          url: "/public/bookmarks",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.bookmarks = [];
        res.data.forEach((el) => {
          this.bookmarks.push(el.Food);
        });
      } catch (err) {
        console.log(err);
      }
    },
    async getChefs() {
      try {
        const res = await instance({
          method: "get",
          url: "/public/chefs",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.chefs = res.data;
      } catch (err) {
        console.log(err);
      }
    },
    async createVa(tp, bc) {
      try {
        const res = await instance({
          method: "post",
          url: "/xendit/create",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            totalPrice: tp,
            bank_code: bc,
          },
        });
        return res.data;
      } catch (err) {
        console.log(err);
      }
    },
    async addOrder(ci, tp, status, va, ei) {
      try {
        const res = await instance({
          method: "post",
          url: "/public/orders",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            ChefId: ci,
            totalPrice: tp,
            status: status,
            virtualAccount: va,
            external_id: ei,
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
});

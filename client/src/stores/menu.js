import { defineStore } from "pinia";
import instance from "../api/instance";
export const useMenuStore = defineStore({
  id: "MenuPage",
  state: () => ({
    foods: [],
    page: 1,
    totalPage: null,
  }),
  getters: {},
  actions: {
    async getFoods(currPage) {
      try {
        let url = "/public/foods";
        if (currPage) {
          this.page = currPage;
        }
        url += `?page=${this.page}`;
        const res = await instance({
          method: "get",
          url,
        });
        this.foods = res.data.data;
        this.totalPage = res.data.totalPage;
        this.page = res.data.currPage;
      } catch (err) {
        console.log(err);
      }
    },
  },
});

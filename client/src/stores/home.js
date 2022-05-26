import { defineStore } from "pinia";
import instance from "../api/instance";
export const useHomeStore = defineStore({
  id: "HomePage",
  state: () => ({
    foods: [],
  }),
  getters: {},
  actions: {
    async getFoods() {
      try {
        const res = await instance({
          method: "get",
          url: "/public/foods",
        });
        this.foods = res.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});

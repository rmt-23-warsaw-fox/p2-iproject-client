import { defineStore } from "pinia";
import instance from "../api/instance";
export const useCardStore = defineStore({
  id: "Card",
  state: () => ({}),
  getters: {},
  actions: {
    async addBookmark(id, name, thumb) {
      try {
        const res = await instance({
          method: "post",
          url: "/public/bookmarks",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            idMeal: id,
            strMeal: name,
            strMealThumb: thumb,
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
});

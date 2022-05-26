import { defineStore } from "pinia";
import axios from "axios";

let baseUrl = "https://kamimampu.herokuapp.com/events";
export const useEventStore = defineStore({
  id: "event",
  state: () => ({
    events: [],
    news: [],
  }),
  getters: {},
  actions: {
    async fetchEvent() {
      try {
        const response = await axios({
          method: "get",
          url: `${baseUrl}/`,
        });

        console.log(response);
        this.events = response.data.events;
      } catch (error) {
        console.log(error);
        this.$toast.error("Something went wrong", {
          position: "top-right",
          duration: 3000,
        });
      }
    },
    async fetchNews() {
      try {
        const response = await axios({
          method: "get",
          url: `http://api.mediastack.com/v1/news?access_key=a1267bd20416d1fb0eb44dce70c82886&languages=en&limit=3`,
        });

        console.log(response);
        this.news = response.data.data;
      } catch (error) {
        console.log(error);
        this.$toast.error("Something went wrong", {
          position: "top-right",
          duration: 3000,
        });
      }
    },
    patchEvent(EventId) {
      return axios({
        method: "patch",
        url: `${baseUrl}/hands/${EventId}`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
  },
});

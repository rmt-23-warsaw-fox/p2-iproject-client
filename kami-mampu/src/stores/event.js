import { defineStore } from "pinia";
import axios from "axios";

let baseUrl = "http://localhost:3000/events";
export const useEventStore = defineStore({
  id: "event",
  state: () => ({
    events: [],
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
        console.log(this.events[0]);
      } catch (error) {
        console.log(error);
        this.$toast.error("Something went wrong", {
          position: "top-right",
          duration: 3000,
        });
      }
    },
  },
  async fetchEventMasterList() {
    try {
      const response = await axios({
        method: "get",
        url: `${baseUrl}/master-list`,
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
});

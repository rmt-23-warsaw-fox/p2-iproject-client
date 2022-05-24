import { defineStore } from "pinia";
import server from "../api/server";

export const useGadgetStore = defineStore({
  id: "gadgets",
  state: () => ({
    gadgets: [],
    dashboardGadgets: [],
    gadget: {},
  }),
  getters: {},
  actions: {
    getDashboardGadgets() {
      return server.get("/gadgets/dashboard");
    },
  },
});

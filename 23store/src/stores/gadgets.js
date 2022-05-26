import { defineStore } from "pinia";
import server from "../api/server";

export const useGadgetStore = defineStore({
  id: "gadgets",
  state: () => ({
    gadgets: [],
    dashboardGadgets: [],
    gadget: {},
    buyGadget: {
      price: 0,
      priceTotal: 0,
      quantity: 1,
      priceShow: "",
      priceTotalShow: "",
    },
  }),
  getters: {
    modBuyGadget(state) {
      state.buyGadget.price = state.gadget.price;
      state.buyGadget.priceTotal =
        state.buyGadget.price * state.buyGadget.quantity;
      state.buyGadget.priceShow = state.buyGadget.price * 1000;
      state.buyGadget.priceShow = state.buyGadget.priceShow.toLocaleString(
        "id-ID",
        {
          style: "currency",
          currency: "IDR",
        }
      );
      state.buyGadget.priceTotalShow = state.buyGadget.priceTotal * 1000;
      state.buyGadget.priceTotalShow =
        state.buyGadget.priceTotalShow.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        });
      return state.buyGadget;
    },
  },
  actions: {
    getDashboardGadgets() {
      return server.get("/gadgets/dashboard");
    },
    getGadgets(brand) {
      return server.get(`/gadgets/${brand}`);
    },
    getGadget(detail) {
      return server.get(`/gadgets/detail/${detail}`);
    },
  },
});

import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({}),
  getters: {},
  actions: {
    loginAction(payLoad) {
      return axios.post("http://localhost:3000/login", {
        userLogin: payLoad.userLogin,
        password: payLoad.password,
      });
    },

    registerAction(payLoad) {
      return axios.post("http://localhost:3000/register", {
        userName: payLoad.userName,
        email: payLoad.email,
        password: payLoad.password,
      });
    },
  },
});

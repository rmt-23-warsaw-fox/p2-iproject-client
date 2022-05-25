import { defineStore } from "pinia";
import instance from "../api/instance";
export const useLoginStore = defineStore({
  id: "LoginPage",
  state: () => ({
    email: "",
    password: "",
  }),
  getters: {},
  actions: {
    login() {
      return instance({
        method: "post",
        url: "/public/login",
        data: {
          email: this.email,
          password: this.password,
        },
      });
    },
  },
});

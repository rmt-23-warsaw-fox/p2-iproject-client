import { defineStore } from "pinia";
import instance from "../api/instance";
export const useRegisterStore = defineStore({
  id: "RegisterPage",
  state: () => ({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  }),
  getters: {},
  actions: {
    register() {
      return instance({
        method: "post",
        url: "/public/register",
        data: {
          username: this.username,
          email: this.email,
          password: this.password,
          phoneNumber: this.phoneNumber,
          address: this.address,
        },
      });
    },
  },
});

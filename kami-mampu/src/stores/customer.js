import { defineStore } from "pinia";
import axios from "axios";

let baseUrl = "http://localhost:3000/customers";
export const useCustomerStore = defineStore({
  id: "customerStore",
  state: () => ({
    isLoggedIn: false,
  }),
  getters: {},
  actions: {
    login(userLogin) {
      return axios({
        method: "post",
        url: `${baseUrl}/login`,
        data: {
          email: userLogin.email,
          password: userLogin.password,
        },
      });
    },
    register(userRegister) {
      return axios({
        method: "post",
        url: `${baseUrl}/register`,
        data: {
          email: userRegister.email,
          password: userRegister.password,
          phoneNumber: userRegister.phoneNumber,
          address: userRegister.address,
        },
      });
    },
  },
});

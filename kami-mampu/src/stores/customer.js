import { defineStore } from "pinia";
import axios from "axios";

let baseUrl = "http://localhost:3000/customers";
export const useCustomerStore = defineStore({
  id: "customerStore",
  state: () => ({
    isLoggedIn: false,
    histories: [],
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
        },
      });
    },
    async fetchHistory() {
      try {
        const response = await axios({
          method: "get",
          url: `${baseUrl}/history`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        this.histories = response.data.histories;
      } catch (error) {
        console.log(error);
        this.$toast.error("Something went wrong", {
          position: "top-right",
          duration: 3000,
        });
      }
    },
  },
});

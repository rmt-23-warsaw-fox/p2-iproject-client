import { defineStore } from "pinia";
import server from "../api/server";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isLogin: false,
    inputUser: {
      email: "",
      password: "",
    },
  }),
  getters: {},
  actions: {
    register() {
      return server.post("/auth/register", {
        email: this.inputUser.email,
        password: this.inputUser.password,
      });
    },
    login() {
      return server.post("/auth/login", {
        email: this.inputUser.email,
        password: this.inputUser.password,
      });
    },
  },
});

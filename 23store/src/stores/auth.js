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
    userProfile: {
      id: "",
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
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
    checkToken() {
      return server({
        url: "/auth/check-token",
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
    },
    updateProfile(userProfile) {
      return server({
        url: "/auth/update-profile",
        method: "PUT",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: {
          firstName: userProfile.firstName,
          lastName: userProfile.lastName,
          phone: userProfile.phone,
          address: userProfile.address,
        },
      });
    },
  },
});

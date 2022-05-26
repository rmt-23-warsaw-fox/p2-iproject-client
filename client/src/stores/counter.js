import { defineStore } from "pinia";
import axios from "axios";
import swal from "sweetalert";

export const useNontonStore = defineStore("nonton", {
  state: () => ({
    baseUrl: "http://localhost:3001",
    user: {},
    isLoggedIn: false,
  }),
  getters: {},
  actions: {
    async login() {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/login",
          data: {
            email: this.user.email,
            password: this.user.password,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLoggedIn = true;
        delete this.user.email;
        delete this.user.password;
      } catch (error) {
        swal({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      }
    },
    async register() {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/register",
          data: {
            fullname: this.user.fullname,
            email: this.user.email,
            password: this.user.password,
          },
        });
        delete this.user.fullname;
        delete this.user.email;
        delete this.user.password;
        swal({
          title: "Register Success!",
          text: "Please login",
          icon: "success",
        });
        this.router.push("/login");
        console.log(data);
      } catch (error) {
        swal({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      }
    },
  },
});

import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    user: null,
    profile: [],
    contentInventory: []
  }),
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

    async getProfile() {
      try {
        const { data } = await axios({
          method: "GET",
          url: "http://localhost:3000/profiles",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.profile = data.map((e) => {
          return e;
        });
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
    async createContent(payLoad) {
      try {
        const { data } = await axios({
          method: "POST",
          url: "http://localhost:3000/upload",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            upload: payLoad.upload,
            caption: payLoad.caption,
          },
        });
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getContent() {
      try {
       const { data } = await axios({
          method:"GET",
          url: "http://localhost:3000/content",
          headers:{
            access_token: localStorage.getItem("access_token")
          }
        })
        this.contentInventory = data.content.map((e) => {
          return e
        })
        console.log(this.contentInventory)
      } catch (err) {
        console.log(err.response.data.message)
      }
    }
  },
});

import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
const BASE_URL = "http://localhost:3000";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    symptomps: [],
    ailments: [],
    readDoctors: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    async diagnose(input) {
      console.log(input, "input get ailment <<<<< diagnose");
      console.log(import.meta.env.VITE_APP_KEY);
      if (input.symptomp1 === "") {
        Swal.fire({
          title: "Error!",
          text: "first symptomp must be filled",
          icon: "error",
          confirmButtonText: "Ok",
        });
      } else {
        const options = {
          method: "GET",
          url: "https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis",
          params: {
            gender: "male",
            year_of_birth: "1984",
            symptoms: `[${input.symptomp1},${input.symptomp2},${input.symptomp3}]`,
            language: "en-gb",
          },
          headers: {
            "X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
            "X-RapidAPI-Key": import.meta.env.VITE_APP_KEY,
          },
        };
        try {
          const response = await axios.request(options);
          console.log(response, "<<<< response store");
          if (response.data.length === 0) {
            Swal.fire({
              title: "Error!",
              text: "Sorry, we cannot find your ailments",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
          this.ailments = response;
        } catch (err) {
          console.log(err);
          Swal.fire({
            title: "Error!",
            text: "Sorry, we cannot find your ailments",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      }
    },
    async register(payload) {
      await axios({
        method: "POST",
        url: `${BASE_URL}/patient/register`,
        data: {
          name: payload.username,
          password: payload.password,
          email: payload.email,
          phoneNumber: payload.phoneNumber,
          address: payload.address,
        },
      });
    },

    async loginP(payload) {
      const response = await axios({
        method: "POST",
        url: `${BASE_URL}/patient/login`,
        data: {
          email: payload.email,
          password: payload.password,
        },
      });
      console.log(response, "<<< response pada saat login");
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("customer_id", response.data.customer_id);
      localStorage.setItem("customer_email", response.data.customer_email);
      this.access_token1 = response.data.access_token;
    },
  },
});

import { defineStore } from 'pinia'
import axios from "axios";

// const baseUrl = "http://localhost:3000";
const baseUrl = "https://moviebagus32.herokuapp.com";

export const allInOneStore = defineStore("stores", {
    state: () => ({
      isLoggedIn: false,
    }),
    
    actions: {
      // REGISTER
      async doRegisterFromBackend(objCredential) {
        try {
          const response = await axios.post(`${baseUrl}/register`, {
            username: objCredential.username,
            email: objCredential.email,
            password: objCredential.password,
          });
          // UDAH BERHASIL COYYY
          //   console.log(response, "000000000000000000000000");
          //   console.log(response.status, "111111111111111111111");
  
          const token = response.data.access_token;
  
          localStorage.setItem("access_token", token);
  
          this.$state.isLoggedIn = true;
        } catch (err) {
          console.log(err);
        }
      },
  
      // LOGIN FORM
      async doLoginFromBackend(objCredential) {
        try {
          const response = await axios.post(`${baseUrl}/login`, {
            email: objCredential.email,
            password: objCredential.password,
          });
          // UDAH BERHASIL COYYY
          //   console.log(response, "000000000000000000000000");
          //   console.log(response.status, "111111111111111111111");
  
          const token = response.data.access_token;
  
          localStorage.setItem("access_token", token);
  
          this.$state.isLoggedIn = true;
        } catch (err) {
          console.log(err);
        }
      },
  
      // LOGOUT
      async logout() {
        this.isLoggedIn = false;
        localStorage.clear();
      },
  
    },
  });
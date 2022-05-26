import { defineStore } from 'pinia';
import axios from 'axios';

// http://localhost:3000
// https://iproject-trshnews.herokuapp.com
const baseurl = 'https://iproject-trshnews.herokuapp.com';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    loginStatus: false,
    premium: false,
    run: false,
  }),
  getters: {},
  actions: {
    async backendLogin(data) {
      try {
        const email = data.email;
        const password = data.password;
        // console.log(email, password);
        const response = await axios.post(`${baseurl}/users/login`, {
          email: email,
          password: password,
        });
        // console.log(response);
        if (response) {
          localStorage.setItem('access_token', response.data.access_token);
          localStorage.setItem('premium', response.data.isPremium);
          if (response.data.isPremium === true) {
            this.premium = true;
          }
          this.loginStatus = true;
          this.$router.push('/');

          //   this.$toast.open({
          //     message: 'login success',
          //     type: 'success',
          //   });
        }
      } catch (error) {
        console.log(error.response.data.message);
        // this.$toast.open({
        //   message: error.response.data.message,
        //   type: 'error',
        //   // all of other options may go here
        // });
      }
    },
    async BackendLogoutConnection() {
      try {
        localStorage.clear();
        this.loginStatus = false;
        this.$router.push('/login');
        // this.loginStatus = false;
        // this.statusList = [];
        // await this.$gAuth.signOut();
      } catch (error) {
        console.log(error.response.data.message);
        // this.$toast.open({
        //   message: error.response.data.message,
        //   type: 'error',
        //   // all of other options may go here
        // });
      }
    },
    async BackendRegisterConnection(registerInfo) {
      try {
        // console.log(registerInfo);
        let temp = {};
        Object.assign(temp, registerInfo);
        // console.log(temp);
        const response = await axios.post(`${baseurl}/users/register`, {
          email: temp.email,
          password: temp.password,
        });
        if (response) {
          this.$router.push('/login');
        }
      } catch (error) {
        console.log(error.response.data.message);
        // console.log(error);
        // this.$toast.open({
        //   message: error.response.data.message,
        //   type: 'error',
        //   // all of other options may go here
        // });
      }
    },
    async loginCheck() {
      if (localStorage.getItem('access_token')) {
        this.loginStatus = true;
        if (localStorage.getItem('premium') === 'true') {
          this.premium = true;
        }
      }
    },
  },
});

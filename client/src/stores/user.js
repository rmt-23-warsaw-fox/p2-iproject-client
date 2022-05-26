import { defineStore } from 'pinia'
import axios from 'axios'
import swal from 'sweetalert';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    counter: 0,
    baseUrl: 'http://localhost:3000',
    users: [],
    foundUser: {}
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    login(email, password){
      // console.log(email, password);
      axios({
        method: "post",
        url: `${this.baseUrl}/login`,
        data: {
          email: email,
          password: password
        }
      })
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem('senderId', response.data.payload.id)
          this.router.push('/')
        })
        .catch((err) => {
          console.log(err);
        })
    },
    fetchUser(){
      let senderId = localStorage.getItem('senderId')
      axios({
        method: "post",
        url: `${this.baseUrl}/users`,
        data: {
          id: senderId
        }
      })
        .then((response) => {
          this.users = response.data.users
        })
        .catch((err) => {
          console.log(err.response);
        })
    },
    fetchUserById(id){
      
      axios({
        method: 'get',
        url: `${this.baseUrl}/users/${id}`,
      })
      .then((response) => {
        this.foundUser = response.data.user;
      })
      .catch((err) => {
        console.log(err.response);
      })
    },
    register(username, email, password, genre, bio) {
      axios({
        method: 'post',
        url: `${this.baseUrl}/register`,
        data: {
          username: username,
          email: email,
          password: password,
          genre: genre,
          bio: bio
        }
      })
      .then((response) => {
        this.router.push('/login')
      })
      .catch((err) => {
        swal(err.response.data.message);
      })
    }
  }
})

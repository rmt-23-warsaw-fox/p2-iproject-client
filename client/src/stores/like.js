import axios from 'axios'
import { defineStore } from 'pinia'
import swal from 'sweetalert';

export const useLikeStore = defineStore({
  id: 'like',
  state: () => ({
    counter: 0,
    baseUrl: 'http://localhost:3000'
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    // increment() {
    //   this.counter++
    // }
    doLike(postId){
      axios({
        method: 'post',
        url: `${this.baseUrl}/likes`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          id: +postId
        }
      })
      .then((response) => {
        swal(response.data.message);
        this.router.push('/')
      })
      .catch((err) => {
        console.log(err);
      })
    },
    doUnlike(postId) {
      axios({
        method: 'delete',
        url: `${this.baseUrl}/likes/${postId}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((response) => {
        console.log(response.data.message);
        this.router.push('/')
      })
      .catch((err) => {

      })
    }
  }
})

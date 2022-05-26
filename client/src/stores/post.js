import { defineStore } from 'pinia'
import axios from 'axios'
import swal from 'sweetalert';

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    counter: 0,
    baseUrl: 'https://api-pablostory-web-app.herokuapp.com',
    posts: []
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    addNewPost(imgUrl, description) {
      console.log('dari pinia', description,imgUrl );
      axios({
        method: "post",
        url: `${this.baseUrl}/posts`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          imgUrl: imgUrl,
          description: description
        }
      })
      .then((response) => {
        this.router.push('/')
        // this.posts = []
      })
      .catch((err) => {
        console.log(err.response.data.message);
        swal(err.response.data.message);
      })
    },
    fetchPost() {
      axios({
        method: 'get',
        url: `${this.baseUrl}/posts`
      })
      .then((response) => {
        this.posts = response.data.posts
        console.log(response.data.posts);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
})

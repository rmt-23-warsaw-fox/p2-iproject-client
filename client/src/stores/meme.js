import { defineStore } from 'pinia'
import axios from 'axios'

export const useMemeStore = defineStore({
  id: 'meme',
  state: () => ({
    counter: 0,
    baseUrl: 'https://api-pablostory-web-app.herokuapp.com',
    memes: []
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    fetchMeme(){
      axios({
        method: 'get',
        url: `${this.baseUrl}/memes`
      })
        .then((response) => {
          this.memes = response.data.memes
        })
        .catch((err) => {
          console.log(err.response);
        })
    }
  }
})

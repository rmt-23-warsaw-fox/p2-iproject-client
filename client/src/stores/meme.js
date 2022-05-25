import { defineStore } from 'pinia'
import axios from 'axios'

export const useMemeStore = defineStore({
  id: 'meme',
  state: () => ({
    counter: 0,
    baseUrl: 'http://localhost:3000',
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

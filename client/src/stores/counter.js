import { defineStore } from 'pinia'
import axios from "axios";
const baseUrl = "http://localhost:3000/";

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 5,
    filter: 'Filter',
    username: 'bambang',
    numbers: [2, 4],
    myFavourites: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    addTitle () {
      return 'Dr.' + this.username
    }
  },
  actions: {
    increment() {
      this.counter++
    },
    addNumber(number) {
      console.log(78);
      this.numbers.push(number)
    },
    async listsFavourite() {
      try {
        const listsFavourite = await axios.get(`${baseUrl}login/listFavourite`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.myFavourites = listsFavourite.data.data.Favourites
      } catch(err) {
        console.log(err);
      }
    },
    isDetailStore(id) {
      this.router.push(`/products/${id}`);
    }
  }
})

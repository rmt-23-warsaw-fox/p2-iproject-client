import { defineStore } from 'pinia'
import linkUrl from '../api/axios'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 5,
    filter: 'Filter',
    username: 'bambang',
    numbers: [2, 4],
    myBuys: [],
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
    async listsBuy() {
      try {
        const listsBuy = await linkUrl.get(`login/listBuy`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.myBuys = listsBuy.data.data.Buys
        console.log(this.myBuys);
      } catch(err) {
        console.log(err);
      }
    },
    isDetailStore(id) {
      this.router.push(`/products/${id}`);
    }
  }
})

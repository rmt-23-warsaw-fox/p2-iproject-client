import { defineStore } from 'pinia'

export const useMemeStore = defineStore({
  id: 'meme',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})

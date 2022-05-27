import { defineStore } from 'pinia'
import axiosInstance from "../api";

export const useInventoryStore = defineStore({
  id: 'inventory',
  state: () => ({
    isLogin: false,
    destinations: []
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    async getAllDestinations() {
      try {
        // console.log('aduuuh boskuuu');
        const { data } = await axiosInstance.get('/users/travels', {
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.destinations = data

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }
})

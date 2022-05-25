import { defineStore } from 'pinia'
import axios from 'axios'
const BASE_URL = 'http://localhost:3001'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    loggedUser:{},
    isLogin: false
  }),

  actions: {
    async loginParticipant(user){
      try {
        const response = await axios.post(
          BASE_URL + '/participants/login',
          user
        )
        this.$state.loggedUser = response.data
        this.$state.isLogin = true
        localStorage.setItem("access_token", response.data.access_token)
      } catch (error) {
        console.log(error);
      }
    },
    async joinEvent(eventId){
      try {
        const response = await axios.put(
          BASE_URL + '/participants/' + eventId,
          {},
          {
            headers:{
              access_token: localStorage.getItem("access_token")
            }
          }
        )
        this.$state.eventId = eventId
      } catch (error) {
        console.log(error);
      }
    }
  }
})

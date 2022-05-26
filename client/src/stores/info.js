import { defineStore } from 'pinia'
import axios from 'axios'
const BASE_URL = 'http://localhost:3001'
import db from '../boot/firebase'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    // loggedUser:{},
    // isLogin: false,
  }),

  actions: {
    async loginParticipant(user){
      try {
        const response = await axios.post(
          BASE_URL + '/participants/login',
          user
        )

        // this.$state.loggedUser = response.data
        // this.$state.isLogin = true
        localStorage.setItem("role", "participant")
        localStorage.setItem("name", response.data.name)
        localStorage.setItem("id", response.data.id)
        localStorage.setItem("email", response.data.email)
        localStorage.setItem("access_token", response.data.access_token)
      } catch (error) {
        console.log(error);
      }
    },
    async joinEvent(eventId){
      try {
        const response = await axios.put(
          BASE_URL + '/participants/join/' + eventId,
          {},
          {
            headers:{
              access_token: localStorage.getItem("access_token")
            }
          }
        )
        // this.$state.loggedUser.eventId = eventId
        localStorage.setItem("eventId", +eventId)
      } catch (error) {
        console.log(error);
      }
    },
    async createParticipant(){
      const imgUrl = await this.fetchImgUrl()
      const message = await this.fetchJoke()

      const participantData = {
        id:localStorage.getItem("id"),
        date:Date.now(),
        message,
        OrganizerId:localStorage.getItem("eventId"),
        name:localStorage.getItem("name"),
        imgUrl
      }

      db.collection('participants').doc(participantData.id).set(participantData)
      .then(response => console.log("Antre Success"))
      .catch(error => console.log(error))
    },
    deleteParticipant(id){
      db.collection("participants").doc(id).delete()
      .then(response => console.log(response))
      .catch(error => console.log(error))
    },
    async fetchJoke(){
      try {
        const response = await axios.get(
          BASE_URL + '/generators/jokes', {},
        )
        return response.data.joke
      } catch (error) {
        console.log(error);
      }
    },
    fetchImgUrl(){
      return 'https://robohash.org/' + localStorage.getItem("name")
    },
    async LoginOrganizer(user){
      try {
        const response = await axios.post(
          BASE_URL + '/organizers/login',
          user
        )
        localStorage.setItem("eventId", response.data.id)
        localStorage.setItem("role", "organizer")
        localStorage.setItem("name", response.data.name)
        localStorage.setItem("id", response.data.id)
        localStorage.setItem("email", response.data.email)
        localStorage.setItem("access_token", response.data.access_token)
      } catch (error) {
        console.log(error);
      }
    },
    createEvent(event){
      event.name = localStorage.getItem('name')

      db.collection("organizers").doc(localStorage.getItem("eventId")).set(event)
      .then(response => console.log('Success creating event'))
      .catch(error => console.log(error))
    }
  }
})

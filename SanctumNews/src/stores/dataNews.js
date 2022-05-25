import { defineStore } from 'pinia'
import { base_URL } from './Url'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useDataNews = defineStore('News', {
  state: () => ({
    dataNews: [],
    pages: [],
    dataWeather : []
  }),
  getters: {

  },
  actions: {
    async fetchNews(id) {
      try {
        const data = await axios({
          method: 'GET',
          url: base_URL + `?page=${id}`
        })
        this.dataNews = data.data
        this.pages = data.data.pages
      } catch (error) {
        if(error){
          Swal.fire(
            'Something Wrong!',
            'error'
          )
        }
      }
    },

    async Weather(id="jakarta"){
      try {
          const dataWeather = await axios({
            method: 'GET',
            url: base_URL + `weather?place=${id}`
          })
          this.dataWeather = dataWeather.data
      } catch (error) {
        if(error){
          Swal.fire(
            'Something Wrong!',
            'error'
          )
        }
      }
    }
  }
})

import { defineStore } from 'pinia'
import { base_URL } from './Url'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useDataNews = defineStore('News', {
  state: () => ({
    dataNews: [],
    pages: [],
    dataWeather: [],
    searchWeather: "jakarta",
    category: '',
    dataLink: '',
    dataURL: '',
    titlefav: '',
    descriptionfav: '',
    thumbnailfav: '',
    dataFavorite: []
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
        this.category = data.data.category
      } catch (error) {
        if (error) {
          Swal.fire(
            'Something Wrong!',
            'error'
          )
        }
      }
    },

    async Weather() {
      try {
        const dataWeather = await axios({
          method: 'GET',
          url: base_URL + `weather?place=${this.searchWeather}`
        })
        this.dataWeather = dataWeather.data
      } catch (error) {
        if (error) {
          Swal.fire(
            'Something Wrong!',
            'error'
          )
        }
      }
    },
    async Category(id) {
      try {
        this.category = id
        const data = await axios({
          method: 'GET',
          url: base_URL + `${id}`,
        })
        this.dataNews = data.data
      } catch (error) {
        Swal.fire(
          'Ohh Noo',
          `${error.response.data.message}`,
          'error'
        )
      }
    },

    async Detail() {
      try {
        if (this.dataURL) {
          localStorage.setItem('url', this.dataURL)
        }
        let link = localStorage.getItem('url')
        if (this.category == undefined) {
          this.category = 'terbaru'
        }
        if (this.category) {
          localStorage.setItem('category', this.category)
        }
        let linkCategory = localStorage.getItem('category')
        const data = await axios({
          method: 'POST',
          url: base_URL + `${linkCategory}/detailNews`,
          data: {
            url: link
          }
        })
        this.dataLink = data.data.temp
      } catch (error) {
        if (error) {
          Swal.fire(
            'Ohh Noo',
            `Something Wrong`,
            'error'
          )
        }
      }
    },

    async AddFavorite() {
      try {
        const data = await axios({
          method: 'POST',
          url: base_URL + "favoritesNews",
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: {
            url: localStorage.getItem('url'),
            title: this.titlefav,
            description: this.descriptionfav,
            thumbnail: this.thumbnailfav
          }
        })
        Swal.fire(
          'Berhasil Ditambahkan',
          'success'
        )
      } catch (error) {
        Swal.fire(
          'Ohh Noo',
          `${error.response.data.message}`,
          'error'
        )
      }
    },

    async showFavorite() {
      try {
        const data = await axios({
          method: 'get',
          url: base_URL + "favoritesList/List",
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataFavorite = data.data
      } catch (error) {
        Swal.fire(
          'Silakan Pilih Favoritemu',
          `${error.response.data.message}`,
          'error'
        )
      }
    },

    async Delete(params) {
      try {
        const data = await axios({
          method: 'delete',
          url: base_URL + 'delete',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: {
            url: params
          }
        })
        Swal.fire(
          'Okee',
          `${data.data.message}`,
          'success'
        )
        this.showFavorite()
      } catch (error) {
        if(error){
          Swal.fire(
            'Something Wrong',
            'error'
          )
        }
      }
    }
  }
})

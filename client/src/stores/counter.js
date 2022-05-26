import { defineStore } from "pinia";
import axios from 'axios'

export const useRadioStore = defineStore({
  id: "radio",
  state: () => ({
    counter: 0,
    listRadio: [],
    baseUrl: 'http://localhost:3000',
    totalPage: '',
    oneData: '',
    searchName: '',
    page: '',
    allMusic: '',
    songName: '',
    oneData: '',
    musicId: '',
    radioPosition: '',
    markers: []
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async getAllRadio(page) {
      try {
        this.page = page
        page == typeof ('NaN') ? page = 0 : page
        const url = this.baseUrl + `/?page=${page - 1}&radioName=${this.searchName}`
        let resposnse = await axios(url)
        this.listRadio = resposnse.data.data
        this.totalPage = resposnse.data.totalPage
        console.log(resposnse);
        this.router.push(`/radios`)
        this.searchName = ''

      } catch (err) {
        console.log(this.page);
        this.getAllRadio(this.page)
        console.log(err);
      }
    },
    async getRadioById(id) {
      try {
        const url = this.baseUrl + `/${id}`
        let data = await axios.get(url)
        this.oneData = data.data[0]
        this.router.push(`/player/${id}`)
      } catch (err) {
        this.getRadioById(id)
        console.log(err);

      }
    },
    clearSearch() {
      this.searchName = ''
      this.getAllRadio()
    },
    move(name) {
      this.router.push(`/${name}`)
    },
    async searchSong(){
      try {
        console.log('aaaaaaa');
        const url = this.baseUrl + '/songs'
        const response = await axios.post(url, {artist: this.songName})
        // this.router.push('/music')
        this.allMusic = response.data
        this.songName = ''
        console.log(this.allMusic);
      } catch (err) {
        this.searchSong()
        console.log(err);
      }
    },
    async searchMusicById(id) {
      try {
        this.musicId = id
        const url = this.baseUrl + `/songs/${id}`
        const response = await axios.get(url)
        this.oneData = response.data
        console.log(this.oneData);
        this.router.push(`/music/${id}`)
      } catch (err) {
        this.searchMusicById(this.musicId)
        console.log(err);
      }
    },
    
    async getRadiByVote() {
      try {
        const url = this.baseUrl + '/radios/vote'
        const response = await axios.get(url)
        this.listRadio = response.data
        console.log(this.listRadio);
      } catch (err) {
        this.getRadiByVote()
        console.log(err);
      }
    },

    async getRadioPos(){
      try {
        const url = this.baseUrl + '/radioPosition'
        const response = await axios.get(url)
        let temp = response.data.data
        temp.forEach(el => {
          this.markers.push({
            position: el.position,
            detail: el.name,
            stationId: el.stationId
          })
        })
        console.log(this.markers);

      } catch (err) {
        this.getRadioPos()
        console.log(err);
      }
    }

  },
});

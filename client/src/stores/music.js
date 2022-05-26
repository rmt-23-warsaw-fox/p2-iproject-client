import { defineStore } from "pinia";
import axios from 'axios'

export const useMusicStore = defineStore({
  id: "music",
  state: () => ({
    counter: 0,
    listRadio: [],
    baseUrl: 'http://localhost:3000',
    allMusic: '',
    songName: '',
    oneData: '',
    musicId: ''
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    move(name) {
      this.router.push(`/${name}`)
    },
    // async searchSong(){
    //   try {
    //     console.log('aaaaaaa');;
    //     const url = this.baseUrl + '/songs'
    //     const response = await axios.post(url, {artist: this.songName})
    //     // this.router.push('/music')
    //     this.allMusic = response.data
    //     console.log(this.allMusic);
    //   } catch (err) {
    //     this.searchSong()
    //     console.log(err);
    //   }
    // },
    // async searchMusicById(id) {
    //   try {
    //     this.musicId = id
    //     const url = this.baseUrl + `/songs/${id}`
    //     const response = await axios.get(url)
    //     this.oneData = response.data
    //     console.log(this.oneData);
    //     this.router.push(`/music/${id}`)
    //   } catch (err) {
    //     this.searchMusicById(this.musicId)
    //     console.log(err);
    //   }
    // }

  },
});

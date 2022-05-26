import { defineStore } from "pinia"
import axios from "axios"

export const usePoofStore = defineStore({
  id: "poof",
  state: () => ({
    URL: "https://dota2poof.herokuapp.com",
    username: null,
    signinData: {
      email: null,
      password: null,
    },
    signupData: {
      username: null,
      email: null,
      password: null,
      dotaId: null,
    },
    signedin: false,
    teams: null,
    team: null,
    playerDetail: null,
    heroes: null,
    heroDetail: null,
    matches: null,
    background: localStorage.getItem("background"),
  }),
  getters: {},
  actions: {
    move(page) {
      this.router.push(`${page}`)
    },
    signout() {
      localStorage.clear()
      // Toast.fire({
      //   icon: "info",
      //   title: "You've Signed Out",
      // })
      this.move("/signin")
      this.signedin = false
    },

    async getBackground(words) {
      try {
        const { data } = await axios.request({
          method: "POST",
          url: "https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud",
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Host": "textvis-word-cloud-v1.p.rapidapi.com",
            "X-RapidAPI-Key": "33ec59de20mshb24982809031f2ep1c0cdcjsne477a9ead1ea",
          },
          data: `{"text":"${words}","scale":1,"width":1000,"height":800,"colors":["#375E97","#FB6542","#FFBB00","#3F681C"],"font":"Tahoma","use_stopwords":true,"language":"en","uppercase":true}`,
        })
        this.background = data
        localStorage.setItem("background", data)
      } catch (err) {
        console.log(err)
      }
    },
    async signin() {
      try {
        const { data } = await axios({
          method: "post",
          url: `${this.URL}/users/login`,
          data: { ...this.signinData },
        })
        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem("username", data.username)
        this.username = data.username
        this.signedin = true
        this.username = data.username
        this.signinData.email = ""
        this.signinData.password = ""
        this.move("/1")
      } catch (err) {
        console.log(err)
      }
    },

    async signup() {
      try {
        const { data } = await axios({
          method: "post",
          url: `${this.URL}/users/register`,
          data: { ...this.signupData },
        })
        this.signupData.email = ""
        this.signupData.username = ""
        this.signupData.password = ""
        this.signupData.dotaId = ""
        this.move("/signin")
        this.signedin = true
      } catch (err) {
        console.log(err.response.data.error.message)
      }
    },

    async home(page) {
      try {
        const { data } = await axios({
          method: "get",
          url: `${this.URL}/dota/heroes`,
          headers: {
            access_token: localStorage.getItem("access_token"),
            page: page - 1,
          },
        })
        this.heroes = data.heroes
        this.move(`/${page}`)
        this.getBackground()
      } catch (err) {}
    },

    async getTeams(page) {
      try {
        const { data } = await axios({
          method: "get",
          url: `${this.URL}/dota/teams`,
          headers: {
            access_token: localStorage.getItem("access_token"),
            page: page - 1,
          },
        })
        this.teams = data.teams
        this.move(`/teams/${page}`)
      } catch (err) {
        console.log(err)
      }
    },

    async getTeamDetail(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: `${this.URL}/dota/teams/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        this.team = data.data
        this.move(`/teams/detail/${id}`)
      } catch (err) {
        console.log(err)
      }
    },

    async getProProfile(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: `https://api.opendota.com/api/players/${id}`,
        })
        this.playerDetail = data
        this.move(`/profile/${id}`)
      } catch (err) {
        console.log(err)
      }
    },

    async getUser() {
      try {
        const { data } = await axios({
          method: "get",
          url: `${this.URL}/dota/matches`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        this.matches = data.data
        this.move("/matches")
      } catch (err) {
        console.log(err)
      }
    },
    //! END OF LINE
  },
})

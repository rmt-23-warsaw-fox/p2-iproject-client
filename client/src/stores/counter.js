import { defineStore } from "pinia"
import axios from "axios"

export const usePoofStore = defineStore({
  id: "poof",
  state: () => ({
    URL: "http://localhost:3000",
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
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
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

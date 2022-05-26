import { defineStore } from "pinia"
import axios from "axios"

export const usePoofStore = defineStore({
  id: "poof",
  state: () => ({
    URL: "http://localhost:3000",
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
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    move(page) {
      this.router.push(`${page}`)
    },

    async signin() {
      try {
        const { data } = await axios({
          method: "post",
          url: `${this.URL}/users/login`,
          data: { ...this.signinData },
        })
        localStorage.setItem("access_token", data.access_token)
        this.signedin = true
        this.signinData.email = ""
        this.signinData.password = ""
        this.move("/")
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
      } catch (err) {
        console.log(err.response.data.error.message)
      }
    },
    //! END OF LINE
  },
})

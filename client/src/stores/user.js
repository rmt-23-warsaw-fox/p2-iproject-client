import { defineStore } from 'pinia'
import axiosInstance from '../api/myserver'
import Swal from 'sweetalert'
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    isLogin : false,
    myProfile : []
  }),
  getters: {

  },
  actions: {
    async register(objUser){
      try {
        console.log("asd")
        const {data} = await axiosInstance({
          url : 'users/register',
          method : 'POST',
          data : objUser
        })

        Swal({
          text : "Register Success",
          icon : "success"
        })

        this.router.push('/login')
      } catch (err) {
        console.log(err)
        Swal({
          text: err.response.data.message,
          icon : 'error'
        })
      }
    },
    
    async login(objUser){
      try {
        const {data} = await axiosInstance({
          method : 'POST',
          url : 'users/login',
          data : objUser
        })

        localStorage.setItem('access_token',data.access_token)

        this.isLogin = true

        Swal({
          text : "login Success",
          icon : "success"
        })

        this.router.push('/myprofile')
      } catch (err) {
        Swal({
          text: err.response.data.message,
          icon : 'error'
        })
      }
    },

    async getProfile(){
      try {
        const {data} = await axiosInstance({
          method : 'GET',
          url : 'valodatas/profile',
          headers : {
            access_token : localStorage.getItem("access_token")
          }
        })
        console.log(data)
        this.myProfile = data 
      } catch (err) {
        console.log(err)
      }
    }
  }
})

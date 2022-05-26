import { defineStore } from 'pinia'
import axiosvaloapi from '../api/thirdparty'
import myapi from '../api/myserver'
import swal from 'sweetalert'
export const useMyValoDataStore = defineStore({
  id: 'valodata',
  state: () => ({
    maps : [],
    myMatch : {}
  }),
  getters: {

  },
  actions: {
    async getMap(){
      try {
        const {data} = await axiosvaloapi({
          method : 'GET',
          url : 'maps'
        })
        //const diti = data.map(el=> el.splash)
        const maps = data.data.map(el=>{
          if(el.displayName!==''){
            const map = {
              displayName : el.displayName,
              imageUrl : el.splash
            }
            return map
          }
        })

        let fixmaps = []

        maps.forEach(el => {
          if(el.displayName !== 'The Range') {
            fixmaps.push(el)
          }
        })

        this.maps = fixmaps

        
      } catch (err) {
        console.log(err)
      }
    },

    async getMatchData(objQuery){
      try {
        let url
        const {map,mode} = objQuery
        url = `valodatas/matches?mode=${mode}&map=${map}`
        const {data} = await myapi({
          method: 'GET',
          headers : {
            access_token : localStorage.getItem("access_token")
          },
          url : url
        })
        console.log(data)
        this.myMatch = data
      } catch (err) {
        swal({
          title : err.response.data.message,
          text : `maybe it's way too long ago`,
          icon : 'error'
        })
      }
    }
  }
})

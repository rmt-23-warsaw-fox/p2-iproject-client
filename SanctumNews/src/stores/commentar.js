import { defineStore } from 'pinia'
import { base_URL } from './Url'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useDataComment = defineStore('Comment', {
    state: () => ({
        comments: '',
        dataComment: ''
    }),
    getters: {
  
    },
    actions: {
        async Comments (){
            try {
                const data = await axios({
                    method: 'POST',
                    url: base_URL + 'comments/news',
                    headers :{
                        access_token : localStorage.getItem('access_token')
                    },
                    data:{
                        comment: this.comments,
                        url : localStorage.getItem('url')
                    }  
                })
                this.dataComment = data.data
            } catch (error) {
                if(error.response.data.message=="Invalid Token"){

                }else{
                    Swal.fire(
                        'Isi Komentar Anda',
                        `${error.response.data.message}`,
                        'error'
                      )
                }
            }finally{
                this.comments= ""
            }
        },
    }
  })
  
import { defineStore } from 'pinia'
import { base_URL } from './Url'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useDataRegister = defineStore('Register', {
    state: () => ({
        username: '',
        email: '',
        password: ''
    }),
    getters: {
  
    },
    actions: {
        async Register (){
            try {

                const data = await axios({
                    method: 'POST',
                    url: base_URL + 'register',
                    data:{
                        username: this.username,
                        email: this.email,
                        password: this.password
                    }  
                })

                this.router.push('/login')
                Swal.fire(
                    'Silakan Login',
                    'success'
                  )
            } catch (error) {
                Swal.fire(
                    'Ohh Noo',
                    `${error.response.data.message}`,
                    'error'
                  )
            }
        }
    }
  })
  
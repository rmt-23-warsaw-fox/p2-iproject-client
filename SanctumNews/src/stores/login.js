import { defineStore } from 'pinia'
import { base_URL } from './Url'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useDataLogin = defineStore('Login', {
    state: () => ({
        email: '',
        password: '',
        TokenGoogle: ''
    }),
    getters: {

    },
    actions: {
        async Login() {
            try {
                const data = await axios({
                    method: 'POST',
                    url: base_URL + 'login',
                    data: {
                        email: this.email,
                        password: this.password
                    }
                })
                localStorage.setItem('access_token', data.data.access_token)
                this.router.push('/')
                Swal.fire(
                    'Selamat Datang',
                    `Silakan Membaca`,
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

        async LoginGoogle() {
            try {
                const data = await axios({
                    method: 'POST',
                    url: base_URL + 'login-google',
                    data: {
                        token: this.TokenGoogle
                    }
                })
                localStorage.setItem('access_token', data.data.access_token)
                Swal.fire('Thank You For Joining', `Welcome to This Universe`, 'success')
                this.router.push("/")
            } catch (error) {
                Swal.fire(
                    'Something went wrong',
                    'error'
                )
            }
        }
    }
})

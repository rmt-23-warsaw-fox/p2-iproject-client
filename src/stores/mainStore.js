import {defineStore} from 'pinia';
import mainAxios from '../api/mainApi.js';

export const mainStore = defineStore('mainStore', {
actions: {
    async register(formObject){
        try {
            const {email, displayName, password} = formObject;
            const response = await mainAxios.post('/register', {
                displayName,
                email,
                password
            })
            console.log('Register Successful');
        } catch (err) {
            console.log(err);
        }
    },

    async login(formObject){
        try {
            const {email, password} = formObject;
            const response = await mainAxios.post('/login', {
                email,
                password
            })
            console.log('Welcome!');
        } catch (err) {
            console.log(err);
        }
    }
}
})
import axios from 'axios'
const instance = axios.create({
    baseURL: "https://rent-room-official.herokuapp.com"
})

export default instance;
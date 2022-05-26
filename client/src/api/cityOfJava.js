import axios from 'axios'

const instance = axios.create({
    baseURL: "https://dev.farizdotid.com/api/daerahindonesia"
})

export default instance;
import axios from 'axios';
const mainAxios = axios.create({
    baseURL: "http://localhost:5050"
})
export default mainAxios;

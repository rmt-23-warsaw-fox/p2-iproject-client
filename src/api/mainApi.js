import axios from 'axios';
const mainAxios = axios.create({
    baseURL: "https://ancient-eyrie-19634.herokuapp.com"
})
export default mainAxios;

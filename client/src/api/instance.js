import axios from "axios";
const instance = axios.create({
  baseURL: "https://homie-iproject-mario.herokuapp.com",
});

export default instance;

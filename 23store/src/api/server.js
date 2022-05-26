import axios from "axios";
const localhost = "http://localhost:3000";
const deploy = "https://store23-project.herokuapp.com";

const server = axios.create({
  baseURL: deploy,
});

export default server;

import axios from "axios";
const localhost = "http://localhost:3000";

const server = axios.create({
  baseURL: localhost,
});

export default server;

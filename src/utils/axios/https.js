import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

const http = axios.create({
  baseURL,
  headers: {
    "auth-token": "",
    "Content-Type": "application/json",
  },
});

export default http;
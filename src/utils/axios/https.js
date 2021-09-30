import axios from "axios";
let token = localStorage.token;


export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});


export const httpv2 = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_V2,
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});



export const google_auth_request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});


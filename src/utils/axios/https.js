import axios from "axios";
import {store} from "../../redux/store";
const baseURL = process.env.REACT_APP_BASE_URL;

 const state = store.getState();
 const authToken = state.LoginReducer.token;

const http = axios.create({
  baseURL,
  headers: {
     Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json",
  },
});

export default http;
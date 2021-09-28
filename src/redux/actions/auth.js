import {types} from "./types";
import http from "../../utils/axios/https";

export const loginRequest = (Email, Password) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_LOADING, payload:true});
      dispatch({ type: types.LOGIN_REQUEST_ERROR, payload: null});
   const res = await http.post("/auth/login",{
     email: Email,
     password: Password
   });
 dispatch({ type: types.LOGIN_REQUEST,payload:res.data.payload});
  } catch (error) {
   dispatch({ type: types.LOGIN_REQUEST_ERROR,payload: error.response.data.message[0]});
         dispatch({ type: types.LOGIN_LOADING, payload:false});
}
};
export const signupRequest = (payload) => async (dispatch) => {
  try {
    dispatch({ type: types.SIGNUP_LOADING, payload:true});
    const res = await http.post("/auth/signup");

    console.log(payload,res);
    
  } catch (error) {
   console.log(error);
}
};
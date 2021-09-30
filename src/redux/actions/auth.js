import {types} from "./types";
import {google_auth_request, http} from "../../utils/axios/https";

export const loginRequest = (Email, Password) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_LOADING, payload:true});
      dispatch({ type: types.LOGIN_REQUEST_ERROR, payload: null});
   const res = await http.post("/auth/login",{
     email: Email,
     password: Password
   });
   localStorage.setItem("token", res.data.payload.accessToken);
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
export const logoutRequest = () => async (dispatch) => {
  try {
    dispatch({ type: types.LOGOUT_REQUEST});
    localStorage.clear();
  } catch (error) {
   console.log(error);
}
};

export const signupWithGoogleRequest = () => async (dispatch) => {
  try {
    dispatch({ type: types.SIGNUP_LOADING, payload:true});
      dispatch({ type: types.SIGNUP_REQUEST_ERROR, payload: false});
   const res = await google_auth_request.post("/auth/sign-up/third-party");
console.log(res);
 dispatch({ type: types.SIGNUP_REQUEST,payload:true});
  } catch (error) {
         dispatch({ type: types.SIGNUP_LOADING, payload:false});
}
 dispatch({ type: types.SIGNUP_REQUEST,payload:false});
  dispatch({ type: types.SIGNUP_LOADING, payload:false});
};

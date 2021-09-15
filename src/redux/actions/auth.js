import {types} from "./types";
import users from "../../utils/user.json";

export const loginRequest = (Email, Password) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_LOADING, payload:true});
setTimeout(() => {
 let user= users.filter((user) => user.email === Email && 
    user.password === Password);

if(user){
    dispatch({ type: types.LOGIN_REQUEST,payload:user[0]});
    dispatch({ type: types.LOGIN_LOADING, payload:false});
    
}else{
     dispatch({ type: types.LOGIN_REQUEST_ERROR,payload:"Incorrect credentials"});
         dispatch({ type: types.LOGIN_LOADING, payload:false});
}
},3000);
   
  } catch (error) {
   console.log(error);
}
};
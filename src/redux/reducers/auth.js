
import { types } from "../actions/types";

const initialState = {
isLoading: false,
user:null,
error:"",
token:"",

};
const signupInitialState = {
isLoading: false,
signupStatus: null,
success_msg: null,
errors: []
};
export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_LOADING:
      return {
        ...state,
     isLoading: action.payload,
      };
    case types.LOGIN_REQUEST_ERROR:
      return {
        ...state,
     error: action.payload,
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
     isLoading: action.payload,
     user: action.payload.user,
     token: action.payload.accessToken,
      };
    case types.LOGOUT_REQUEST:
      return {
       isLoading: false,
user:null,
error:"",
token:""
      };
    default:
      return state;
  }
};



export const SignupReducer = (state =  signupInitialState, action) => {
  switch (action.type) {  
      case types.SIGNUP_LOADING:
      return {
        ...state,
       isLoading: action.payload,
      };
        case types.SIGNUP_REQUEST_SUCCESS:
      return {
        ...state,
       success_msg: action.payload,
      };
      case types.SIGNUP_REQUEST_ERROR:
      return {
        ...state,
       errors: action.payload,
      };
    default:
     return state;
  }

};
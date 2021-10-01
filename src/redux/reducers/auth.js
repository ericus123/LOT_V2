
import { types } from "../actions/types";

const initialState = {
isLoading: false,
user:null,
error:"",
token:""
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
     token: action.payload.accessToken
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

import {combineReducers} from "redux";
import EventReducer from "./events";
import {LoginReducer, SignupReducer} from "./auth";
import StaffsReducer from "./staffs";


const allReducers = combineReducers({
    LoginReducer,
    StaffsReducer,
    EventReducer,
    SignupReducer
    
});

export default allReducers;



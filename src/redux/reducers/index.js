import {combineReducers} from "redux";
import {LoginReducer} from "./auth";
import StaffsReducer from "./staffs";


const allReducers = combineReducers({
    LoginReducer,
    StaffsReducer
});

export default allReducers;



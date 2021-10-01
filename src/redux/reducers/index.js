import {combineReducers} from "redux";
import {LoginReducer} from "./auth";
import EventReducer from "./events";
import StaffsReducer from "./staffs";


const allReducers = combineReducers({
    LoginReducer,
    StaffsReducer,
    EventReducer
});

export default allReducers;



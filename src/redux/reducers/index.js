import {combineReducers} from "redux";
import AuthReducer from "./auth";
import StaffsReducer from "./staffs";


const allReducers = combineReducers({
    AuthReducer,
    StaffsReducer
});

export default allReducers;



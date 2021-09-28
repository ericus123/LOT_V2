import {types} from "./types";
import http from "../../utils/axios/https";

export const getCompaniesRequest = () => async (dispatch) => {
     dispatch({ type: types.GET_COMPANIES_LOADING, payload:true});
  try {
   
    const res = await http.get("/companies");
    dispatch({type: types.GET_COMPANIES_REQUEST, payload: res.data.payload.data});
    
  } catch (error) {
  dispatch({ type: types.GET_COMPANIES_REQUEST ,payload:null});
}
 dispatch({type: types.GET_COMPANIES_LOADING, payload: false});
};

export const getEmployeesRequest = () => async (dispatch) => {
     dispatch({ type: types.GET_EMPLOYEES_LOADING, payload:true});
  try {
   
    const res = await http.get("/employees");
    dispatch({type: types.GET_EMPLOYEES_REQUEST, payload: res.data.payload.data});
    
  } catch (error) {
  dispatch({ type: types.GET_EMPLOYEES_REQUEST ,payload:null});
}
 dispatch({type: types.GET_EMPLOYEES_LOADING, payload: false});
};


import {types} from "./types";
import {http, httpv2} from "../../utils/axios/https";

export const getCompaniesRequest = () => async (dispatch) => {
     dispatch({ type: types.GET_COMPANIES_LOADING, payload:true});
  try {
   
    const res = await http.get("/companies?limit=1000000000");
    dispatch({type: types.GET_COMPANIES_REQUEST, payload: res.data.payload.data});
    
  } catch (error) {
  dispatch({ type: types.GET_COMPANIES_REQUEST ,payload:null});
}
 dispatch({type: types.GET_COMPANIES_LOADING, payload: false});
};
export const rateCompaniesRequest = (id,value) => async (dispatch) => {
     dispatch({ type: types.RATE_COMPANIES_LOADING, payload:true});
  try {
    const res = await http.put(`/companies/${id}/rate`,{
      rate: value
    });
    dispatch({type: types.RATE_COMPANIES_REQUEST, payload: res.data.message});
    
  } catch (error) {
  dispatch({ type: types.RATE_COMPANIES_REQUEST ,payload:null});
}
 dispatch({type: types.RATE_COMPANIES_LOADING, payload: false});
};

export const getEmployeesRequest = () => async (dispatch) => {
     dispatch({ type: types.GET_EMPLOYEES_LOADING, payload:true});
  try {
   
    const res = await httpv2.get("/employees");
    dispatch({type: types.GET_EMPLOYEES_REQUEST, payload: res.data.payload.data});
    
  } catch (error) {
  dispatch({ type: types.GET_EMPLOYEES_REQUEST ,payload:null});
}
 dispatch({type: types.GET_EMPLOYEES_LOADING, payload: false});
};




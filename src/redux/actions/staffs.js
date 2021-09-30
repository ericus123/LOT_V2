/* eslint-disable no-unused-vars */
import {types} from "./types";
import {http, httpv2} from "../../utils/axios/https";
import { errorMessage, successMessage } from "../../components/popups/popupMessages";

export const getCompaniesRequest = () => async (dispatch) => {
     dispatch({ type: types.GET_COMPANIES_LOADING, payload:true});
  try {
   
    const res = await http.get("/companies?limit=1000000000");
    dispatch({type: types.GET_COMPANIES_REQUEST, payload: res.data.payload.data});

  } catch (error) { 
  dispatch({ type: types.GET_COMPANIES_REQUEST ,payload:null});
  errorMessage("Something went wrong");
}
 dispatch({type: types.GET_COMPANIES_LOADING, payload: false});
};
export const rateCompaniesRequest = (id,company,payload) => async (dispatch) => {
     dispatch({ type: types.RATE_COMPANIES_LOADING, payload:true});
  try {
    // eslint-disable-next-line no-unused-vars
    const res = await http.put(`/companies/${id}/rate`,payload);
    dispatch({type: types.RATE_COMPANIES_REQUEST, payload: true});
    successMessage(`${company} is rated successfuly`);
  } catch (error) {
  errorMessage("Something went wrong");
  dispatch({ type: types.RATE_COMPANIES_REQUEST ,payload:null});
}
 dispatch({type: types.RATE_COMPANIES_LOADING, payload: false});
 dispatch({type: types.RATE_COMPANIES_REQUEST, payload: false});
};

export const deleteCompaniesRequest = (id,company) => async (dispatch) => {
     dispatch({ type: types.DELETE_COMPANIES_LOADING, payload:true});
  try {
    // eslint-disable-next-line no-unused-vars
    const res = await http.delete(`/companies/${id}`);
    dispatch({type: types.DELETE_COMPANIES_REQUEST, payload: true});
    successMessage(`${company} is deleted successfuly`);
  } catch (error) {
  errorMessage("Something went wrong");
  dispatch({ type: types.DELETE_COMPANIES_REQUEST ,payload:null});
}
 dispatch({type: types.DELETE_COMPANIES_LOADING, payload: false});
 dispatch({type: types.DELETE_COMPANIES_REQUEST, payload: false});
};
export const deleteEmployeeRequest = (id,name) => async (dispatch) => {
     dispatch({ type: types.DELETE_EMPLOYEE_LOADING, payload:true});
  try {
    // eslint-disable-next-line no-unused-vars
    const res = await http.delete(`/employees/${id}`);
    dispatch({type: types.DELETE_EMPLOYEE_REQUEST, payload: true});
    successMessage(`${name} is deleted successfuly`);
  } catch (error) {
    console.log(error,error.response);
  errorMessage("Something went wrong");
  dispatch({ type: types.DELETE_EMPLOYEE_REQUEST ,payload:null});
}
 dispatch({type: types.DELETE_EMPLOYEE_LOADING, payload: false});
 dispatch({type: types.DELETE_EMPLOYEE_REQUEST, payload: false});
};
export const postCompaniesRequest =({company_name,size}, picture) => async (dispatch) => {
     dispatch({ type: types.POST_COMPANIES_LOADING, payload:true});
  try {
    const res = await http.post("/companies",{
      name:company_name,
      size: size,
      picture: picture
    });
    dispatch({type: types.POST_COMPANIES_REQUEST, payload: true});
    successMessage("Company created successfuly");
  } catch (error) {
    errorMessage("Something went wrong");

   dispatch({type: types.POST_COMPANIES_LOADING, payload: false});
}
 dispatch({type: types.POST_COMPANIES_LOADING, payload: false});
   dispatch({ type: types.POST_COMPANIES_REQUEST ,payload:false});
};
export const postEmployeeRequest =({first_name, last_name,email}, picture) => async (dispatch) => {
     dispatch({ type: types.POST_EMPLOYEE_LOADING, payload:true});
  try {
    const res = await httpv2.post("/employees",{
      firstName:first_name,
      lastName: last_name,
      email:email,
      picture: picture
    });
    dispatch({type: types.POST_EMPLOYEE_REQUEST, payload: true});
    successMessage("Employee created successfuly");
  } catch (error) {
    errorMessage("Something went wrong");

   dispatch({type: types.POST_EMPLOYEE_LOADING, payload: false});
}
 dispatch({type: types.POST_EMPLOYEE_LOADING, payload: false});
   dispatch({ type: types.POST_EMPLOYEE_REQUEST ,payload:false});
};

export const getEmployeesRequest = () => async (dispatch) => {
     dispatch({ type: types.GET_EMPLOYEES_LOADING, payload:true});
  try {
   
    const res = await httpv2.get("/employees?status=ALL");
    dispatch({type: types.GET_EMPLOYEES_REQUEST, payload: res.data.payload.data});
    
  } catch (error) {
      errorMessage("Something went wrong");
  dispatch({ type: types.GET_EMPLOYEES_REQUEST ,payload:null});
}
 dispatch({type: types.GET_EMPLOYEES_LOADING, payload: false});
};




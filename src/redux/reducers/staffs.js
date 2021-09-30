
import { types } from "../actions/types";

const initialState = {
companies: [],
companiesLoading: false,
employees: [],
employeesLoading: false,
companyCreated: false,
employeeCreated: false,
errors: [],
rateIsLoading: false,
rated: false,
deleted: false,
deleteIsLoading: false
};

const StaffsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COMPANIES_LOADING:
      return {
        ...state,
     companiesLoading: action.payload,
      };
    case types.GET_COMPANIES_REQUEST:
      return {
        ...state,
      companies: action.payload
      };
    case types.RATE_COMPANIES_LOADING:
      return {
        ...state,
     rateIsLoading: action.payload,
      };
    case types.RATE_COMPANIES_REQUEST:
      return {
        ...state,
      rated: action.payload
      };
    case types.DELETE_COMPANIES_LOADING:
      return {
        ...state,
     deleteIsLoading: action.payload,
      };
    case types.DELETE_COMPANIES_REQUEST:
      return {
        ...state,
      deleted: action.payload
      };
    case types.DELETE_EMPLOYEE_LOADING:
      return {
        ...state,
     deleteIsLoading: action.payload,
      };
    case types.DELETE_EMPLOYEE_REQUEST:
      return {
        ...state,
      deleted: action.payload
      };
    case types.POST_COMPANIES_LOADING:
      return {
        ...state,
     companiesLoading: action.payload,
      };
    case types.POST_COMPANIES_REQUEST:
      return {
        ...state,
      companyCreated: action.payload
      };
    case types.POST_COMPANIES_REQUEST_ERROR:
      return {
        ...state,
      errors: action.payload
      };
        case types.POST_EMPLOYEE_LOADING:
      return {
        ...state,
     employeesLoading: action.payload,
      };
    case types.POST_EMPLOYEE_REQUEST:
      return {
        ...state,
      employeeCreated: action.payload
      };
    case types.POST_EMPLOYEE_REQUEST_ERROR:
      return {
        ...state,
      errors: action.payload
      };
    case types.GET_EMPLOYEES_LOADING:
      return {
        ...state,
     employeesLoading: action.payload,
      };
    case types.GET_EMPLOYEES_REQUEST:
      return {
        ...state,
      employees: action.payload
      };
      
    default:
      return state;
  }
};

export default StaffsReducer;
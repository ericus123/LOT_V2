
import { types } from "../actions/types";

const initialState = {
companies: [],
companiesLoading: false,
employees: [],
employeesLoading: false,
ratingLoading: false,
ratingSuccesful:null

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
     rateLoading: action.payload,
      };
    case types.RATE_COMPANIES_REQUEST:
      return {
        ...state,
      ratingSuccesful: action.payload
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
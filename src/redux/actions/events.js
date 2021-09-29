import {types} from "./types";
import {http} from "../../utils/axios/https";

export const getEventsRequest = () => async (dispatch) => {
     dispatch({ type: types.GET_EVENTS_LOADING, payload:true});
  try {
   
    const res = await http.get("/events");
    dispatch({type: types.GET_EVENTS_REQUEST, payload: res.data.payload.data});
    
  } catch (error) {
  dispatch({ type: types.GET_EVENTS_REQUEST ,payload:null});
}
 dispatch({type: types.GET_EVENTS_LOADING, payload: false});
};
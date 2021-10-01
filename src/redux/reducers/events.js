
import { types } from "../actions/types";

const initialState = {
events: [],
eventsLoading: false,
};

const EventReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_EVENTS_LOADING:
      return {
        ...state,
     eventsLoading: action.payload,
      };
    case types.GET_EVENTS_REQUEST:
      return {
        ...state,
      events: action.payload
      };
    default:
      return state;
  }
};

export default EventReducer;
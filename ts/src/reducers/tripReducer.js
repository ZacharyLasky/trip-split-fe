import * as type from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  info: []
};

export const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE_TRIP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case type.CREATE_TRIP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        info: action.payload
      };
    case type.CREATE_TRIP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};

import * as type from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  info: []
};

export const EbpReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.UPDATE_EBP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case type.UPDATE_EBP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        info: action.payload
      };
    case type.UPDATE_EBP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};

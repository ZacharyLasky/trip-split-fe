import * as types from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  info: []
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REG_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case types.REG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        info: action.payload
      };
    case types.REG_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};

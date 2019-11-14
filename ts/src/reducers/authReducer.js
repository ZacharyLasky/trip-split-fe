import * as type from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  info: []
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.REG_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case type.REG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        info: action.payload
      };
    case type.REG_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    case type.LOG_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case type.LOG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        info: action.payload
      };
    case type.LOG_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};

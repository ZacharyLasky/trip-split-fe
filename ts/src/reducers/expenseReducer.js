import * as type from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  info: []
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE_EXPENSE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case type.CREATE_EXPENSE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        info: action.payload
      };
    case type.CREATE_EXPENSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};

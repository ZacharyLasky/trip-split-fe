import * as type from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  info: []
};

export const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE_PERSON_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case type.CREATE_PERSON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        info: action.payload
      };
    case type.CREATE_PERSON_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    // case type.GET_PERSONS_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //     error: false
    //   };
    // case type.GET_PERSONS_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: false
    //   };
    // case type.GET_PERSONS_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: true
    //   };
    default:
      return state;
  }
};

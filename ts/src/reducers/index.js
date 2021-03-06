import { combineReducers } from "redux";
import { authReducer } from "./authReducer.js";
import { tripReducer } from "./tripReducer.js";
import { personReducer } from "./personReducer.js";
import { expenseReducer } from "./expenseReducer.js";
import { EbpReducer } from "./EbpReducer.js";

export const rootReducer = combineReducers({
  auth: authReducer,
  trip: tripReducer,
  person: personReducer,
  expense: expenseReducer,
  ebp: EbpReducer
});

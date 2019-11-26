import { combineReducers } from "redux";
import { authReducer } from "./authReducer.js";
import { tripReducer } from "./tripReducer.js";

export const rootReducer = combineReducers({ authReducer, tripReducer });

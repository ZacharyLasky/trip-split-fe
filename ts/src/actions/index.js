import axios from "axios";
import * as type from "./actionTypes.js";
import { axiosWithAuth } from "../utilities/axiosWithAuth.js";

export const postRegister = info => {
  return dispatch => {
    dispatch({ type: type.REG_REQUEST });
    axiosWithAuth()
      .post("/api/auth/register", info)
      .then(res => {
        console.log("REG MESSAGE:", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.user.name);
        dispatch({ type: type.REG_SUCCESS, payload: res.data });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: type.REG_FAILURE, payload: error.response });
      });
  };
};

export const postLogin = info => {
  return dispatch => {
    dispatch({ type: type.LOG_REQUEST });
    axiosWithAuth()
      .post("/api/auth/login", info)
      .then(res => {
        console.log("LOG MESSAGE:", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.name);
        dispatch({ type: type.LOG_SUCCESS, payload: res.data });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: type.LOG_FAILURE, payload: error.response });
      });
  };
};

import axios from "axios";
//import { axiosWithAuth } from '../utilities/axiosWithAuth'
import * as type from "./actionTypes.js";

export const postRegister = info => {
  return dispatch => {
    dispatch({ type: type.REG_REQUEST });
    axios
      .post("http://localhost:6123/api/auth/register", info)
      .then(res => {
        console.log("REG MESSAGE:", res.data);
        dispatch({ type: type.REG_SUCCESS, payload: res.data });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: type.REG_FAILURE, payload: error.response });
      });
  };
};

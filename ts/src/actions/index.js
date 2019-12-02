import axios from "axios";
import * as type from "./actionTypes.js";
import { axiosWithAuth } from "../utilities/axiosWithAuth.js";

//AUTH
export const postRegister = (info, props) => {
  return dispatch => {
    dispatch({ type: type.REG_REQUEST });
    axiosWithAuth()
      .post("/api/auth/register", info)
      .then(res => {
        console.log("REG MESSAGE:", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.user.id);
        localStorage.setItem("name", res.data.user.name);
        dispatch({ type: type.REG_SUCCESS, payload: res.data });
        props.history.push("/dashboard");
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: type.REG_FAILURE, payload: error.response });
      });
  };
};

export const postLogin = (info, props) => {
  return dispatch => {
    dispatch({ type: type.LOG_REQUEST });
    axiosWithAuth()
      .post("/api/auth/login", info)
      .then(res => {
        console.log("LOG MESSAGE:", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.userId);
        localStorage.setItem("name", res.data.name);
        dispatch({ type: type.LOG_SUCCESS, payload: res.data });
        props.history.push("/dashboard");
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: type.LOG_FAILURE, payload: error.response });
      });
  };
};

//TRIP
export const postTrip = (info, props) => {
  return dispatch => {
    dispatch({ type: type.CREATE_TRIP_REQUEST });
    axiosWithAuth()
      .post("/api/trip", info)
      .then(res => {
        console.log("TRIP MESSAGE:", res);
        localStorage.setItem("tripId", res.data.id);
        dispatch({ type: type.CREATE_TRIP_SUCCESS, payload: res.data });
        props.history.push("/person");
      })
      .catch(error => {
        dispatch({ type: type.CREATE_TRIP_FAILURE, payload: error.response });
      });
  };
};

export const postPerson = (info, props) => {
  return dispatch => {
    dispatch({ type: type.CREATE_PERSON_REQUEST });
    axiosWithAuth()
      .post("/api/person", info)
      .then(res => {
        localStorage.setItem("person", res.data.name);
        dispatch({ type: type.CREATE_PERSON_SUCCESS, payload: res.data });
      })
      .catch(error => {
        dispatch({ type: type.CREATE_PERSON_FAILURE, payload: error.response });
      });
  };
};

export const postExpense = (info, props) => {
  return dispatch => {
    dispatch({ type: type.CREATE_EXPENSE_REQUEST });
    axiosWithAuth()
      .post("/api/expense", info)
      .then(res => {
        localStorage.setItem("expenseId", res.data.id);
        localStorage.setItem("person", res.data.name);
        dispatch({ type: type.CREATE_EXPENSE_SUCCESS, payload: res.data });
        props.history.push("/ebp");
      })
      .catch(error => {
        dispatch({
          type: type.CREATE_EXPENSE_FAILURE,
          payload: error.response
        });
      });
  };
};

export const updateEbp = (info, props) => {
  return dispatch => {
    dispatch({ type: type.UPDATE_EBP_REQUEST });
    axiosWithAuth()
      .put("/api/ebp", info)
      .then(res => {
        dispatch({ type: type.UPDATE_EBP_SUCCESS, payload: res.data });
      })
      .catch(error => {
        dispatch({
          type: type.UPDATE_EBP_FAILURE,
          payload: error.response
        });
      });
  };
};

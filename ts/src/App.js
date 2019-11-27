import React, { useEffect } from "react";
import { NavLink, Route, BrowserRouter } from "react-router-dom";
import { withRouter } from "react-router";
// COMPONENT IMPORTS
import PrivateRoute from "./components/PrivateRoute.js";
import Header from "./components/header/Header.js";
import Landing from "./components/landing/Landing.js";
import Register from "./components/auth/Register.js";
import Login from "./components/auth/Login.js";
import Dashboard from "./components/dashboard/Dashboard.js";
import Trip from "./components/trip/Trip.js";
import Person from "./components/person/Person.js";
// STYLE IMPORTS
import "./App.css";

function App(props) {
  // CHECK LOCAL STORAGE
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const name = localStorage.getItem("name");
  useEffect(() => {
    if (!token || !id || !name) {
      console.log("HISTORY:", props.history);
      props.history.push("/");
    }
  }, []);
  return (
    <div className="App">
      <switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/newTrip" component={Trip} />
        <PrivateRoute path="/person" component={Person} />
      </switch>
    </div>
  );
}
export default withRouter(App);

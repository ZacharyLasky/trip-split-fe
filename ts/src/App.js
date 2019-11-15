import React from "react";
import { NavLink, Route, BrowserRouter } from "react-router-dom";
// COMPONENT IMPORTS
import PrivateRoute from "./components/PrivateRoute.js";
import Header from "./components/header/Header.js";
import Landing from "./components/landing/Landing.js";
import Register from "./components/auth/Register.js";
import Login from "./components/auth/Login.js";
import Dashboard from "./components/dashboard/Dashboard.js";
// STYLE IMPORTS
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <switch>
        <BrowserRouter>
          {/* <NavLink exact to="/"></NavLink>
          <NavLink to="/register"></NavLink> */}

          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </BrowserRouter>
      </switch>
    </div>
  );
}

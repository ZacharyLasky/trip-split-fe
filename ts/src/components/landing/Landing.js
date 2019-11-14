import React from "react";
import { NavLink, Route, BrowserRouter } from "react-router-dom";
//STYLE IMPORTS
import LandingStyle from "./LandingStyle.scss";

function Landing(props) {
  const toLanding = () => {
    window.location = window.location;
  };
  const toLogin = () => {
    props.history.push("/login");
  };
  const toRegister = () => {
    props.history.push("/register");
  };
  return (
    <div className="LandingContainer">
      <div className="Header">
        <h1 onClick={toLanding}>TRIP SPLIT</h1>
      </div>
      <div className="SectionDiv">
        <div className="Login" onClick={toLogin}>
          <h2>Returning User</h2>
          <h1>Log In</h1>
        </div>
        <div className="Register" onClick={toRegister}>
          <h2>New User</h2>
          <h1>Sign Up</h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;

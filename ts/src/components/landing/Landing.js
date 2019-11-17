import React from "react";
import { NavLink, Route, BrowserRouter } from "react-router-dom";
//COMPONENT IMPORTS
import Header from "../../components/header/Header.js";
//STYLE IMPORTS
import LandingStyle from "./LandingStyle.scss";

function Landing(props) {
  const toLogin = () => {
    props.history.push("/login");
  };
  const toRegister = () => {
    props.history.push("/register");
  };
  return (
    <>
      <Header />
      <div className="LandingContainer">
        <div className="sec-1">
          <div className="hello1" onClick={toLogin}>
            <h1>HELLO</h1>
            <h2>returning user</h2>
          </div>
          <div className="login" onClick={toLogin}>
            <h1>LOG IN</h1>
          </div>
        </div>
        <div className="sec-2">
          <div className="hello2" onClick={toRegister}>
            <h1>HELLO</h1>
            <h2>new user</h2>
          </div>
          <div className="register" onClick={toRegister}>
            <h1>SIGN UP</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;

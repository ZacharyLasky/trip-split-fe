import React from "react";
//COMPONET IMPORTS
import HeaderModal from "../header/HeaderModal.js";
//STYLE IMPORTS
import HeaderStyle from "./HeaderStyle.scss";

function Header() {
  const reload = () => {
    window.location = window.location;
  };
  return (
    <div className="Header">
      <div className="HeaderDiv">
        <HeaderModal />
        <h1 onClick={reload}>SIGN UP</h1>
      </div>
    </div>
  );
}

export default Header;

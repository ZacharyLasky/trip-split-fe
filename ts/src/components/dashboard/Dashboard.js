import React from "react";
import DashHeader from "../../components/header/DashHeader.js";

//STYLE IMPORTS
import DashboardStyle from "./DashboardStyle.scss";

export default function Dashboard() {
  return (
    <>
      <DashHeader />
      <div className="dash-container">
        <div className="dash">
          <div className="hello">
            <h1>HELLO</h1>
            <h2>name</h2>
          </div>
          <div className="trips">
            <button>NEW TRIP</button>
            <button>ALL TRIPS</button>
          </div>
        </div>
      </div>
    </>
  );
}

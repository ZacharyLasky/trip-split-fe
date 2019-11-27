import React from "react";
import DashHeader from "../../components/header/DashHeader.js";
import { withRouter } from "react-router";

//STYLE IMPORTS
import DashboardStyle from "./DashboardStyle.scss";

export default function Dashboard(props) {
  const name = localStorage.getItem("name");
  return (
    <>
      <DashHeader />
      <div className="dash-container">
        <div className="dash">
          <div className="hello">
            <h1>HELLO</h1>
            <h2>{name}</h2>
          </div>
          <div className="trips">
            <div className="new">
              <button onClick={() => props.history.push("/newTrip")}>
                NEW TRIP
              </button>
            </div>
            <div className="all">
              <button>ALL TRIPS</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

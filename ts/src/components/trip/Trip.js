import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { axiosWithAuth } from "../../utilities/axiosWithAuth.js";

import TripHeader from "../header/TripHeader.js";
import DashboardCard from "../dashboard/DashboardCard.js";
import Expenses from "../expense/Expenses.js";

//STYLE IMPORTS
import TripStyle from "./TripStyle.scss";
//PICTURE IMPORTS
import arrow from "../../assets/dash/arrow.png";

export default function Trip(props) {
  //TRIP DATA LOCAL STORAGE
  const [data, setData] = useState([]);

  //GET LAST TRIP OF CURRENT USER
  useEffect(() => {
    const user = localStorage.getItem("id");
    axiosWithAuth()
      .get(`/api/trip/last/user/${user}`)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <TripHeader />
      <div className="trip">
        <div className="add">
          {data.map(trips => {
            return (
              <h1>
                <DashboardCard trips={trips} />
              </h1>
            );
          })}
          <button onClick={() => props.history.push("/expense")}>
            ADD EXPENSE
          </button>
        </div>
        <div className="expenses">
          <h1>EXPENSES</h1>
          <img src={arrow} />
        </div>
        <div className="items">
          <Expenses />
        </div>
      </div>
    </>
  );
}

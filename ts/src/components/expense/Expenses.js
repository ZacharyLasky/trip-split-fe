import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { axiosWithAuth } from "../../utilities/axiosWithAuth.js";

import ExpensesCard from "./ExpensesCard.js";

export default function Trip(props) {
  //TRIP DATA LOCAL STORAGE
  const [data, setData] = useState([]);

  //GET LAST TRIP OF CURRENT USER
  useEffect(() => {
    const tripId = localStorage.getItem("tripId");
    axiosWithAuth()
      .get(`/api/expense/trip/${tripId}`)
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
      <div className="expenses">
        {data.map(expenses => {
          return (
            <h1>
              <ExpensesCard expenses={expenses} />
            </h1>
          );
        })}
      </div>
    </>
  );
}

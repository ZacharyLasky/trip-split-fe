import React, { useEffect, useState } from "react";
import DashHeader from "../../components/header/DashHeader.js";
import DashboardCard from "./DashboardCard.js";
import { withRouter } from "react-router";
import { axiosWithAuth } from "../../utilities/axiosWithAuth.js";

//STYLE IMPORTS
import DashboardStyle from "./DashboardStyle.scss";
//PICTURE IMPORTS
import arrow from "../../assets/dash/arrow.png";

function Dashboard(props) {
  const name = localStorage.getItem("name");
  const user = localStorage.getItem("id");
  const tripId = localStorage.getItem("tripId");

  //TRIP DATA LOCAL STORAGE
  const [data, setData] = useState([]);

  //GET LAST TRIP OF CURRENT USER
  useEffect(() => {
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
        <div className="cur-trip">
          <h1>CURRENT TRIP</h1>
          <img src={arrow} />
          {data.map(trips => {
            return (
              <button>
                <DashboardCard trips={trips} />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Dashboard;

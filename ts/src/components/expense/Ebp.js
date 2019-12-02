import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utilities/axiosWithAuth.js";
import PersonCard from "../person/PersonCard.js";
import EbpCard from "./EbpCard.js";
function Epb() {
  const [data, setData] = useState([]);
  //GET ALL USERS ON CURRENT TRIP
  useEffect(() => {
    const tripId = localStorage.getItem("tripId");
    axiosWithAuth()
      .get(`/api/person/trip/${tripId}`)
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
      <div className="persons">
        {data.map(person => {
          return (
            <h1>
              <EbpCard person={person} />
            </h1>
          );
        })}
      </div>
    </>
  );
}

export default Epb;

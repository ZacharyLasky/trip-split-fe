import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { postPerson } from "../../actions/index.js";
import { withRouter } from "react-router";
import { axiosWithAuth } from "../../utilities/axiosWithAuth.js";

// COMPONENT IMPORTS
import NewTripHeader from "../header/NewTripHeader.js";
import PersonCard from "./PersonCard.js";
//STYLE IMPORTS
import PersonStyle from "./PersonStyle.scss";

function Person(props) {
  //LOCAL STORAGE ITEMS
  const tripId = localStorage.getItem("tripId");
  const person = localStorage.getItem("person");

  //USER DATA LOCAL STATE
  const [data, setData] = useState([]);

  //GET USERS ON SPECIFIC TRIP
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/person/trip/${tripId}`)
      .then(res => {
        console.log("RES", res.data);
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    //UPDATE EACH TIME USER IS ADDED IN LOCAL STORAGE
  }, [person]);

  //TRIP INFO LOCAL STATE
  const [info, setInfo] = useState({
    name: ""
  });

  //HANDLES EACH CHARACTER TYPED
  function handleChange(e) {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  }

  //HANDLES CLICKING SUBMIT OR PRESSING ENTER KEY
  function handleSubmit(e) {
    //NO AUTO-REFRESH
    e.preventDefault();
    console.log("PROPS", props);
    //SEND TRIP INFO TO CREATE TRIP FUNCTION IN ACTIONS
    const tripId = localStorage.getItem("tripId");
    console.log("TID:", tripId);
    const args = {
      ...info,
      trip_id: tripId
    };
    props.postPerson(args, props);
    setInfo({ name: "" });
  }

  return (
    <>
      <NewTripHeader />
      <div className="person-container">
        <div className="person-form">
          <form onSubmit={handleSubmit}>
            <div className="hello">
              <h1>HELLO</h1>
              <h2>who's going?</h2>
            </div>
            <div className="inp">
              <input
                type="text"
                name="name"
                value={info.name}
                placeholder="name"
                onChange={handleChange}
              />
            </div>
            <button>ENTER</button>
          </form>
          <div className="name-display">
            {data.map(person => {
              return (
                <h1>
                  <PersonCard person={person} />
                </h1>
              );
            })}

            <button onClick={() => props.history.push("/dashboard")}>
              DONE ADDING PEOPLE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, {
  postPerson
})(Person);

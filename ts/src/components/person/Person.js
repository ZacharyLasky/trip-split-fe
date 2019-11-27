import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { postPerson } from "../../actions/index.js";
import NewTripHeader from "../header/NewTripHeader.js";

//STYLE IMPORTS
import PersonStyle from "./PersonStyle.scss";

function Person(props) {
  const person = localStorage.getItem("person");

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
            <h1>{person}</h1>
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

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { postTrip } from "../../actions/index.js";
import NewTripHeader from "../header/NewTripHeader.js";

//STYLE IMPORTS
import NewTripStyle from "./NewTripStyle.scss";

function NewTrip(props) {
  console.log("STATE", props);

  //TRIP INFO LOCAL STATE
  const [info, setInfo] = useState({
    title: ""
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
    const id = localStorage.getItem("id");
    const args = {
      ...info,
      user_id: id
    };
    props.postTrip(args, props);
  }

  return (
    <>
      <NewTripHeader />
      <div className="trip-form">
        <form onSubmit={handleSubmit}>
          <div className="hello">
            <h1>HELLO</h1>
            <h2>where are you going?</h2>
          </div>
          <div className="inp">
            <input
              type="text"
              name="title"
              value={info.title}
              placeholder="trip title"
              onChange={handleChange}
            />
          </div>
          <button>ENTER</button>
        </form>
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
  postTrip
})(NewTrip);

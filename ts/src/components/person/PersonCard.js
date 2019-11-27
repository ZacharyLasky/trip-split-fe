import React from "react";
import Person from "./Person";

function PersonCard(props) {
  return (
    <div>
      <h1>{props.person.name}</h1>
      {/* <h1>{props.person.trip_id}</h1> */}
    </div>
  );
}

export default PersonCard;

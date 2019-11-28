import React from "react";

function PersonCard(props) {
  return (
    <div>
      <h1>{props.person.name}</h1>
    </div>
  );
}

export default PersonCard;

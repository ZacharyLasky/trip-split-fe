import React from "react";

function EbpCard(props) {
  return (
    <div>
      <h1>ID: {props.person.id}</h1>
      <h1>NAME: {props.person.name}</h1>
    </div>
  );
}

export default EbpCard;

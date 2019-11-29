import React, { useState } from "react";
import { connect } from "react-redux";
import { postExpense } from "../../actions/index.js";
import ExpenseHeader from "../../components/header/ExpenseHeader";
import { withRouter } from "react-router";

//STYLE IMPORTS
import ExpenseStyle from "./ExpenseStyle.scss";

function Expense(props) {
  console.log("STATE", props);

  //TRIP INFO LOCAL STATE
  const [info, setInfo] = useState({
    title: "",
    amount: ""
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
    const args = {
      ...info,
      trip_id: tripId
    };
    props.postExpense(args, props);
    setInfo({ title: "", amount: "" });
  }

  return (
    <>
      <ExpenseHeader />
      <div className="expense-form">
        <form onSubmit={handleSubmit}>
          <div className="hello1">
            <h1>HELLO</h1>
            <h2>what's the expense?</h2>
          </div>
          <div className="inp1">
            <input
              type="text"
              name="title"
              value={info.title}
              placeholder="expense title"
              onChange={handleChange}
            />
          </div>
          <div className="hello2">
            <h1>HELLO</h1>
            <h2>what's the cost?</h2>
          </div>
          <div className="inp2">
            <input
              type="text"
              name="amount"
              value={info.amount}
              placeholder="expense total cost"
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
  postExpense
})(Expense);

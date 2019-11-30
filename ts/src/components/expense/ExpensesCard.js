import React from "react";
import ExpensesCardStyle from "./ExpensesCardStyle.scss";

export default function ExpenseCard(props) {
  return (
    <div className="card">
      <h1>${props.expenses.amount}</h1>
      <h1>{props.expenses.title}</h1>
    </div>
  );
}

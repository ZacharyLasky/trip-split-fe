import React, { useState } from "react";
import { connect } from "react-redux";
import { postRegister } from "../../actions/index.js";

//STYLE IMPORTS
import RegisterStyle from "./RegisterStyle.scss";

function Register(props) {
  //USER INFO LOCAL STATE
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: ""
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
    //SEND USER INFO TO POST REGISTER FUNCTION IN ACTIONS
    props.postRegister(info);
  }

  return (
    <div className="regForm">
      <form onSubmit={handleSubmit}>
        <div className="hello">
          <h1>HELLO</h1>
          <h2>my name is</h2>
          <input
            type="text"
            name="name"
            value={info.name}
            placeholder="enter name"
            onChange={handleChange}
          />
        </div>
        <h1>Email</h1>
        <input
          type="email"
          name="email"
          value={info.email}
          placeholder="enter email"
          onChange={handleChange}
        />
        <h1>Password</h1>
        <input
          type="password"
          name="password"
          value={info.password}
          placeholder="choose password"
          onChange={handleChange}
        />
        <button>Create</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, {
  postRegister
})(Register);

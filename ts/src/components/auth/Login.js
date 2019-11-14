import React, { useState } from "react";
import { connect } from "react-redux";
import { postLogin } from "../../actions/index.js";

function Login(props) {
  //USER INFO LOCAL STATE
  const [info, setInfo] = useState({
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
    props.postLogin(info);
  }

  return (
    <div className="regForm">
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={info.email}
              placeholder="enter email"
              onChange={handleChange}
            />
          </li>
          <li>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={info.password}
              placeholder="choose password"
              onChange={handleChange}
            />
          </li>
          <button>Enter</button>
        </ul>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  {
    postLogin
  }
)(Login);

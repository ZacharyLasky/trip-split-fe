import React, { useState } from "react";
import { connect } from "react-redux";
import { postLogin } from "../../actions/index.js";
import LoginHeader from "../../components/header/LoginHeader.js";

//STYLE IMPORTS
import LoginStyle from "./LoginStyle.scss";

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
  }

  //HANDLES CLICKING SUBMIT OR PRESSING ENTER KEY
  function handleSubmit(e) {
    //NO AUTO-REFRESH
    e.preventDefault();
    //SEND USER INFO TO POST REGISTER FUNCTION IN ACTIONS
    props.postLogin(info);
  }
  return (
    <>
      <LoginHeader />
      <div className="logForm">
        <form onSubmit={handleSubmit}>
          <div className="hello1">
            <h1>HELLO</h1>
            <h2>my email is</h2>
          </div>
          <div className="inp1">
            <input
              type="email"
              name="email"
              value={info.email}
              placeholder="enter email"
              onChange={e => {
                const emVal = e.target.value;
                const up = emVal.toUpperCase();
                setInfo({
                  ...info,
                  email: up
                });
                console.log(up);
              }}
            />
          </div>
          <div className="hello2">
            <h1>HELLO</h1>
            <h2>my password is</h2>
          </div>
          <div className="inp2">
            <input
              type="password"
              name="password"
              value={info.password}
              placeholder="choose password"
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
  postLogin
})(Login);

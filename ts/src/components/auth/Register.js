import React, { useState } from "react";
import { connect } from "react-redux";
import { postRegister } from "../../actions/index.js";
import RegisterHeader from "../../components/header/RegisterHeader.js";

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
    <>
      <RegisterHeader />
      <div className="regForm">
        <form onSubmit={handleSubmit}>
          <div className="hello1">
            <h1>HELLO</h1>
            <h2>my name is</h2>
          </div>
          <div className="inp1">
            <input
              type="text"
              name="name"
              value={info.name}
              placeholder="enter name"
              onChange={handleChange}
            />
          </div>
          <div className="hello2">
            <h1>HELLO</h1>
            <h2>my email is</h2>
          </div>
          <div className="inp2">
            <input
              type="email"
              name="email"
              value={info.email}
              placeholder="enter email"
              onChange={e => {
                const myVar = e.target.value;
                const myVarUpper = myVar.toUpperCase();
                setInfo({
                  ...info,
                  email: myVarUpper
                });
                console.log(myVarUpper);
              }}
            />
          </div>
          <div className="hello3">
            <h1>HELLO</h1>
            <h2>my password is</h2>
          </div>
          <div className="inp3">
            <input
              type="password"
              name="password"
              value={info.password}
              placeholder="choose password"
              onChange={handleChange}
            />
          </div>
          <button>CREATE</button>
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
  postRegister
})(Register);

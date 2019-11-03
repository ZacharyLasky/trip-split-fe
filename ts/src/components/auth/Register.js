import React, { useState } from "react";
import { connect } from "react-redux";
import { postRegister } from "../../actions/index.js";

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
    console.log("info", info);
    //NO AUTO-REFRESH
    e.preventDefault();
    props.postRegister(info);
  }

  return (
    <div className="regForm">
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={info.name}
              placeholder="enter name"
              onChange={handleChange}
            />
          </li>
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
          <button>Submit</button>
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
    postRegister
  }
)(Register);

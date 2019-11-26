import React from "react";

function Trip(props) {
  //TRIP INFO LOCAL STATE
  const [info, setInfo] = useState({
    title: ""
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
    //SEND TRIP INFO TO CREATE TRIP FUNCTION IN ACTIONS
    props.postRegister(info, props);
  }

  return (
    <div className="trip-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="trip"
          value={info.title}
          placeholder="trip title"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Trip;

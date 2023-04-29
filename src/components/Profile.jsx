import React, { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <React.Fragment>
      <h1>Profile Section</h1>
      <h3>my name is {props.name}</h3>
      <h3>{count}, {count2}</h3>

      <button onClick={()=>{
        setCount(1);
        setCount2(2);
      }}>on Click </button>
    </React.Fragment>
  );
};

export default Profile;

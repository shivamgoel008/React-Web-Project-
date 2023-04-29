import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <React.Fragment>
      <h1>About Us</h1>
      <Outlet/>
    </React.Fragment>
  );
};

export default About;

import React from "react";
import { Outlet } from "react-router-dom";

const About2 = () => {
  return (
    <React.Fragment>
      <h1>About Us</h1>
      <Outlet/>
    </React.Fragment>
  );
};

class About extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    return(
      <React.Fragment>
        <h1>About Us</h1>
        <Outlet/>
      </React.Fragment>
    )
  }
}

export default About;

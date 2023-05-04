import { userInfo } from "os";
import React from "react";
import userContext from "../Utlis/userContext";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor")
    this.state = {
      count: 0,
      count2: 0,
      userInfo: {},
    };
  }

  async componentDidMount() {
    console.log("Component Did mount ");
    const data = await fetch("https://api.github.com/users/shivamgoel008");
    const json = await data.json();
    this.setState({
      userInfo:json,
    });
    console.log(json);
  }


  componentDidUpdate(){
    console.log("Component updated");
  }

  componentWillUnmount(){
    console.log("Component Unmount")
  }

  render() {
    console.log("rendering");
    return (
      <React.Fragment>
        <userContext.Consumer>
          {(value)=>console.log(value)}
        </userContext.Consumer>
        <h1>Class Based Profile Component</h1>
        <img src={this.state.userInfo.avatar_url}/>
        <h3>My name is {this.state.userInfo.name} </h3>
        <h3>Living in city: {this.state.userInfo.location}</h3>
        
        {console.log(userInfo)}
      </React.Fragment>
    );
  }
}

export default ProfileClass;


/*
-mounting
child constructor 
child render 
componentDidMount 
API call 
setState

-Updating 
render 
componentdidUpdate

-Unmounting 
componentWillUnmount


*/

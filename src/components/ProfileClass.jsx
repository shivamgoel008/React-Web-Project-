import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }

  render() {
    // console.log(count);
    return (
      <React.Fragment>
        <h1>Class Based Profile Component</h1>
        <h3>My name is {this.props.name} </h3>
        
       
        <button
          onClick={() => {
            // we can set the value of state varibles partially
            this.setState({
              count: 1,
              count2: 5,
            });
          }}
        >
          on Click
        </button>

        <h3>Count: {this.state.count}, {this.state.count2}</h3>
      </React.Fragment>
    );
  }
}

export default ProfileClass;

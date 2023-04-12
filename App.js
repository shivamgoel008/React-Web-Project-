import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
  return (
    <React.Fragment>
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://img.freepik.com/premium-vector/tray-food-gourmet-address-location-pin-logo-design-app-icon-vector-template-concept-idea_537522-60.jpg?w=2000"
          />
        </div>
        <div className="nav-items-container">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <div className="app">
        <Header />
      </div>
    </React.Fragment>
  );
};

console.log(<Header />);
console.log(<AppLayout />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

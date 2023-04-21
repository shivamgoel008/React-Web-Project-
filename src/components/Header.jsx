import React from "react";
import { LOGO_URL } from "../Utlis/constants";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
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

export default Header;

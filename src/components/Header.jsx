import React from "react";
import { LOGO_URL } from "../Utlis/constants";
import { Link } from "react-router-dom";
import {AiOutlineHome} from "react-icons/fa"

const Header = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between shadow-lg mb-8">
        <Link to ="/">
        <div className="logo-container p-3">
          <img className="h-24" src={LOGO_URL} />
        </div>
        </Link>

        <div className="flex py-14 pr-12">
          <ul className="flex  space-x-6 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to ="/instamart">Instamart</Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;

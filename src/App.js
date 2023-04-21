import React from "react";
import ReactDOM from "react-dom/client";
import Headers from "./components/Header.jsx";
import Body from "./components/Body.jsx";

/*
Headers
  - logo
  - NavItems

Body
  - Search
  - Restaunrant Conatiner
    - Restaurant card
      - Image
      - Name of Res, Star Rating, Cuisines, delery tie

Footer
  - Coptright
  - Link 
  - Address
  - Contacts

*/

const AppLayout = () => {
  return (
    <React.Fragment>
      <div className="app">
        <Headers />
        <Body />
      </div>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

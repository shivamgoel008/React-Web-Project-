import React from "react";
import ReactDOM from "react-dom/client";
import Headers from "./components/Header.jsx";
import Body from "./components/Body.jsx";



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

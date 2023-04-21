import React from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import resList from "../Utlis/mockData.js";

const Body = () => {
  const steps = [];
  for (let i = 0; i < 8; i++) {
    steps.push(<RestaurantCard resData={resList[i]} />);
  }
  return (
    <React.Fragment>
      <div className="body">
        <div className="search">
          {/* todo */}
          search
        </div>

        <div className="res-container">{steps}</div>
      </div>
    </React.Fragment>
  );
};

export default Body;

import React from "react";
import { CDN_URL } from "../Utlis/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    props.resData.data;
  return (
    <React.Fragment>
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>popular cuisines {cuisines.join(", ")}</h4>
        <h4>Avg Rating {avgRating}</h4>
        <h4>Delivery Time {deliveryTime}</h4>
      </div>
    </React.Fragment>
  );
};

export default RestaurantCard;

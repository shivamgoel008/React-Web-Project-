import React from "react";
import { CDN_URL } from "../Utlis/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    props.resData.data;
  return (
    <React.Fragment>
      <div className="res-card max-w-sm min-h-fit rounded-3xl overflow-hidden shadow-lg m-14">
        <img
          className="res-logo w-full"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">
            popular cuisines {cuisines.join(", ")}
          </p>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Avg Rating {avgRating}
            </span>
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Delivery Time {deliveryTime}
            </span>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RestaurantCard;

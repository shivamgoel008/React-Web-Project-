import React from "react";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import resList from "../Utlis/mockData.js";

const Body = () => {
  // hooks => [variable, function to update this varibale] and is an array 
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  const x = [];

  for (i = 0; i < listOfRestaurants.length; i++) {
    x.push(
      <RestaurantCard
        key={listOfRestaurants[i].data.id}
        resData={listOfRestaurants[i]}
      />
    );
  }

  return (
    <React.Fragment>
      <div className="body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filterData = listOfRestaurants.filter(
                (res) => res.data.avgRating >= 4
              );
              console.log(listOfRestaurants);
              console.log(filterData);
              setListOfRestaurants(filterData);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Body;

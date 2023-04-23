import React, { useEffect, useState } from "react";
import resList from "../Utlis/mockData.js";
import RestaurantCard from "./RestaurantCard.jsx";

const Body = () => {
  // hooks => [variable, function to update this varibale] and is an array
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [searchText, setSearchText] = useState("");
  useEffect(()=>{console.log(getRestaurants())},[])

  async function getRestaurants(){
    const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5135223&lng=77.4135367&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json);
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }

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
        <input
          className="search-input"
          placeholder="Search"
          type="text"
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
        />

        <button
        className="search-btn"
        onClick={() => {
          const filterData = listOfRestaurants.filter((restaurant) => restaurant.data.name.includes(searchText));
          setListOfRestaurants(filterData)
        }}
        >
          Search
        </button>

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

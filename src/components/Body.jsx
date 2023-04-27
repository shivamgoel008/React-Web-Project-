import React, { useEffect, useState } from "react";
import resList from "../Utlis/mockData.js";
import RestaurantCard from "./RestaurantCard.jsx";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";

const Body = () => {
  // hooks => [variable, function to update this varibale] and is an array
  const [listOfAllRestaurants, setListOfAllRestaurants] = useState([]);
  const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState(
    []
  );

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log(getRestaurants());
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5135223&lng=77.4135367&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setListOfFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (listOfFilteredRestaurants.length === 0) {
    <Shimmer />;

    return <h1>No Result Found</h1>;
  }

  return listOfAllRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <React.Fragment>
      <div className="body">
        <input
          className="search-input"
          placeholder="Search"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const filterData = listOfAllRestaurants.filter((restaurant) =>
              restaurant?.data?.name
                ?.toLowerCase()
                ?.includes(searchText.toLowerCase())
            );
            setListOfFilteredRestaurants(filterData);
          }}
        >
          Search
        </button>

        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filterData = listOfFilteredRestaurants.filter(
                (res) => res.data.avgRating >= 4
              );
              setListOfFilteredRestaurants(filterData);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="res-container">
          {listOfFilteredRestaurants.map((restaurant) => (
            <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
            
            <RestaurantCard  resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Body;

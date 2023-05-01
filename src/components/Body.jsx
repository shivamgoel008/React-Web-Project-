import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard.jsx";
import Shimmer from "./Shimmer.jsx";
import useOnline from "../Utlis/useOnline.js";

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

  const online = useOnline();

  if (!online) {
    return <h1>🦉No Internet Connection</h1>;
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
        <input className="search-input" />
        <label class="flex">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20" />
          </span>
          <input
            className="w-80 mx-4 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
            placeholder="Search"
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(e.target.value);
            }}
            value={searchText}
            name="search"
          />
          <button
            className="search-btn rounded-full bg-blue-400 py-1 pb-1 px-4 hover:bg-blue-600 "
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
        </label>

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

        <div className="res-container flex flex-wrap ">
          {listOfFilteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Body;

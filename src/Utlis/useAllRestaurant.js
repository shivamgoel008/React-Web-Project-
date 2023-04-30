import React,{useState,useEffect} from "react";

const useAllRestaurant=()=>{
    const [listOfAllRestaurants, setListOfAllRestaurants] = useState([]);
    
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5135223&lng=77.4135367&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); 
  }

  return listOfAllRestaurants;
}

export default useAllRestaurant;
import { useEffect, useState } from "react";
import { FETCH_MENU_HEAD_URL, FETCH_MENU_TAIL_URL } from "./constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_HEAD_URL + resId + FETCH_MENU_TAIL_URL);
    const json = await data.json();
    console.log(json);
    setRestaurant(json);
  }

  return restaurant;
};

export default useRestaurant;

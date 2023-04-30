import React from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../Utlis/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const menu =
    restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <React.Fragment>
      {console.log(menu)}
      <h1>This is menu of {useParams().resId}</h1>
      <h4>{restaurant?.data?.cards[0]?.card?.card?.info.name}</h4>
      <h4>{restaurant?.data?.cards[0]?.card?.card?.info.areaName}</h4>
      <h4>{restaurant?.data?.cards[0]?.card?.card?.info.city}</h4>
      <h4>{restaurant?.data?.cards[0]?.card?.card?.info.avgRating}</h4>
      <h4>{restaurant?.data?.cards[0]?.card?.card?.info.costForTwo}</h4>
      <div>
        <ul>
          {menu
            ?.slice(1)
            ?.map((res) =>
              res?.card?.card?.itemCards?.map((res2) => (
                <li>{res2?.card.info?.name}</li>
              ))
            )}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default RestaurantMenu;

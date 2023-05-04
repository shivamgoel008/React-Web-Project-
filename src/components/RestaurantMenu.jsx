import React from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../Utlis/useRestaurant";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const menu =
    restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const menuList=[];
    menu
      ?.slice(1)
      ?.map((res) =>
        res?.card?.card?.itemCards?.map((res2) => (
          menuList.push(res2?.card.info?.name)
          
        ))
      )


    const obj={
      name:restaurant?.data?.cards[0]?.card?.card?.info.name,
      areaName:restaurant?.data?.cards[0]?.card?.card?.info.areaName,
      city:restaurant?.data?.cards[0]?.card?.card?.info.city,
      avgRating:restaurant?.data?.cards[0]?.card?.card?.info.avgRating,
      costForTwo:restaurant?.data?.cards[0]?.card?.card?.info.costForTwo,
      menuList:menuList
    }

  return (
    <React.Fragment>
      {console.log(menu)}

      <RestaurantMenuCard menuList={obj}/>
      
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

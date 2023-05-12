import React from "react";
import { CDN_URL, GENERIC_FOOD_URL } from "../Utlis/constants";
import { BsFillSquareFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItem } from "../Utlis/cartSlice";

const RestaurantMenuCard = ({ menuData }) => {
  console.log(menuData);
  const dispatch = useDispatch();
  handleAddItem = (menuItemName) => {
    dispatch(addItem(menuItemName));
  };
  return (
    <React.Fragment>
      <div className="flex justify-between mx-40 my-10 card lg:card-side bg-base-100 shadow-xl p-4 border-2 border-b-gray-500 rounded-3xl">
        <div className="flex-col">
          {menuData?.isVeg == true ? (
            <h6 className="text-green-600">Veg</h6>
          ) : (
            <h6 className="text-red-500">Non Veg</h6>
          )}
          <h3 className="">{menuData?.name}</h3>
          <h5 className="my-2">₹{menuData?.price / 100}</h5>
          <h7 className="text-gray-500">{menuData?.description}</h7>
        </div>

        <div className="relative w-1/6 h-1/6 ">
          {console.log(menuData?.imageId)}

          {menuData?.imageId == undefined ? (
            <img className="rounded-3xl w-2/3   h-2/3" src={GENERIC_FOOD_URL} />
          ) : (
            <img className="rounded-3xl " src={CDN_URL + menuData?.imageId} />
          )}

          <div className="absolute bottom-0 left-0 right-0 mx-4 my-2">
            <button
              className="rounded-3xl bg-white mt-2 mx-12 text-xs text-green-600 h-6 w-16"
              onClick={() => handleAddItem(menuData)}
            >
              <b>+
              ADD
              </b>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RestaurantMenuCard;

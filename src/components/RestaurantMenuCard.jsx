import React from "react";

const RestaurantMenuCard = (props) => {
  return (
    <React.Fragment className="">
      {console.log(props)}

      <div className="flex justify-between mx-40 card lg:card-side bg-base-100 shadow-xl p-4 border-2 border-b-gray-500 rounded-3xl">
        <div className="flex-col">
          <h3 className="">MenuItem Name</h3>
          <h5 className="my-2">₹Price</h5>
        </div>

        <div class="relative w-1/6 h-1/6 ">
          <img className="rounded-3xl" src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
          <div className="absolute bottom-0 left-0 right-0 mx-4 my-2">
            <button className="rounded-3xl bg-white mt-2 ml-12 text-sm text-green-600 h-6 w-16">
            ADD
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RestaurantMenuCard;

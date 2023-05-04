import React from "react";

const RestaurantMenuCard = (props) => {
  return (
    <React.Fragment>
      {console.log(props)}

      <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/h4ppdoav5fdi0gsswpab" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    </React.Fragment>
  );
};

export default RestaurantMenuCard;

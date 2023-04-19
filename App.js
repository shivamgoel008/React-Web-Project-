import React from "react";
import ReactDOM from "react-dom/client";

/*
Headers
  - logo
  - NavItems

Body
  - Search
  - Restaunrant Conatiner
    - Restaurant card
      - Image
      - Name of Res, Star Rating, Cuisines, delery tie

Footer
  - Coptright
  - Link 
  - Address
  - Contacts

*/

const resObj = {
  type: "F",
  id: "191407",
  name: "La Pino'z Pizza",
  uuid: "cfaafd6a-c3be-4754-8b72-21f6cd4058ef",
  city: "10459",
  area: "Sector 135",
  totalRatingsString: "1000+ ratings",
  cloudinaryImageId: "ftq8nmz1a2bzfzulmkis",
  cuisines: ["Italian", "Pizzas", "Mexican", "Desserts", "Beverages"],
  tags: [],
  costForTwo: 30000,
  costForTwoString: "₹300 FOR TWO",
  deliveryTime: 32,
  minDeliveryTime: 32,
  maxDeliveryTime: 32,
  slaString: "32 MINS",
  lastMileTravel: 3.5,
  slugs: {
    restaurant: "la-pino'z-pizza-noida-expressway-noida-expressway",
    city: "noida-1",
  },
  cityState: "10459",
  address: "ABC tower shop no 63 ground floor  sector 135",
  locality: "ABC tower",
  parentId: 4961,
  unserviceable: false,
  veg: false,
  select: false,
  favorite: false,
  tradeCampaignHeaders: [],
  ribbon: [
    {
      type: "PROMOTED",
    },
  ],
  chain: [],
  feeDetails: {
    fees: [
      {
        name: "distance",
        fee: 4800,
        message: "",
      },
      {
        name: "time",
        fee: 0,
        message: "",
      },
      {
        name: "special",
        fee: 0,
        message: "",
      },
    ],
    totalFees: 4800,
    message: "",
    title: "Delivery Charge",
    amount: "4800",
    icon: "",
  },
  availability: {
    opened: true,
    nextOpenMessage: "",
    nextCloseMessage: "",
  },
  longDistanceEnabled: 0,
  rainMode: "NONE",
  thirdPartyAddress: false,
  thirdPartyVendor: "",
  adTrackingID: "cid=6514356~p=16~eid=00000187-9ad9-dd8e-29f1-d68100b1100d",
  badges: {
    imageBased: [],
    textBased: [],
    textExtendedBadges: [],
  },
  lastMileTravelString: "3.5 kms",
  hasSurge: false,
  sla: {
    restaurantId: "191407",
    deliveryTime: 32,
    minDeliveryTime: 32,
    maxDeliveryTime: 32,
    lastMileTravel: 3.5,
    lastMileDistance: 0,
    serviceability: "SERVICEABLE",
    rainMode: "NONE",
    longDistance: "NOT_LONG_DISTANCE",
    preferentialService: false,
    iconType: "EMPTY",
  },
  promoted: true,
  avgRating: "3.6",
  totalRatings: 1000,
  new: false,
};

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://img.freepik.com/premium-vector/tray-food-gourmet-address-location-pin-logo-design-app-icon-vector-template-concept-idea_537522-60.jpg?w=2000"
          />
        </div>
        <div className="nav-items-container">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
        />
        <h3>{props.name}</h3>
        {/* <h4>{props.cuisines}</h4> */}
        {/* <h4>{props.avgRating}</h4> */}
        {/* <h4>{props.sla.deliveryTime}</h4> */}
      </div>
    </React.Fragment>
  );
};

const Body = () => {
  return (
    <React.Fragment>
      <div className="body">
        <div className="search">
          {/* todo */}
          search
        </div>

        <div className="res-container">
          <RestaurantCard
            resData={resObj}
          />
          
        </div>
      </div>
    </React.Fragment>
  );
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <div className="app">
        <Header />
        <Body />
      </div>
    </React.Fragment>
  );
};

console.log(<Header />);
console.log(<AppLayout />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

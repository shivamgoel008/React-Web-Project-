import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About.jsx";
import Body from "./components/Body.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import Footer from "./components/Footer.jsx";
import Headers from "./components/Header.jsx";
import ProfileClass from "./components/ProfileClass.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Shimmer from "./components/Shimmer.jsx";
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  return (
    <React.Fragment>
      <div className="app">
        <Headers />
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // path:profile=> localhost:1234/about/profile
            element: <ProfileClass />, // path:/profile => localhost:1234/profile
            // element: <Profile name={"Shivam"}/>
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

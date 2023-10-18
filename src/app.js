import React from "react";
import ReactDOM from "react-dom/client";
import "/app.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import useOnlineStatus from "../src/const/useOnlineStatus";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import appstore from "./const/appstore";
import Cart from "./components/Cart";


import Home from "./components/Home";

const RestaurantItem = lazy(() => import("./components/RestaurantItem"));

const Applayout = () => {
  const OnlineStatus = useOnlineStatus();

  return (
    <>

      <Provider store={appstore}>
        <div className="app outline-none">
          <Header className="" />

          {OnlineStatus == false ? (
            <h1 className="offline-status-msg">
              Please Connect To The Internet
            </h1>
          ) : null}
          <Outlet />
        </div>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restaurants",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense>
            <RestaurantItem />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);


const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <RouterProvider router={appRouter} />
);
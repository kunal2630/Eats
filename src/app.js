import React from 'react';
import ReactDOM from "react-dom/client";
import '/app.css';

import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,RouterProvider ,Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import useOnlineStatus from "../src/const/useOnlineStatus";
import { lazy ,Suspense } from 'react';

const RestaurantItem=lazy( () => import("./components/RestaurantItem"));



const Applayout = () => {


  const OnlineStatus=useOnlineStatus();

  return ( 
  
      <div className="app">

        <Header className="header-main"/>
        { 

           OnlineStatus==false ?   (<h1 className='offline-status-msg'>Please Connect To The Internet</h1>): null
        }
        <Outlet/>

      </div>
 
    )

};

const appRouter = createBrowserRouter([

  {
    path:"/",
    element:<Applayout/>,
    children:[

      {

        path:"/",
        element:<Body/>,
      },
      
      {

        path:"/about",
        element:<About/>,
      },
      {
    
        path:"/contact",
        element:<Contact/>,
      },
      {
    
        path:"/restaurants/:resId",
        element:<Suspense > <RestaurantItem/> </Suspense>,
      },
    ],
    errorElement:<Error/>
  },
 
]);




const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


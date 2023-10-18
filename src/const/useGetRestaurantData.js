import React, { useEffect, useState } from "react";

const useGetRestaurantData = () => {
  const [data, setData] = useState(null);
  const [latitude, setlatitude] = useState();
  const [longitude, setlongitude] = useState();


  const getLocation = async ()=>{

    navigator.geolocation.getCurrentPosition(

      async (position) => {
       setlatitude(position.coords.latitude);
       setlongitude(position.coords.longitude);
     }
   );
   const resdata = await fetch(
    `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`

  );

  

  const json = await resdata.json();

  setData(json);


  }
  
  useEffect(()=>{

   
    getLocation();

  },[latitude,longitude]);

  //console.log(latitude,longitude);


  




 // console.log(data);
  return data;
};

export default useGetRestaurantData;

import React, { useEffect, useState } from "react";

const useGetRestaurantData = () => {
  const [data, setData] = useState(null);
  const [latitude, setlatitude] = useState();
  const [longitude, setlongitude] = useState();

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setlatitude(position.coords.latitude);
      setlongitude(position.coords.longitude);
    });
    const resdata = await fetch(
      `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D30.7416955%26lng%3D76.6480169%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING`
    );

    const json = await resdata.json();

    setData(json);
  };

  useEffect(() => {
    getLocation();
  }, [latitude, longitude]);

  return data;
};

export default useGetRestaurantData;

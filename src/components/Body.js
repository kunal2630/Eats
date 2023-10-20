import RestaurantCard from "./RestaurantCard";
import api from "../const/api";
import React, { useEffect, useState } from "react";
import ShimmerPrototype from "./ShimmerPrototype";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";
import useGetRestaurantData from "../const/useGetRestaurantData";

const Body = () => {
  const data = useGetRestaurantData();
  //console.log(data);

  //ORIGINAL LIST
  const [restaurantList, setRestaurantList] = useState(null);

  //COPY OF ALL ORIGINAL LIST
  const [filterrestaurantList, setFilterRestaurantList] = useState(null);

  useEffect(() => {
    
    setRestaurantList(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
    );
    setFilterRestaurantList(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants  || data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
    );
  }, [data]);

  const [searchItem, setsearchItem] = useState();

  // console.log(restaurantList);

  function filterResList() {
    let filteredList = restaurantList.filter((it) => it.info.avgRating > 4);

    setFilterRestaurantList(filteredList);
  }

  function search() {
    const searchList = restaurantList.filter((it) => {
      const filterByName = it.info.name
        .toLowerCase()
        .includes(searchItem.toLowerCase());

      const filterCuisines = it.info.cuisines.some((cuisine) =>
        cuisine
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(searchItem.toLowerCase().replace(/\s+/g, ""))
      );

      return filterByName || filterCuisines;
    });

    setFilterRestaurantList(searchList);
  }

  function keypressed(e) {
    if (e.key === "Enter") {
      search();
    }
  }

  return !restaurantList ? (
    <ShimmerPrototype />
  ) : (
    <div className="flex-col m-2 w-[90%] min-[400px]:w-[95%]  mx-auto ">
      <div className="flex justify-between w-[90%] items-center  mt-6  mx-auto ">
        <div className="hidden min-[500px]:flex w-[50%] lg:w-[25%] ">
          <button
            className=" rounded-lg  p-3 md:px-9 bg-[#F28C28] text-white"
            onClick={filterResList}
          >
            Top Restaurants
          </button>
        </div>

        <div className=" hidden lg:flex items-center justify-center  w-[50%] ">
          <h1 className="font-bold text-2xl xl:text-3xl  ">
            Top Restaurant Chain near you..
          </h1>
        </div>

        <div
          className="   rounded-lg  flex  justify-between p-2  my-auto items-center  text-[#F28C28] border-2 border-[#F28C28]  w-[275px] 
        min-[400px]:w-[340px] min-[450px]:w-[400px] min-[500px]:w-[190px] min-[550px]:w-[223px] min-[600px]:w-[235px] md:w-[290px] lg:w-[280px] min-[1100px]:w-[290px]"
        >
          <input
            className="border-none outline-none  whitespace-nowrap overflow-hidden overflow-ellipsis whitespace-ellipsis text-black font-medium"
            type="text"
            value={searchItem}
            placeholder="Restaurant name or dish"
            onKeyDown={keypressed}
            onChange={(e) => {
              setsearchItem(e.target.value);
            }}
          />
          <button onClick={search}>
            <SearchIcon />
          </button>
        </div>
      </div>

      <div className=" flex flex-wrap mt-4 items-center justify-center  ">
        {filterrestaurantList &&
          filterrestaurantList.map((it) => (
            <Link
              to={"/restaurants/" + it.info.id}
              className="link"
              key={it.info.id}
            >
              <RestaurantCard resinfo={it} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;

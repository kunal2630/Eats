import React from "react";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import { Link, useParams } from "react-router-dom";
import useRestaurantItemList from "../const/useRestaurantItemList";
import ResMenuHeader from "./ResMenuHeader";
import ShimmerRestaurantItem from "./ShimmerRestaurantItem";
import StarIcon from "@mui/icons-material/Star";
import { useSelector } from "react-redux";

const RestaurantItem = () => {
  const params = useParams();

  const { resId } = params;

  const RestaurantItemList = useRestaurantItemList(resId);


  const menu =
  
  RestaurantItemList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      function (it) {
        return (
          it.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  const storeitems = useSelector((store) => store.cart.items);


  if (RestaurantItemList === null) return <ShimmerRestaurantItem />;

  const {
    name,
    cuisines,
    city,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    locality,
    cloudinaryImageId,
  } = RestaurantItemList?.cards[0]?.card?.card?.info || {};

  const delTime = Math.floor(
    RestaurantItemList?.cards[0]?.card?.card?.info?.sla?.deliveryTime / 2
  );

  const len = menu?.length;

  return (
    <>
      <div className="mx-auto w-[95%] md:w-[60%] p-4 relative">
       
        <div className="max-[768px]:flex-col flex justify-between">
          <div>
            <div className="">
              <p className="text-3xl text-[#282c3f] font-bold ">{name}</p>
            </div>
            <div className="mt-3 ">
              <p className=" text-[#7e808c] font-bold text-xs md:text-lg">
                {cuisines?.join(" , ")}
              </p>
              <p className="text-[#7e808c] text-xs md:text-lg font-bold">
                {locality}
              </p>
            </div>
          </div>
          <div className="max-[768px]:flex my-auto rounded-xl lg:p-2  items-center ">
            <p className="py-2 text-sm font-bold  text-[#7e808c]   lg:font-semibold">
              {totalRatingsString}
            </p>
            <div className="flex border border-b-1 border-dotted"></div>
            <div className="">
              <p className="text-[#F28C28] flex justify-center items-center    font-extrabold p-1">
                <StarIcon fontSize="small" /> {avgRating}
              </p>
            </div>
          </div>
        </div>

        <div className="border-dotted border-b-2 my-4"></div>

        <div className="flex  justify-between items-center my-2">
          <div className="text-lg text-[#3e4152] font-bold">
            {costForTwoMessage?costForTwoMessage:'₹450 for two'}
          </div>
          <div className="flex items-center justify-center gap-2 text-lg text-[#3e4152] font-bold ml-4">
            <TwoWheelerIcon /> {delTime?delTime:25} MIN
          </div>
        </div>

        <div className="relative">

        <div className="border-dotted border-b-2 my-4"></div>
        {storeitems?.length > 0 ? (

          <Link to="/cart">
          <div className=" fixed  left-1/2 transform -translate-x-1/2 bg-orange-400 text-black hover:bg-[#F28C28] rounded hover:text-white p-2 text-xs md:text-sm hover:shadow-md transition-all cursor-pointer z-50   " style={{ top: 'calc(100vh - 6%)' }}>
            <button className=" rounded-md text-white">{storeitems.length} items | View Cart</button>
          </div>
          </Link>
        ) : (
          <div></div>
        )}
        </div>

     

        {menu?.map((it, index) => {
          return (
            <>
              <ResMenuHeader
                key={it?.card?.card?.title}
                data={it?.card?.card}
                resName={name}
                city={locality}
                imageId={cloudinaryImageId}
                resId={resId}
              />

              {index < len && (
                <div className="-mx-2 my-10 h-4 bg-[rgb(241,241,246)] "></div>
              )}
            </>
          );
        })}

      </div>
    </>
  );
};

export default RestaurantItem;

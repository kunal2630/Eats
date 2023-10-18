import React from "react";
import StarsIcon from "@mui/icons-material/Stars";

const RestaurantCard = (props) => {
  //console.log(props.resinfo?.info);
  const { name, avgRating, cuisines, areaName, cloudinaryImageId, costForTwo } =
    props.resinfo?.info;

  return (
    <div className="w-[280px] 
    min-[400px]:w-[340px]  min-[450px]:w-[400px] min-[500px]:w-[190px]  min-[550px]:w-[223px] min-[600px]:w-[235px] min-[650px]:w-[260px] md:w-[200px] min-[900px]:w-[240px] lg:w-[200px] min-[1245px]:w-[250px]  m-3 min-[1260px]:m-4 rounded-2xl border-1 bg-[#FCFDF2]  ">
      <img
        className="shadow-lg object-cover rounded-t-2xl w-[280px] 
        min-[400px]:w-[340px] min-[450px]:w-[400px] min-[500px]:w-[190px] min-[550px]:w-[223px] min-[600px]:w-[235px] min-[650px]:w-[260px] md:w-[200px] min-[900px]:w-[240px] lg:w-[200px] min-[1245px]:w-[250px] h-[200px] min-[400px]:h-[300px] min-[500px]:h-[150px] xl:h-[200px] "
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt=""
      />

      <div className="res-card-info font-normal  w-[280px] min-[400px]:w-[360px] min-[450px]:w-[400px] min-[500px]:w-[190px] min-[550px]:w-[223px] min-[600px]:w-[235px] min-[650px]:w-[260px] md:w-[200px] min-[900px]:w-[240px] lg:w-[200px] min-[1245px]:w-[250px]" >
        <h3 className="font-bold pb-2">{name}</h3>

        <div className="flex">
          <div className="text-green-700">
            {" "}
            <StarsIcon />{" "}
          </div>
          <div className="ml-1">
            <h3 className="font-bold text-xl pb-2">{avgRating}</h3>
          </div>
        </div>

        <p className="text-gray-700 font-medium">{cuisines.join(", ")}</p>
        <p className="text-gray-700 font-medium">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;

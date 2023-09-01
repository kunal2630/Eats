import React from "react";

const RestaurantCard = (props) =>{

   

     const {name,avgRating,cuisines,areaName,cloudinaryImageId}=props.resinfo.info;
      

    return (




    
      <div className="RestaurantCard">


  
        <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="" />
  
        <div className="res-card-info">
  
            <h3>{name}</h3>

          
              <h3>{`${avgRating}⭐`}</h3>
             <p>{cuisines.join(", ")}</p>
             <p>{areaName}</p>   

        </div>
  
       
      </div>

    
      
    );
  }

  export default RestaurantCard;

import RestaurantCard from "./RestaurantCard";
import api from '../const/api';
import React, { useEffect, useState } from "react";
import ShimmerPrototype from "./ShimmerPrototype";
import SearchIcon from '@mui/icons-material/Search'; 

import { Link } from 'react-router-dom';


const Body = () =>{

  //ORIGINAL LIST
  const [restaurantList,setRestaurantList]=useState([]);

  //COPY OF ALL ORIGINAL LIST
  const [filterrestaurantList,setFilterRestaurantList]=useState([]);

  const[searchItem,setsearchItem]=useState();


    useEffect( ()=>{

      fetchData();
    },[]);

      const fetchData= async () =>{

          const data =await fetch(api);

          const json=await data.json();


            //optional chaining
              setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
              setFilterRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
              
              

      }

      // console.log(restaurantList);

      

      function filterResList(){

        let filteredList= restaurantList.filter( (it) => (it.info.avgRating>4));
        console.log(filteredList);
        
        setFilterRestaurantList(filteredList);
         
    
    
      }

      function search(){

        const searchList = restaurantList.filter((it) => {
          const filterByName = it.info.name.toLowerCase().includes(searchItem.toLowerCase());
        
          const filterCuisines = it.info.cuisines.some(cuisine =>
            cuisine.toLowerCase().replace(/\s+/g, '').includes(searchItem.toLowerCase().replace(/\s+/g, ''))
          );
        
          return filterByName || filterCuisines;
        });
        
  
        setFilterRestaurantList(searchList);
  
      }

      function keypressed(e){

        if(e.key==='Enter'){

         

          search();

        }

      }
    
     
  
    return (  
 
      (restaurantList && restaurantList.length === 0) ?  (<ShimmerPrototype/>) :

    (
  
      <div className="body">

        <div className="top-container">

            <div className="btn">

              <button className="filter-btn" onClick={filterResList}>Top Restaurants</button>
              
            </div>

            <h1 className="top-container-heading">Top Restaurant Chain  near you..</h1>

            <div className="top-container-search">

               <input className="top-container-search-feild" type="text" value={searchItem} placeholder="Search for food and restaurants" onKeyDown={ keypressed} onChange={ (e) => {

                setsearchItem(e.target.value);
               
               }}/>
               <SearchIcon/>
            </div>

            

            

          </div>


          <div className="res-card">
    
              { filterrestaurantList && filterrestaurantList.map( (it) => 
              
                 <Link to={"/restaurants/"+ it.info.id} className='link' key={it.info.id} > 
                 
                 
                    <RestaurantCard  resinfo={it}/> 
                 
                 </Link>  ) 
                 
              }


          </div>

      </div>

    )

    );
  
  
  };

  export default Body;
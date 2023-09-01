import React from 'react';
import Shimmer from './Shimmer';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import { useParams } from 'react-router-dom';
import useRestaurantItemList from '../const/useRestaurantItemList';
import ResMenuHeader from './ResMenuHeader';



const RestaurantItem = () =>{

    
    const params=useParams();
   
     const {resId}=params;

     const RestaurantItemList=useRestaurantItemList(resId);

 

     //GETTING MENU OF THE RESTAURANT , BASICALLY WE FILTER ALL THE CARD WHICH HAVE TYPE ===ItemCategory because in swiggy api it contains data of all menu
     const menu=RestaurantItemList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.
     filter( function (it){

       return it.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

     });
   



    


    if(RestaurantItemList===null) return <Shimmer/>;

   
    const { name,cuisines,city,avgRating,totalRatingsString,costForTwoMessage} = RestaurantItemList?.cards[0]?.card?.card?.info || {};
    const len=menu.length;
    



    return  (


        <div className='mx-auto  w-[800px] p-4'>

            <div className="flex justify-between">

                <div>

                    <div className=""><p className='text-2xl text-[#282c3f] font-bold '>{name}</p></div>
                    <div className="my-3 ">
                    <p className=' text-[#7e808c] font-normal'>{cuisines.join(' , ')}</p>
                    <p className='text-[#7e808c] font-normal'>{city}</p>
                    </div>

                </div>
                <div className="my-auto border-2 border-solid rounded-xl p-1 ">

                    <p className='text-[#F28C28] p-1'>⭐ {avgRating}</p>
                    <div className="border border-b-1 border-dotted"></div>
                    <p className='py-2 text-xs  text-[#F28C28] font-semibold'>{totalRatingsString}</p>

                </div>

            </div>


            <div className="flex ">

                 <TwoWheelerIcon  fontSize="small" className='my-auto'/>

                <p className='pl-2  text-[#7e808c] font-normal'>

                    { RestaurantItemList?.cards[0]?.card?.card?.info?.feeDetails?.message ? (RestaurantItemList?.cards[0]?.card?.card?.info?.feeDetails?.message):(<p>Far-away restaurant. Additional delivery fees will apply.</p>)}
                    
                </p>
                

            </div>

             <div className="border-dotted border-b-2 my-4"></div>

            <div className="flex my-2"> 
                         
                <div className="text-l text-[#3e4152] font-semibold"> {costForTwoMessage} </div>

            </div>


             <div className="border-dotted border-b-2 my-4"></div>

            { menu.map( (it,index) => {


                    console.log(it?.card?.card?.title);

                return (

                    <>

                  
                    <ResMenuHeader key={it?.card?.card?.title} data={it?.card?.card} />
                    
                    {index<len && (<div className='-mx-2 my-10 h-4 bg-[rgb(241,241,246)] '></div>)}
                    
                    </>
                )
            }) }



          


           
        </div>
    );


};

export default RestaurantItem;
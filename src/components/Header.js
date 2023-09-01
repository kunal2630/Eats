
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import CabinRoundedIcon from '@mui/icons-material/CabinRounded';
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom';


import { useState } from 'react';
import useOnlineStatus from '../const/useOnlineStatus';

 const Header = () =>{

    const [isSignIn,setisSignIn]=useState("Sign In");
    const online=useOnlineStatus();

    return (
  
      <div className="flex justify-between border-2 border-white shadow-md sticky top-0 z-50 bg-white">
  
        <div className="">
  
        <Link to="/" className=' md:p-2.4'> <img className="w-35 h-20 " src="https://s.tmimgcdn.com/scr/1200x750/212900/spoon-and-fork-restaurant-logo_212966-original.png" alt="logo" / > </Link>
  
  
        </div>
  
       

          <div className="flex my-auto  mr-6">
  
         
              <li className="list-none"> 

                  <Link to="/" className='text-gray-700'>

                      <div className="flex m-auto p-2 hover:text-orange-500 cursor-pointer">

                        <div className="my-auto" ><CabinRoundedIcon/> </div>
                      <div className=" p-2 font-medium  text-lg">Restaurants </div>

                      </div>

                      </Link>

              </li>
          
            

              <li className="list-none"> 

              <Link to="/about" className='text-gray-700'>

                  <div className="flex m-auto p-2 hover:text-orange-500 cursor-pointer">

                    <div className="my-auto"><AcUnitRoundedIcon/> </div>
                    <div className=" p-2 font-medium  text-lg ">About</div> 

                  </div>

                </Link>

              </li>

              <li className="list-none"> 

              <Link to="/contact" className='text-gray-700'>

                <div className="flex m-auto p-2 hover:text-orange-500 cursor-pointer">

                  <div className="my-auto"><HelpIcon/> </div>
                   <div className=" p-2 font-medium  text-lg">Help</div> 

                </div>

                </Link>

              </li>

              <li className="list-none px "> 

                <div className="flex m-auto p-2 text-gray-700 hover:text-orange-500 cursor-pointer ">

                  <div className="my-auto"><PermIdentityRoundedIcon/> </div>
                <div className=" p-2 font-medium  text-lg" onClick={

                  ()=>{

                    isSignIn==="Sign In"? setisSignIn("Sign Out") :setisSignIn("Sign In");

                  }
                }>{isSignIn} </div>

                </div>

              </li>

              <li className="list-none"> 

                  <div className=" flex m-auto  text-gray-700 hover:text-orange-500 cursor-pointer p-2">

                    <div className="my-auto"><ShoppingCartRoundedIcon/> </div>
                    <div className="p-2 font-medium text-lg">Cart </div>

                  </div>

              </li>

              </div>
         
        </div>
  
     
    );
  }


  export  default Header;
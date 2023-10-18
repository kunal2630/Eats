import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.jpg";

import { useSelector } from "react-redux";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const openHam=function(){

  const nav=document.getElementById("navbar");
  
  
  nav.classList.add("top-[60]","w-full",'bg-white');
  const ham=document.getElementById("ham");
  const close=document.getElementById("close");
  ham.classList.add("hidden");
  close.classList.remove("hidden");

}
const closeHam=function(){

  const nav=document.getElementById("navbar");
  
  nav.classList.remove("top-[60]");

  const ham=document.getElementById("ham");
  const close=document.getElementById("close");

  ham.classList.remove("hidden");
  close.classList.add("hidden");
  

}

const Header = () => {
  // const online = useOnlineStatus();
  // Get the current location using React Router's useLocation hook
  const location = useLocation();

  // Determine if the current location is the home page ("/")
  const isHomePage = location.pathname === "/";
  const isRestaurant = location.pathname === "/restaurants";
  const isAbout = location.pathname === "/about";
  const isContact = location.pathname === "/contact";
  const isCart = location.pathname === "/cart";



  //Subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    
    <div className=" w-[100%] flex md:justify-between border-1  border-white shadow-md sticky top-0 z-10
     bg-[#ffffff]">
      <div className=" py-2 pl-4 shrink-0">
        <Link to="/" className=" md:p-2.4">
          <img className=" p-2 w-20 h-14  " src={logo} alt="logo" />
        </Link>
      </div>

      <div id="navbar" className="flex  flex-col md:flex-row absolute  md:static top-[-500]   items-center justify-center   md:my-auto  gap-5 md:gap-8">
        <li className="list-none ">
          <Link to="/" className="text-gray-700">
          
              <div onClick={ closeHam}
                className={` font-medium text cursor-pointer hover:text-orange-500 ${
                  isHomePage ? "text-orange-500 " : "text-gray-700"
                } text-[22px]`}
              >
                Home
              </div>
            
          </Link>
        </li>

        <li className="list-none ">
          <Link to="/restaurants" className="text-gray-700">
           
              <div onClick={ closeHam}
                className={` cursor-pointer hover:text-orange-500 font-medium ${
                  isRestaurant ? "text-orange-500 " : "text-gray-700"
                } text-[22px]`}
              >
                Restaurants{" "}
              </div>
            
          </Link>
        </li>

        <li className="list-none">
          <Link to="/about" className="">
          
              <div onClick={ closeHam}
                className={`cursor-pointer font-medium hover:text-orange-500 text-gray-700 ${
                  isAbout ? "text-orange-500 " : "text-gray-700"
                } text-[22px]`}
              >
                About
              </div>
           
          </Link>
        </li>

        <li className="list-none ">
          <Link to="/contact" className="">
         
              <div onClick={ closeHam}
                className={` cursor-pointer text-gray-700 font-medium hover:text-orange-500  ${
                  isContact ? "text-orange-500 " : "text-gray-700"
                } text-[22px]`}
              >
                Contact
              </div>
           
          </Link>
        </li>

        <li className="list-none flex items-center justify-center ">
          <Link to="/cart">
            <div onClick={ closeHam}
              className="relative mr-8 flex m-auto  text-gray-700  cursor-pointer p-2 
               "
            >
              <div className={`my-auto  ${ isCart || cartItems.length>0 ? "text-orange-500 " : "text-gray-700"
                } `}
              >
                <ShoppingCartRoundedIcon fontSize="large" />
              </div>

              <div
                className={` ${isCart || cartItems.length>0? "text-orange-500 " : "text-gray-700"}
                absolute top-[0px] left-[40px] font-bold text-[1rem] `}
              >
                {cartItems.length}
              </div>
            </div>
          </Link>
        </li>
        
       
        

       
      </div>
      <div className="absolute right-3 top-5 md:my-auto text-gray-700 md:hidden">

        <button id="ham" onClick={openHam}>
        <MenuIcon fontSize="large"/>
        </button>

        <button id="close"onClick={closeHam} className="hidden">
        <CloseIcon fontSize="large" />
        </button>

</div>
    </div>
  );
};

export default Header;

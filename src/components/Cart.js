import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  increment,
  removeItem,
  decrement,
} from "../const/cartSlice";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import QuantityCounter from "./QuantityCounter";
import EmptyCart from "./EmptyCart";
import paytmIcon from "../../images/paytm.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import OrderPopupModal from "./OrderPopupModal";

const Cart = () => {

  const storeitems = useSelector((store) => store.cart.items);

  const [placeorder,setPlaceorder]=useState(false);


  const itemCount = useSelector((store) => store.cart.items.counter);

  const dispatch = useDispatch();

  const clearStore = () => {
    dispatch(clearCart());
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total_price = storeitems.reduce(
      (accum, it) =>
        accum + (it.price ? it.price / 100 : it.defaultPrice / 100) * it.qty,
      0
    );

    const roundedTotal = total_price.toFixed(2);
    setTotal(roundedTotal);
  });

  return (
    <>
      {storeitems.length === 0 ? (
        <EmptyCart />
      ) : (

        <div>
        <div className=" flex w-[100%]   mt-6 ">
          <div className=" w-[300px] min-[350px]:w-[340px] min-[430px]:w-[430px] min-[510px]:w-[500px] min-[600px]:w-[550px] min-[700px]:w-[640px] min-[800px]:w-[740px] min-[850px]:w-[780px] min-[900px]:w-[820px] min-[950px]:w-[860px] mx-auto lg:ml-5 xl:ml-8 rounded-xl  flex-col   justify-between  shadow-3xl pb-4 md:pb-4 lg:w-[60%] 2xl:pl-8 ">
            {storeitems &&
              storeitems.map((it) => (
                <div className="flex  md:ml-6 md:pl-12 items-center justify-around gap-2">
                  {it.foodtype === "VEG" ? (
                    <div className=" border-2 border-solid border-green-600 w-4 flex p-0.5">
                      <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    </div>
                  ) : (
                    <div className="border-2 border-solid border-red-600 w-4 flex items-center justify-center p-0.5">
                      <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                    </div>
                  )}

                  <div className="p-2 w-[250px]  min-[400px]:w-[340px]  min-[500px]:w-[460px]  min-[600px]:w-[450px]  my-auto">
                    <div className="text-gray-700  min-[400px]:text-base  min-[500px]:text-xl font-semibold font-[custom] ">
                      {it.item.name}
                    </div>
                    <div className=" font-[custom] font-extrabold  ">
                      {"₹ " + (it.item.price / 100 || it.defaultPrice / 100)}
                    </div>
                  </div>
                  <div className=" flex items-center justify-center pr-0 ">
                    <QuantityCounter id={it.item.id} qty={it.qty} />
                  </div>

                  <button
                    onClick={() => {
                      dispatch(removeItem(it.item.id));
                    }}
                    className="hidden md:block m-auto ml-8"
                  >
                    <CloseIcon />
                  </button>
                </div>
              ))}
          </div>

          <div
            className=" p-1 max-[350px]:px-1 px-3  bg-[#dcfce7] lg:p-2 border rounded-xl shadow-2xl  w-[100%]  h-[90px] bottom-0 
           fixed z-100  md:h-[125px]  lg:top-24 lg:w-[33%] lg:right-4 lg:h-[265px]   "
          >
            <div className="hidden   lg:flex p-3  gap-2 w-[100%]  items-center">
              <div className="  w-[90%] ">
                <p className=" text-2xl  w-[100%]  whitespace-nowrap overflow-hidden overflow-ellipsis whitespace-ellipsis font-extrabold  ">
                  {storeitems[0]?.resName}
                </p>
                <p className=" w-[100%] text-xl font-bold">
                  {storeitems[0]?.locality}
                </p>
              </div>
            </div>

            <div className="  flex  items-center justify-between  h-[85px]  ">
              <div className="flex-col h-[40px] lg:ml-2 gap-2">
                <div className="flex gap-1 items-center justify-center">
                  <img
                    className="md:border-2  md:border-blue-300 rounded-lg  w-[20px]  h-[10px] min-[430px]:w-[30px] min-[430px]:h-[30px] md:w-[40px] md:h-[25px] object-cover shrink-0 lg:border-none "
                    src={paytmIcon}
                    alt=""
                  />
                  <div
                    className=" flex items-center justify-start font-bold text-xs min-[430px]:text-[13px]/[0px]
                   text-gray-500 md:text-lg lg:text-sm   "
                  >
                    <div className="flex ml-2 items-center justify-center">
                     
                      <div className=""> PAY USING </div>
                      <div className="">
                        <ArrowDropUpIcon />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p
                    className="font-extrabold text-[15px]/[15px] 
                  min-[430px]:text-[20px]/[15px] md:text-2xl lg:text-base"
                  >
                    Paytm UPI
                  </p>
                </div>
              </div>

              <div
                onClick={() => {

                  setPlaceorder(true);
                 
                }}
                className="flex rounded-xl lg:rounded-xl bg-orange-400 h-[60px] min-[650px]:h-[70px] min-[800px]:h-[70px]  items-center justify-between px-2  w-[60%]  py-1   text-black  font-semibold hover:cursor-pointer mt-4 min-[750px]:mt-6 
                 lg:w-[50%] xl:w-[250px] lg:h-[60px] lg:mt-2"
              >
                <div className=" px-2">
                  <p className="flex  w-[70px] text-md  min-[400px]:text-md min-[450px]:text-lg min-[650px]:text-2xl  font-bold lg:text-base">
                    ₹{total}
                  </p>
                  <p className="flex justify-start text-sm min-[400px]:text-md min-[650px]:text-lg lg:text-xs">
                    {" "}
                    TOTAL
                  </p>
                </div>
                <div className="flex text-md min-[350px]:text-lg min-[400px]:text-xl min-[500px]:text-2xl  justify-end  lg:text-base min-[1200px]:text-xl">
                  <p>Place Order </p>
                  <div className="hidden min-[1100px]:block">
                    <ArrowRightIcon />
                  </div>
                </div>
              </div>
            </div>

            <div className="  hidden lg:flex gap-2 mt-6 w-[100%] justify-between mb-2  items-center ">
              <button
                className="hover:border-2 bg-white rounded-xl p-[7px] pt-2  xl:p-3 text-red-700 lg:text-xl  font-bold w-[40%] "
                onClick={clearStore}
              >
                Clear Cart
              </button>
              <Link to="/restaurants">
                <button
                  className=" bg-white rounded-xl  text-green-700 p-[6px]  xl:p-3 
                  lg:text-xl  font-bold 
                 xl:w-[250px] hover:border-2 "
                >
                  Continue Ordering
                </button>
              </Link>
            </div>
          </div>
        </div>

        {placeorder && <OrderPopupModal setPlaceorder={setPlaceorder}/>}
        </div>
      )}
    </>
  );
};

export default Cart;

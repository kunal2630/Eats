import React from "react";
import { useDispatch } from "react-redux";
import {  increment,decrement  } from '../const/cartSlice';

const QuantityCounter = ({id,qty}) => {

const dispatch=useDispatch();

  return (
    <>
      <div className=" ml-3 flex justify-between my-auto w-[75px] min-[500px]:w-[90px] rounded-md bg-green-700 text-lg h-[32px]">
        <button
          onClick={() => {
            dispatch(decrement(id));
          }}
          className="text-white px-2 font-medium "
        >
            -
        </button>

        <p
          className="text-white flex justify-center items-center bg-green-700 font-medium text-l
 mx-auto h-auto w-[50px]  "
        >
          {qty}
        </p>

        <button
          onClick={() => {
            dispatch(increment(id));
          }}
          className="text-white px-2 font-medium  "
        >
          +
        </button>
      </div>
    </>
  );
};

export default QuantityCounter;

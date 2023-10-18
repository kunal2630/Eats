import React,{useRef} from 'react';

import Shimmer from "./Shimmer";
import Typed from 'typed.js';


const ShimmerPrototype = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Looking for great food near you..', 'Please wait..'],
      typeSpeed: 60,
      backSpeed:50,
      startDelay: 0,
      
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (

    <div className="flex-col   mt-6 ">

        <div className="flex w-[80%]  mx-auto items-center justify-between ">

          <button className="bg-gray-100 rounded-md border-1 w-[30%] lg:w-[15%] h-[50px]"></button>
          <h1 className=' hidden lg:flex w-[48%] text-3xl font-bold '> <span ref={el}/></h1>
          <button className="bg-gray-100  rounded-md border-1 w-[40%]  lg:w-[20%] h-[50px] "></button>
          </div>

            <div className=" flex flex-wrap   w-[90%]  mx-auto justify-center items-center mt-6">

            

                  <Shimmer/><Shimmer/><Shimmer/><Shimmer/> 
                 
                  <Shimmer/><Shimmer/> <Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/>


          </div>
          </div>
  )
}

export default ShimmerPrototype;
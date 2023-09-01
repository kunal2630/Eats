import React from 'react';
import Shimmer from "./Shimmer";

const ShimmerPrototype = () => {
  return (

    <div className="shimmer">

        <div className="shimmer-top">

          <button className="shimmer-btn"></button>
          <h1 className='shimmer-msg'>Looking for great food near you..</h1>
          <button className="shimmer-btn-search"></button>
          </div>

            <div className="shimmer-container">

            

                  <Shimmer/><Shimmer/><Shimmer/><Shimmer/> 
                 
                  <Shimmer/><Shimmer/> <Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/>


          </div>
          </div>
  )
}

export default ShimmerPrototype;
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import homeimg from "../../images/home-removebg-preview.png";
import Typed from "typed.js";
import delGirl from "../../images/girl.71eebf687158bb4549b7-removebg-preview.png";

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Food", " Mood"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="mt-28  h-[200px] w-[20rem]  flex items-center justify-center md:hidden       mx-auto  ">
        <img className="object-cover  " src={delGirl} alt="" />
      </div>

      <div className="flex items-center justify-center md:justify-between    ">
        <div className="grow-1 flex-col md:ml-5 lg:ml-10 xl:ml-24 2xl:ml-32 ">
          <p
            className=" text-black text-5xl   lg:text-7xl font-bold mt-20 items-center"
          >
            Good{" "}
            <span className="text-[#F28C28] ">
              {" "}
              <span ref={el} />
            </span>{" "}
          </p>

          <p
            className="hidden w-[350px] text-3xl md:text-2xl lg:text-4xl lg:w-[500px] md:flex mt-5  text-neutral-800 text-left  font-extrabold"
          >
            Discover the best food and drinks near you!
          </p>

          <Link to="/restaurants">
            <div className="flex items-center justify-center md:justify-start">
              <button
                className="w-[8em] rounded-lg mt-5 min-[410px]:mt-6 p-2   bg-[#F28C28]
                 text-white
               text-[25px]  font-semibold hover:cursor-pointer hover:shadow-2xl"
              >
                ORDER NOW
              </button>
            </div>
          </Link>
        </div>

        <div className="grow-2 shrink-0 hidden md:block mr-6 lg:mr-20 ">
          <img className="object-cover h-[80vh] " src={homeimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;

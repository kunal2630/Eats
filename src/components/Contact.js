import React, { useRef } from "react";
import contactUsImage from "../../images/contactus.png";
import Typed from "typed.js";

const Contact = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["TOUCH!"],
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
    <div className=" w-[100%] ">
      <div className="mt-4 min-[360px]:mt-12  lg:mt-6 flex items-center justify-center max-[400px]:ml-6">
        <h1 className="font-extrabold  text-3xl min-[400px]:text-4xl  md:text-5xl   text-[#F28C28]">
          GET IN <span ref={el} />
        </h1>
      </div>
      <div className="mt-4 md:flex md:items-center md:justify-center justify-between  ">
        <div className=" mt-6 items-center justify-center  hidden md:block my-6 ">
          <img
            className="md:w-[360px]  lg:w-full object-cover md:h-full xl:h-full "
            src={contactUsImage}
            alt=""
          />
        </div>

        <div className=" mt-6 flex items-center justify-center  ">
          <form className="" action="">
            <input
              className="mb-2 min-[360px]:mb-6 w-[240px]  md:w-[280px] lg:w-[320px] xl:w-[360px]  border-2 rounded-md border-solid- border-[rgb(242,195,40)] p-3 block outline-none hover:shadow-xl"
              type="text"
              name=""
              placeholder="Full Name"
            />
            <input
              className="mb-2 min-[360px]:mb-6 w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] border-2 border-solid border-[rgb(242,195,40)]  rounded p-3 block outline-none hover:shadow-xl"
              type="text"
              name=""
              placeholder="Email"
            />
            <textarea
              className="mb-2 min-[360px]:mb-6  col-[50] w-[240px] md:w-[280px]  lg:w-[320px] xl:w-[360px] border-2 border-solid h-[150px]  border-[rgb(242,195,40)]  rounded p-3 block textarea outline-none hover:shadow-xl "
              name=""
              placeholder="Type your message"
            />
            <button
              className=" font-semibold p-2  min-[360px]:p-4 w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px]
          border-2 rounded-md border-solid- border-[rgb(242,195,40)]   block bg-[#F28C28]  text-gray-50 hover:bg-white hover:text-[#F28C28] hover:shadow-xl  "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

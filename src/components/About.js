import logo from "../../images/spoon-and-fork-restaurant-logo_212966-original.webp";

const About = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center mt-4">
        <h1 className="text-[#F28C28] text-xl md:text-2xl lg:text-3xl  font-bold">
          WELCOME TO EATS!
        </h1>
      </div>

      <div className="flex lg:mt-4">
        <div className="p-4">
          <div className="flex m-3">
            <div className=" text-[#F28C28] text-l md:text-xl">◉</div>
            <div className="flex">
              <p className="text-[#7e808c]  font-bold text-sm min-[450px]:text-lg md:text-xl px-2  items-end">
                A delightful culinary experience with a responsive user
                interface and cutting-edge technology.
              </p>
            </div>
          </div>
          <div className="flex m-3 ">
            <div className="text-[#F28C28] text-l md:text-xl">◉</div>
            <div>
              <p className="text-[#7e808c] font-bold text-sm min-[450px]:text-lg md:text-xl px-2">
                Used Tailwind CSS - A seamless and efficient way to design a
                visually appealing user interface.
              </p>
            </div>
          </div>
          <div className="flex m-3 ">
            <div className="text-[#F28C28] text-l md:text-xl">◉</div>
            <div>
              <p className="text-[#7e808c] font-bold text-sm min-[450px]:text-lg md:text-xl px-2">
                Utilizes the Swiggy API to offer an extensive list of
                restaurants for you to explore.
              </p>
            </div>
          </div>
          <div className="flex m-3 ">
            <div className="text-[#F28C28] text-l md:text-xl">◉</div>
            <div>
              <p className="text-[#7e808c] font-bold text-sm min-[450px]:text-lg md:text-xl px-2">
                Incorporates geolocation to provide instant access to nearby
                restaurants from your current location.
              </p>
            </div>
          </div>
          <div className="flex m-3 ">
            <div className="text-[#F28C28] text-l md:text-xl">◉</div>
            <div>
              <p className="text-[#7e808c] font-bold text-sm min-[450px]:text-lg md:text-xl px-2">
                Custom hooks to improve code readability, modularity, and
                maintainability, making development a breeze.
              </p>
            </div>
          </div>
          <div className="flex m-3 ">
            <div className="text-[#F28C28] text-l md:text-xl">◉</div>
            <div>
              <p className="text-[#7e808c] font-bold text-sm min-[450px]:text-lg md:text-xl px-2">
                Enhanced data management with Redux Toolkit, ensuring efficient
                state management and smooth data flow throughout the
                application.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

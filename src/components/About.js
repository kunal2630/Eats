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
          
         
          <div className="flex m-3 ">
            <div className="text-[#F28C28] text-l md:text-xl">◉</div>
            <div>
              <p className="text-[#7e808c] font-bold text-sm min-[450px]:text-lg md:text-xl px-2">
                A fully responsive food ordering website made using React
              </p>
            </div>
          </div>
          <div className="flex m-3 ">
            <div className="text-[#F28C28] text-l md:text-xl">◉</div>
            <div>
              <p className="text-[#7e808c] font-bold text-sm min-[450px]:text-lg md:text-xl px-2">
                Used Tailwind CSS for a sleek and modern UI design, ensuring a
                visually appealing and user-friendly interface.
              </p>
            </div>
          </div>
          <div className="flex m-3 ">
            <div className="text-[#F28C28] text-l md:text-xl">◉</div>
            <div>
              <p className="text-[#7e808c] font-bold text-sm min-[450px]:text-lg md:text-xl px-2">
                Leverage geolocation to dynamically present users with nearby
                restaurants for a personalized experience.
              </p>
            </div>
          </div>
          <div className="flex m-3 ">
            <div className="text-[#F28C28] text-l md:text-xl">◉</div>
            <div>
              <p className="text-[#7e808c] font-bold text-sm min-[450px]:text-lg md:text-xl px-2">
                Implement real-time data updates using the Swiggy API to display
                the latest restaurant information and menu items.
              </p>
            </div>
          </div>
          <div className="flex m-3 ">
            <div className="text-[#F28C28] text-l md:text-xl">◉</div>
            <div>
              <p className="text-[#7e808c] font-bold text-sm min-[450px]:text-lg md:text-xl px-2">
                Utilize Redux Toolkit for efficient state management,
                specifically for the shopping cart functionality like real-time
                updates of the shopping cart, reflecting changes in total items
                and prices as users add or remove items.
              </p>
            </div>
          </div>
          <div className="flex m-3 ">
            <div className="text-[#F28C28] text-l md:text-xl">◉</div>
            <div>
              <p className="text-[#7e808c] font-bold text-sm min-[450px]:text-lg md:text-xl px-2">
                Develop custom hooks, components etc to improve code
                readability, modularity, and maintainability, making development
                a breeze.
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

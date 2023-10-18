import { Link } from "react-router-dom";
import emptycart from "../../images/empty_cart.png";

const EmptyCart = () => {
  return (
    <div className="w-[100%]  mt-18 min-[360px]:mt-14 min-[500px]:mt-0 min-[800px]:mt-10 lg:mt-0">
      <div className=" flex-col w-[100%]  lg:w-[43%]    m-auto   min-[500px]:relative  ">
        <img className="w-[100%]" src={emptycart} alt="" />
        <p className=" mb-4   min-[500px]:absolute bottom-[50px] min-[750px]:bottom-[60px]  text-2xl min-[350px]:text-3xl text-[#282c3f] font-bold w-full text-center min-[750px]:text-4xl min-[900px]:text-3xl ">
          Your Cart feels light!
        </p>
        <div className="w-[100%]  flex  justify-center  items-center  ">
          <Link to="/restaurants">
            <button className="rounded-lg   py-2 px-4  md:py-3  bg-[#F28C28] text-white text-xl font-semibold hover:cursor-pointer min-[750px]:text-3xl min-[900px]:text-2xl ">
              Put in Something{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;

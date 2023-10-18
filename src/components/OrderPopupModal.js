
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../const/cartSlice";

const OrderPopupModal = ({ setPlaceorder }) => {
  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearCart());
    setPlaceorder(false);
  };

  useEffect(() => {
    // Disable scrolling when the modal is activated
    document.body.classList.add("overflow-hidden");

    // Cleanup: Re-enable scrolling when the component is unmounted
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  
  const handleOnClose = (e) => {
    if(e.target.id === 'modalBlurPortion'){

        setPlaceorder(false);
        dispatch(clearCart());
    } 
   
    
  }


  return (
    <div
      id="modalBlurPortion"
      onClick={(e)=>handleOnClose(e)}
      
      className="z-50 fixed inset-0 bg-black bg-opacity-80 backrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white w-96 p-4 rounded-lg shadow m-2">
        <h1></h1>
        <p>
         We received your order. Your tasty food will be on its way to you soon.
        </p>
        <div className="grid mt-3 grid-cols-1 gap-4">
         
          <button
            onClick={clearCartItems}
            className="font-medium hover:shadow-md p-2 bg-orange-500 shadow text-white rounded-lg"
          >
          Thank you
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPopupModal;

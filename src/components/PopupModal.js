import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../const/cartSlice";

const ModalPopup = ({ setShowPopup }) => {
  const dispatch = useDispatch();

  const clearCartItems = (e) => {
    dispatch(clearCart());
    setShowPopup(false);
  };

  const handleOnClose = (e) => {
    if(e.target.id === 'modalBlurPortion') setShowPopup(false)
  }


  useEffect(() => {
    // Disable scrolling when the modal is activated
    document.body.classList.add("overflow-hidden");

    // Cleanup: Re-enable scrolling when the component is unmounted
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div
      id="modalBlurPortion"
      onClick={(e)=>handleOnClose(e)}
      className="z-50 fixed inset-0 bg-black bg-opacity-80 backrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white w-96 p-4 rounded-lg shadow m-2">
        <h1></h1>
        <p>
          You have items from another restaurant in your cart. Would you like to
          clear your cart to add items from this restaurant?
        </p>
        <div className="grid mt-3 grid-cols-2 gap-4">
          <button
            onClick={() => setShowPopup(false)}
            className="font-medium hover:shadow-md p-2 bg-orange-300 shadow rounded-lg"
          >
            No
          </button>
          <button
            onClick={clearCartItems}
            className="font-medium hover:shadow-md p-2 bg-orange-500 shadow text-white rounded-lg"
          >
            Yes, Start Fresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;

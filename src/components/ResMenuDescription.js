import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../const/cartSlice";
import QuantityCounter from "./QuantityCounter";
import PopupModal from "./PopupModal";
import { useState } from "react";

const ResMenuDescription = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  //console.log(props);
  const {
    itemAttribute,
    price,
    defaultPrice,
    name,
    imageId,
    description,
    id: itemId,
  } = props.data?.card?.info;

  const foodtype = itemAttribute?.vegClassifier;
  const resName = props.resName;
  const locality = props.locality;
  const resimageId = props.resimageId;
  const resId = props.resId;

  //Dispatch an action
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    //dispatch will call reducer function
    if (storeitems.length == 0) {
      dispatch(
        addItem({
          item,
          resName,
          locality,
          resimageId,
          itemId,
          qty: 1,
          price,
          defaultPrice,
          resId,
          foodtype,
        })
      );
    } else {
      if (storeitems[0].resId === resId) {
        dispatch(
          addItem({
            item,
            resName,
            locality,
            resimageId,
            itemId,
            qty: 1,
            price,
            defaultPrice,
            resId,
            foodtype,
          })
        );
      } else {
        
        setShowPopup(true);
       
        
      }
    }
  };

  const storeitems = useSelector((store) => store.cart.items);
  // console.log(storeitems);
  let matchingItemNotFound = true;

  return (
    <>
      <div id="resDescription" className="flex justify-between">
        <div className="pt-2 w-4/6">
          {foodtype === "VEG" ? (
            <div className="border-2 border-solid border-green-600 w-4 flex items-center justify-center p-0.5">
              <div className="h-2 w-2 bg-green-600 rounded-full"></div>
            </div>
          ) : (
            <div className="border-2 border-solid border-red-600 w-4 flex items-center justify-center p-0.5">
              <div className="h-2 w-2 bg-red-600 rounded-full"></div>
            </div>
          )}

          <div className="pt-2  text-[#3e4152] font-bold">
            {name.toUpperCase()}
          </div>
          <div className="pt-2  text-[#3e4152] font-semibold">
            {price ? `₹ ${price / 100}` : `₹ ${defaultPrice / 100}`}
          </div>
          <div className="flex ">
            <div className=" text-[#7e808c] text-sm md:text-lg font-normal">
              {description}
            </div>
          </div>
        </div>
        <div className="flex  ">
          {imageId ? (
            <>
              <div className="m-auto relative">
                <img
                  className="w-28 h-24 rounded-lg object-cover  mt-3"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                    imageId
                  }
                  alt=""
                />
                <div className=" absolute top-20">
                  {storeitems.length > 0 &&
                    storeitems.map((it) => {
                      if (it.item.id === itemId) {
                        // If a matching item is found, set matchingItemNotFound to false
                        matchingItemNotFound = false;
                        return <QuantityCounter id={it.item.id} qty={it.qty} />;
                      }
                    })}
                </div>
                {matchingItemNotFound && (
                  <button
                    id="Add_to_cart"
                    className="border-2 border-solid absolute top-3/4 left-3 bg-white font-bold text-[#F28C28] rounded-md w-3/4 h-10 pt-1 pb-1"
                    onClick={() => {
                      handleAddItems(props.data?.card?.info);
                    }}
                  >
                    ADD+
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="m-auto relative">
              <img
                className="w-28 h-24 rounded-lg object-cover opacity-0"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  imageId
                }
                alt=""
              />

              <div className="">
                {storeitems.length > 0 &&
                  storeitems.map((it) => {
                    if (it.item.id === itemId) {
                      // If a matching item is found, set matchingItemNotFound to false
                      matchingItemNotFound = false;
                      return <QuantityCounter id={it.item.id} qty={it.qty} />;
                    }
                  })}
              </div>
              {matchingItemNotFound && (
                <button
                  id="Add_to_cart"
                  className="border-2 border-solid absolute top-3/4 left-3 bg-white font-bold text-[#F28C28] rounded-md w-3/4 h-10 pt-1.5 pb-1"
                  onClick={() => {
                    handleAddItems(props.data?.card?.info);
                  }}
                >
                  ADD+
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {showPopup && <PopupModal setShowPopup={setShowPopup}/>}
    </>
  );
};

export default ResMenuDescription;

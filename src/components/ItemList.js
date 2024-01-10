import React, { useState } from "react";
import { MENU_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
const ItemList = ({ itemCard }) => {
  const { name, price, defaultPrice, imageId, description } =
    itemCard?.card?.info || {};
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setCount(count + 1);
  };

  const handleDeleteItem = (item) => {
    dispatch(removeItem(item));
    setCount(count - 1);
  };

  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-between p-3 border-b-2 border-gray-200">
      <div className="w-9/12">
        <div className="font-semibold">{name}</div>
        <div className="rupee">{price ? price / 100 : defaultPrice / 100}</div>
        <div className="text-xs font-extralight pr-2">{description}</div>
      </div>
      <div className="w-3/12">
        <div className="absolute">
          {count === 0 ? (
            <button
              onClick={() => handleAddItem(itemCard)}
              className="text-sm p-2 bg-green-400 rounded-lg border-solid border-2 shadow-lg mx-8 mt-[74] text-gray-600"
            >
              ADD +
            </button>
          ) : (
            <button
              onClick={() => handleDeleteItem(itemCard)}
              className="text-sm p-2 bg-red-500 rounded-lg border-solid border-2 shadow-lg mx-8 mt-[74] text-white"
            >
              REMOVE -
            </button>
          )}
        </div>
        <img
          className="h-28 w-32 rounded-lg bg-cyan-200"
          src={MENU_IMG + imageId}
          alt="menu-item"
        />
      </div>
    </div>
  );
};

export default ItemList;

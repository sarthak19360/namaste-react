import React from "react";
import { MENU_IMG } from "../utils/constants";
export function ItemList({ description, imageId, itemCard }) {
  return (
    <div className="flex justify-between p-2" key={itemCard.card.info.id}>
      <div className="w-9/12">
        <div className="font-semibold">{itemCard.card.info.name}</div>
        <div className="rupee">
          {itemCard.card.info.price / 100 ||
            itemCard.card.info.defaultPrice / 100}
        </div>
        <div className="text-xs font-extralight pr-2">{description}</div>
      </div>
      <div className="w-3/12">
        <div className="absolute">
          <button className="text-sm p-2 bg-black rounded-lg border-solid border-2 shadow-lg mx-8 mt-[74] text-white hover:text-base">
            ADD +
          </button>
        </div>
        <img
          className="h-28 w-32 rounded-lg bg-cyan-200"
          src={MENU_IMG + imageId}
          alt="menu-item"
        />
      </div>
    </div>
  );
}

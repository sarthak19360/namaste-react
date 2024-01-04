import { ItemList } from "./ItemList";
import React from "react";
import { useState } from "react";
const RestaurantCategory = ({
  category,
  itemCards,
  showItems,
  setShowIndex,
}) => {
  return (
    <div
      key={category}
      className="border-solid border-b-8 p-2 cursor-pointer"
      onClick={() => {
        setShowIndex();
      }}
    >
      <div className="flex justify-between text-lg font-bold py-4">
        <div>
          {category}({itemCards.length})
        </div>
        <div>{"⬇️"}</div>
      </div>
      {itemCards?.map((itemCard) => {
        const { imageId, description } = itemCard.card.info;
        return (
          showItems && (
            <ItemList
              itemCard={itemCard}
              description={description}
              imageId={imageId}
            />
          )
        );
      })}
    </div>
  );
};

export default RestaurantCategory;

import ItemList from "./ItemList";
import React from "react";
const RestaurantCategory = ({
  category,
  itemCards,
  showItems,
  setShowIndex,
}) => {
  return (
    <div
      className="border-solid border-b-8 p-2 cursor-pointer"
      onClick={() => {
        setShowIndex();
      }}
    >
      <div className="flex justify-between text-lg font-bold py-4">
        <div>
          {category}({itemCards.length})
        </div>
        <div>{showItems ? "⬆️" : "⬇️"}</div>
      </div>
      {itemCards?.map((itemCard) => {
        return (
          showItems && (
            <ItemList key={itemCard.card.info.id} itemCard={itemCard} />
          )
        );
      })}
    </div>
  );
};

export default RestaurantCategory;

import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurant";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const jsonData = useRestaurantMenu(resId);
  const resInfo = jsonData?.data?.cards[0]?.card?.card?.info;
  const resMenu =
    jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const {
    name,
    avgRatingString,
    cuisines,
    areaName,
    totalRatingsString,
    veg,
    costForTwoMessage,
    sla,
  } = resInfo ?? {};
  const categories = resMenu?.filter(
    (c) =>
      c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
      c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex justify-between w-3/5  p-4 border-dashed border-b-2">
          <div>
            <div className="text-2xl font-semibold">{name}</div>
            <div className="text-sm font-thin">{cuisines?.join(", ")}</div>
            <div className="text-sm font-thin">{areaName}</div>
          </div>
          <div className="border-solid border-2 p-1 rounded-lg text-center">
            <div className="flex border-solid border-b-2">
              ⭐{avgRatingString}
            </div>
            <div className="text-sm font-thin">{totalRatingsString}</div>
          </div>
        </div>
        <div className="flex w-3/5 pt-2  border-solid border-b-2">
          <div className="flex p-2">
            <svg
              className="RestaurantTimeCost_icon__8UdT4"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                r="8.35"
                transform="matrix(-1 0 0 1 9 9)"
                stroke="#3E4152"
                strokeWidth="1.3"
              ></circle>
              <path
                d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                fill="#3E4152"
              ></path>
            </svg>
            {sla?.deliveryTime} mins
          </div>
          <div className="flex p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {costForTwoMessage}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-3/5 mx-auto p-4">
        {categories?.map((thisCard, index) => {
          const category = thisCard.card.card.title;
          const itemCards =
            thisCard?.card?.card?.categories?.[0]?.itemCards ||
            thisCard?.card?.card?.itemCards;
          return (
            <RestaurantCategory
              key={category}
              category={category}
              showItems={index === showIndex}
              setShowIndex={() => setShowIndex(index)}
              itemCards={itemCards}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

import useRestaurantMenu from "../utils/useRestaurant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const jsonData = useRestaurantMenu(resId);
  const resInfo = jsonData?.data?.cards[0]?.card?.card?.info;
  const resMenu =
    jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const { name, avgRating, cuisines, areaName } = resInfo ?? {};
  return (
    <div className="center">
      <div className="restaurant">
        <h1>
          {name} - {avgRating}
        </h1>
        <h2>{areaName}</h2>
        <p>{cuisines?.join(", ")}</p>
      </div>
      <div className="menu">
        <h1>Menu</h1>
        <ul>
          {resMenu?.map((thisCard) => {
            const itemCards =
              thisCard?.card?.card?.categories?.[0]?.itemCards ||
              thisCard?.card?.card?.itemCards;
            return itemCards?.map((itemCard) => {
              return (
                <li key={itemCard.card.info.id}>
                  <h3>
                    {itemCard.card.info.name} - Rs.
                    {itemCard.card.info.price / 100 ||
                      itemCard.card.info.defaultPrice / 100}
                  </h3>
                </li>
              );
            });
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

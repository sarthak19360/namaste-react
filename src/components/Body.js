import ResCard from "./ResCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=28.67003492726483&lng=77.11469986756225"
    );
    const json = await data.json();
    setListOfRestaurants(
      json.data.success.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );
  };

  return (
    <div className="body">
      <div className="search-bar">
        <button
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Search for Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <ResCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

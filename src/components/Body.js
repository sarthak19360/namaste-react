import ResCard, { withVegLabel } from "./ResCard";
import { useEffect, useState, useContext } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=28.67003492726483&lng=77.11469986756225"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.success?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.success?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1 className="center">
        Looks like internet connection is off. Try turning it on!!
      </h1>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <ShimmerUI />;
  }

  const ResCardVeg = withVegLabel(ResCard);

  return (
    <div className="my-2 flex flex-col justify-center">
      <div className="flex justify-center">
        <div>
          <input
            className="px-2 py-1 w-56 mr-2 border-2 rounded-lg"
            type="text"
            placeholder="Search here"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-100 px-2 py-1 rounded-lg hover:bg-green-200"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredList);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-gray-200 px-2 py-1 rounded-lg hover:bg-gray-300 mx-8"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Search for Top Rated Restaurants
        </button>
        <label className="pt-1">UserName: </label>
        <input
          type="text"
          className="border-4 border-solid px-2"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            style={{ textDecoration: "none", color: "black" }}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info?.veg ? (
              <ResCardVeg restaurant={restaurant} />
            ) : (
              <ResCard restaurant={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

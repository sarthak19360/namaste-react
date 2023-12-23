import ResCard from "./ResCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" placeholder="Search for Restaurants" />
        <button>Search</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <ResCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

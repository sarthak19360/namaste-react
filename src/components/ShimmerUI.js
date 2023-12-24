const ShimmerUI = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <div>
          <input type="text" className="search shimmer" />
          <button className="btn shimmer">Search</button>
        </div>
        <button className="btn shimmer">
          Search for Top Rated Restaurants
        </button>
      </div>
      <div className="shimmer-container">
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
      </div>
    </div>
  );
};

export default ShimmerUI;

import { IMG_URL } from "../utils/constants";
const ResCard = (props) => {
  const { restaurant } = props;
  const {
    name,
    cloudinaryImageId,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
    sla,
    isOpen,
  } = restaurant.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={IMG_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="res-name">{name}</h3>
      <h5 className="res-rating">
        {"⭐" + avgRating + " • " + sla.deliveryTime + " mins"}
      </h5>
      <div className="res-desc">
        <p className="res-cuisines">{cuisines.join(", ")}</p>
        <p className="res-area">{areaName}</p>
      </div>
    </div>
  );
};

export default ResCard;

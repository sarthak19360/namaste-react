import { IMG_URL } from "../utils/constants";
const ResCard = (props) => {
  const { restaurant } = props;
  const {
    name,
    cloudinaryImageId,
    areaName,
    cuisines,
    avgRatingString,
    sla,
    veg,
  } = restaurant.info;
  return (
    <div className="w-[230] m-2 h-fit max-h-15 p-3 border-2 rounded-lg flex flex-col items-center">
      <img
        className="rounded-lg w-[210] h-[210]"
        src={IMG_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="text-xl h-20 font-medium flex items-center text-center">
        {name}
      </h3>
      <h5 className="text-lg font-normal">
        {"⭐" + avgRatingString + " • " + sla.deliveryTime + " mins"}
      </h5>
      <div className="text-center text-sm">
        <p className="font-extralight p-2 text-clip line-clamp-1">
          {cuisines.join(", ")}
        </p>
        <p className="font-normal">{areaName}</p>
      </div>
    </div>
  );
};

export const withVegLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-300 font-medium border m-2 p-2">
          Veg
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;

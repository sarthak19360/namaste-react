import { MENU_IMG } from "../utils/constants";
const CartItemList = ({ cartItem }) => {
  const { name, price, defaultPrice, imageId, description } =
    cartItem?.card?.info || {};
  return (
    <div className="flex justify-between p-3 border-b-2 border-gray-200">
      <div className="w-9/12">
        <div className="font-semibold">{name}</div>
        <div className="rupee">{price ? price / 100 : defaultPrice / 100}</div>
        <div className="text-xs font-extralight pr-2">{description}</div>
      </div>
      <div className="w-3/12">
        <img
          className="h-28 w-32 rounded-lg bg-cyan-200"
          src={MENU_IMG + imageId}
          alt="menu-item"
        />
      </div>
    </div>
  );
};

export default CartItemList;

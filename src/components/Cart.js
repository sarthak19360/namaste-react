import ItemList from "./CartItemList";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center w-6/12 m-auto">
      <h1 className="font-bold text-xl">Cart</h1>
      {cartItems?.map((item) => {
        return <ItemList key={item?.card?.info?.id} cartItem={item} />;
      })}
    </div>
  );
};

export default Cart;

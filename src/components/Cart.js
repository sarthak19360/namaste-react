import CartItemList from "./CartItemList";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="text-center w-6/12 m-auto">
      <h1 className="font-bold text-2xl pb-2">Cart</h1>
      <button
        onClick={() => {
          dispatch(clearCart());
        }}
        className="px-2 py-1 rounded-lg bg-violet-500 text-white font-semibold"
      >
        Clear Cart
      </button>
      {cartItems?.map((item) => {
        return <CartItemList key={item?.card?.info?.id} cartItem={item} />;
      })}
    </div>
  );
};

export default Cart;

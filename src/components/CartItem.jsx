import React from "react";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { BiMinus, BiPlus, BiTrash } from "react-icons/bi";


const CartItem = ({ item }) => {
  const [{ cartItems }, dispatch] = useStateValue();

  const updateQuantity = (newQuantity) => {
    // Update the quantity of the item in the cartItems state
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, qty: newQuantity } : cartItem
    );
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: updatedCartItems,
    });
  };

  const handleRemove = () => {
    // Remove the item from the cartItems state
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: updatedCartItems,
    });
  };

  return (
    <div className="w-full px-2 rounded-lg bg-cartitem bg-cartItem flex items-center gap-2">
      <img
        src={item.imageURL}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt=""
      />

      {/*name section*/}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.tittle}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          $ {parseFloat(item?.price) * item.qty}
        </p>
      </div>

      {/*button section*/}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer ">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQuantity(item.qty - 1)}
        >
          <BiMinus className="text-gray-50" />
        </motion.div>
        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center">
          {item.qty}
        </p>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQuantity(item.qty + 1)}
        >
          <BiPlus className="text-gray-50" />
        </motion.div>
        <motion.div whileTap={{ scale: 0.75 }} onClick={handleRemove}>
          <BiTrash className="text-gray-50" />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;

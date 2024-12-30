import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCart from "../img/emptyCart.svg";
import CartItem from "./CartItem";
import Pay from "./Payment1";
import { app } from "../firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const CartContainer = () => {


  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const [flag, setFlag] = useState(1);
  const [totalCost, setTotalCost] = useState(0);
  const [isMenu, setisMenu] = useState(false);

  const login = async () => {
    if (!user) {
      try {
        const {
          user: { refreshToken, providerData },
        } = await signInWithPopup(firebaseAuth, provider);
        dispatch({
          type: actionType.SET_USER,
          user: providerData[0],
        });
        localStorage.setItem("user", JSON.stringify(providerData[0]));
      } catch (error) {
        console.error("Error occurred during login:", error);
      }
    } else {
      setisMenu(!isMenu);
    }
  };


  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTotalCost(totalPrice);
  }, [cartItems]);

  const clearCart = () => {
    // Clear the cart items
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: [],
    });
    // Optionally, you can clear the local storage as well
    localStorage.removeItem("cartItems");
  };

  const handlePaymentStatusChange = (response) => {
    // Handle payment status change here
    console.log("Payment Status:", response);
    // Additional logic can be added based on payment status
  };
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col fixed top-0 right-0 z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
          onClick={clearCart}
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
          <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                setFlag={setFlag}
                flag={flag}
              />
            ))}
          </div>
          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Sub Total</p>
              <p className="text-gray-400 text-lg">$ {totalCost}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Delivery</p>
              <p className="text-gray-400 text-lg">$ 2.5</p>
            </div>
            <div className="w-full border-b border-gray-600 my-2"></div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-200 text-xl font-semibold">Total</p>
              <p className="text-gray-200 text-xl font-semibold pb-4">
                ${totalCost + 2.5}
              </p>
            </div>
            {/* Render Pay component if user is logged in, otherwise render login button */}
            {user ? (
              <Pay
                totalCost={totalCost}
                onPaymentStatusChange={handlePaymentStatusChange}
              />
            ) : (
              <button
                onClick={login}
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded"
              >
                Login To Proceed the Purchase
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;

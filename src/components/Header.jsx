import React, { useState } from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
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

  const logout = () => {
    setisMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary  ">
      {/* Desktop & Tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-20 object-cover" />
          <p className="text-headingColor text-xl font-bold">URBAN BIKERS</p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <Link
              to="/*" // Link to the "Contact Us" page
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/menu" // Link to the "Contact Us" page
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            >
              Menu
            </Link>
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
              onClick={() => setisMenu(false)}
            >
              About us
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
              onClick={() => setisMenu(false)}
            >
              RoadSide Assistance
            </li>
          </motion.ul>
          <div className="hidden md:flex">
            <Link
              to="/contactUS" // Link to the "Contact Us" page
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            >
              Contact Us
            </Link>
          </div>

          <div
            className="relative flex items-center justify-center "
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar} // Conditional rendering of user photo or default avatar
              alt="userprofile"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className=" flex flex-col w-40 bg-primary shadow-xl rounded-lg absolute  right-4 top-20 px-2 py-2"
              >
                <p>{user.displayName}</p>
                {user && user.email === "dineshksm22@gmail.com" && (
                  <Link
                    to="/createItem"
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover: bg-slate-100 translate-all duration-100 ease-in-out text-textColor text-base"
                    onClick={() => setisMenu(false)}
                  >
                    New Item <MdAdd />
                  </Link>
                )}

                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover: bg-slate-100 translate-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex  w-full items-start:center justify-between md:hidden">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-20 object-cover" />
          <p className="text-headingColor text-xl font-bold">URBAN BIKERS</p>
        </Link>

        {/*cart */}
        <div
          className="relative flex items-center -right-1"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>

        <div>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar} // Conditional rendering of user photo or default avatar
            alt="userprofile"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className=" flex flex-col w-40 bg-primary shadow-xl rounded-lg absolute  right-4 top-20 px-2 py-2"
            >
              <p>{user.displayName}</p>
              {user && user.email === "dineshksm22@gmail.com "}
              {
                <Link
                  to="/createItem"
                  className="px-2 py-2 flex items-center  cursor-pointer hover: bg-slate-100 translate-all duration-100 ease-in-out text-textColor text-base"
                  onClick={() => setisMenu(false)}
                >
                  New Item <MdAdd />
                </Link>
              }
              <ul className="flex flex-col  ">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-2 py-2 "
                  onClick={() => setisMenu(false)}
                >
                  Home
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-2 py-2"
                  onClick={() => setisMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-2 py-2"
                  onClick={() => setisMenu(false)}
                >
                  About us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-2 py-2"
                  onClick={() => setisMenu(false)}
                >
                  RoadSide Service
                </li>
              </ul>

              <p
                className="px-2 py-2 flex items-center justify-center gap-3   cursor-pointer hover: bg-slate-200 translate-all duration-100 ease-in-out text-base text-red-500 rounded-md shadow-md"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

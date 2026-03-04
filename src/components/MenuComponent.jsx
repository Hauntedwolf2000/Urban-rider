import React, { useState, useEffect } from "react";
import MenuContainer from "./MenuContainer";
import video from "../img/menu.mp4";
import Footer from "./Footer";
import { useStateValue } from "../context/StateProvider";
import CartContainer from "./CartContainer";

const MenuComponent = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [{ cartShow }] = useStateValue();

  const handleScroll = () => {
    if (window.pageYOffset > 400) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative w-full h-[100dvh] overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src={video} type="video/mp4" />
  </video>

  {/* Overlay Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black bg-opacity-40 z-10">
    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-xl">
      Scroll Down to Protect Yourself
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-white mt-2 drop-shadow">
      Explore our Safety products
    </p>
    <button
      onClick={() =>
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        })
      }
      className="mt-8 animate-bounce bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full shadow-lg text-sm flex flex-col items-center"
    >
      Explore Now
      <svg
        className="w-5 h-5 mt-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
        />
      </svg>
    </button>
  </div>
</div>

      <div className="mt-20">
        <MenuContainer />
      </div>
      <div>
        <Footer />
      </div>
      {cartShow && <CartContainer />}
      {showBackToTop && (
        <button
          type="button"
          className="fixed bottom-5 right-5 hidden md:block rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
          onClick={scrollToTop}
        >
          <span className="[&>svg]:w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </span>
        </button>
      )}
    </>
  );
};

export default MenuComponent;

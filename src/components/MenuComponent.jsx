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
      <div className="relative h-screen">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">
              Scroll Down to Protect Yourself
            </h1>
            <p className="text-xl text-white">Explore our Safety products</p>
            <div>
              <span
                className="inline-block animate-bounce rounded-full p-4 bg-orange-500 text-white text-sm mt-10 cursor-pointer"
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
              >
                Explore Now
                <svg
                  className="w-6 h-6 mx-auto"
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
              </span>
            </div>
          </div>
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

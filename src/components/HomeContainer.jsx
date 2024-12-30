import React, { useState, useEffect } from "react";
import Delivery from "../img/delivery.png";
import Herobg from "../img/heroBg.png";
import { heroData } from "../utils/data";
import { Link } from "react-router-dom";

const HomeContainer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  return (
    <section
      className="grid grid-col-1 md:grid-cols-2 gap-2 w-full pt-10 pr-10"
      id="home"
    >
      <div className="py-2 px-10 flex-1 flex flex-col items-start md:items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Two Wheels, One Love
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src={Delivery}
              className="w-full h-full bg-white drop-shadow-xl object-contain"
              alt="delivery"
            ></img>
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor ">
          Avoid a scare, a{" "}
          <span className=" text-red-600 text-[3rem] lg:text-[4rem]">
            SAFETY GEAR
          </span>{" "}
          you should wear{" "}
        </p>

        <p className="text-base textColor text-center md:text-left md:[80%]">
          In the dance of life, where roads wind and destinies intertwine, there
          exists a singular rhythm that beats within the hearts of two souls
          bound by a common passion: the symphony of two wheels, one love. As
          they traverse the open road together, each twist and turn becomes a
          testament to their unity, their bond forged by shared adventures and
          whispered promises beneath the vast expanse of the sky. With the wind
          as their companion and the horizon as their destination, they find
          solace in the simple joy of journeying hand in hand, knowing that as
          long as they ride side by side, their love will remain unyielding, an
          eternal flame burning brightly against the backdrop of life's
          ever-changing landscape.
        </p>

        <Link to="/menu">
          <button
            type="button"
            className="bg-gradient-to-br from-orange-400 to-orange-500 w-full px-6 py-4 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto"
          >
            Order Now
          </button>
        </Link>
      </div>
      <div className="py-2 flex-1 flex items-center ">
        <div className="w-full flex items-center justify-center relative">
          <div className="w-full absolute hidden md:flex items-center pt-64 lg:pt-24 md:px-39 py-2 gap-20 flex-wrap justify-center">
            {heroData &&
              heroData.map((n) => (
                <div
                  key={n.id}
                  className=" lg:w-190 min-w-[190px]  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center"
                >
                  <img
                    src={n.imagesrc}
                    alt="helmet"
                    className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  ></img>
                  <p className="text-base  lg:text-xl font-semibold mt-1 lg:mt-2">
                    {n.name}
                  </p>
                  <p className="text-[10px] lg:text-sm text-lighttextGray font-semibold justify-center text-center my-1 lg:my-2">
                    {n.decp}
                  </p>
                  <p className=" text-xs text-red-600 pt-2">{n.price}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* Back to top button */}
      {showBackToTop && (
        <button
          type="button"
          className="fixed bottom-5 right-5 hidden md:block rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
          id="btn-back-to-top"
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
    </section>
  );
};

export default HomeContainer;

import React, { useEffect, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import Footer from "./Footer";
import Testimonial from "./Testimonial";

const MainContainer = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [{ products, cartShow }, dispatch] = useStateValue();
  const [filter, setFilter] = useState("combo");

  const handleLeftClick = () => {
    setScrollValue((prevScrollValue) => prevScrollValue - 200);
  };

  const handleRightClick = () => {
    setScrollValue((prevScrollValue) => prevScrollValue + 200);
  };

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-auto md:mt-8">
        <HomeContainer />
        <section className="w-full justify-center my-10 pl-8 mt-60">
          <div className="w-full flex items-center justify-between">
            <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 ">
              Our Best and Safty Gears
            </p>
            <div className="hidden md:flex gap-3 items-center">
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="w-10 h-10 md:w-8 md:h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
                onClick={handleLeftClick}
              >
                <MdChevronLeft className="text-lg md:text-base text-white" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="w-10 h-10 md:w-8 md:h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
                onClick={handleRightClick}
              >
                <MdChevronRight className="text-lg md:text-base text-white" />
              </motion.button>
            </div>
          </div>
          <RowContainer
            scrollValue={scrollValue}
            flag={true}
            data={products?.filter((n) => n.catagory === filter)}
          />
        </section>

        {cartShow && <CartContainer />}
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MainContainer;

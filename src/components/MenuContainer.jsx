import React, { useState } from "react";
import { IoBicycle } from "react-icons/io5";
import { motion } from "framer-motion";
import { catagories } from "../utils/data";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";

const MenuContainer = () => {
  const [filter, setFilter] = useState("Select Category");
  const [{ products }] = useStateValue();

  return (
    <section className="w-full my-6 px-4 lg:px-12" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-3xl font-semibold text-headingColor relative mb-6 text-center">
          Our Hot Gears
          <span className="block w-20 h-1 bg-gradient-to-tr from-orange-400 to-orange-600 rounded-lg mt-2 mx-auto"></span>
        </p>

        {/* Centered category cards */}
        <div className="w-full flex flex-wrap justify-center gap-6 py-4">
          {catagories &&
            catagories.map((catagory) => (
              <motion.div
                whileTap={{ scale: 0.9 }}
                key={catagory.id}
                className={`transition duration-300 cursor-pointer rounded-xl shadow-md w-28 h-32 flex flex-col items-center justify-center
                  ${
                    filter === catagory.urlParamName
                      ? "bg-orange-500 text-white ring-4 ring-orange-300"
                      : "bg-white hover:bg-orange-100"
                  }`}
                onClick={() => setFilter(catagory.urlParamName)}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full
                    ${
                      filter === catagory.urlParamName
                        ? "bg-white text-orange-500"
                        : "bg-orange-500 text-white"
                    } transition-all duration-200 shadow-lg`}
                >
                  <IoBicycle size={24} />
                </div>
                <p
                  className={`mt-3 text-sm font-medium text-center ${
                    filter === catagory.urlParamName
                      ? "text-white"
                      : "text-gray-800"
                  }`}
                >
                  {catagory.name}
                </p>
              </motion.div>
            ))}
        </div>

        {/* Filtered Row Items */}
        <div className="w-full mt-8">
          <RowContainer
            flag={false}
            data={products?.filter(
              (item) => item.catagory === filter
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;

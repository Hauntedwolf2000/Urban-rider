import { Route, Routes } from "react-router-dom";
import "./App.css";
import {AnimatePresence} from "framer-motion"
import { Header, MainContainer , CreateContainer, Contact, MenuComponent, MenuContainer } from "./components";
import { useEffect, useState } from "react";
import { useStateValue } from "./context/StateProvider";
import { getAllPRODUCTS } from "./utils/firbaseFunctions";
import { actionType } from "./context/reducer";
import ContactMenu from "./components/Contact";

function App() {
  const[{products} ,dispatch ]=useStateValue();

  const fetchData = async () => {
    await getAllPRODUCTS().then((data) => {
      dispatch({
        type: actionType.SET_PRODUCTS,
        products: data,
      });
    });
  };

  useEffect(()=>{fetchData();},[]);
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex  flex-col bg-primary ">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px16 py-4 w-full ">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/contactUS" element={<ContactMenu />} />
            <Route path="/menu" element={<MenuComponent />} />
            <Route path="/menuContainer  " element={<MenuContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;

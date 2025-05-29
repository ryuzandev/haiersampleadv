import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Importing Components FOR hair------------------------------> start
import HaierOffers from "./haier/components/Offers";
import HaierNavbar from "./haier/components/Navbar";
import HaierNavbarCommon from "./haier/components/NavbarCommon";
import HaierCarousal from "./haier/components/Carousal";
import HaierGridMultiService from "./haier/components/GridMultiService";
import HaierFooter from "./haier/components/Footer";
import HaierBookNowCards from "./haier/components/BookNowCards";
import HaierTroubleshootCards from "./haier/components/TroubleshootCards";
import HaierTvComponent from "./haier/components/TvComponent";
import HaierWashingMachine from "./haier/components/WashingMachine";
import HaierMicroWave from "./haier/components/MicroWave";
import HaierAirConditioner from "./haier/components/AirConditioner";
// import { ProductData } from "./ProductData";
import HaierAllProducts from "./haier/components/AllProducts";
import HaierRefrigerator from "./haier/components/Refrigerator";
import HaierDishwasher from "./haier/components/DishWasher";
import HaierChatbot from "./haier/components/AssestComponents/Chatbot";
import HaierContactUsFloating from "./haier/components/AssestComponents/ContactUsFloating";
import HaierExoticAUtoDeleteCards from "./haier/components/ExoticAutoDeleteCards";
import HaierConsoleBox from "./haier/components/AssestComponents/ConsoleBox";
// importing Components FOR haier------------------------------> end
// importing homepage components start------------>
import Homebale from "./democomponents/Homebale";
// importing homepage components end----------------->

// Context Resource
import { createContext } from "react";

// Context Functionality
export const AppContext = createContext();

function App() {
  const brandName = "haiersampleadv";
  return (
    <AppContext.Provider value={{ brandName }}>
      <Router>
        <Routes>
          {/* HAIER COMPONENTS START HERE ---------------------------> */}
          <Route
            // path="lg/"
            // path={`/${brandName}/haier/`}
            // path={`/${brandName}/`}
            path={`/haiersampleadv/`}
            element={
              <>
                {/* <HaierOffers /> */}
                <HaierNavbarCommon />
                <HaierCarousal />
                <Homebale />
                <HaierGridMultiService />
                <HaierChatbot />
                <HaierContactUsFloating />
                <HaierFooter />
                <HaierConsoleBox />
              </>
            }
          />

          {/* BookNow Page */}
          <Route
            // path="lg/book-now"
            path={`/${brandName}/haier/book-now`}
            element={
              <>
                {/* <HaierOffers /> */}
                <HaierNavbar />
                <HaierBookNowCards />
                <HaierChatbot />
                <HaierContactUsFloating />
                <HaierFooter />
                <HaierConsoleBox />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            // path="lg/troubleshoot"
            path={`/${brandName}/haier/troubleshoot`}
            element={
              <>
                {/* <HaierOffers /> */}
                <HaierNavbar />
                <HaierTroubleshootCards />
                <HaierChatbot />
                <HaierContactUsFloating />
                <HaierFooter />
                <HaierConsoleBox />
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            // path="lg/exoticdeletecards"
            path={`/${brandName}/haier/exoticdeletecards`}
            element={
              <>
                {/* <HaierOffers /> */}
                <HaierNavbar />
                <HaierExoticAUtoDeleteCards />
                <HaierChatbot />
                <HaierContactUsFloating />
                <HaierFooter />
                <HaierConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="lg/tv"
            path={`/${brandName}/haier/tv`}
            element={
              <>
                {/* <HaierOffers /> */}
                <HaierNavbar />
                <HaierTvComponent />
                <HaierChatbot />
                <HaierContactUsFloating />
                <HaierFooter />
                <HaierConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="/lg/washing"
            path={`/${brandName}/haier/washing`}
            element={
              <>
                {/* <HaierOffers /> */}
                <HaierNavbar />
                <HaierWashingMachine />
                <HaierChatbot />
                <HaierContactUsFloating />
                <HaierFooter />
                <HaierConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="lg/microwave"
            path={`/${brandName}/haier/microwave`}
            element={
              <>
                {/* <HaierOffers /> */}
                <HaierNavbar />
                <HaierMicroWave />
                <HaierChatbot />
                <HaierContactUsFloating />
                <HaierFooter />
                <HaierConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="lg/Refrigerator"
            path={`/${brandName}/haier/Refrigerator`}
            element={
              <>
                {/* <HaierOffers /> */}
                <HaierNavbar />
                <HaierRefrigerator />
                <HaierChatbot />
                <HaierContactUsFloating />
                <HaierFooter />
                <HaierConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="lg/DishWasher"
            path={`/${brandName}/haier/waterheater`}
            element={
              <>
                {/* <HaierOffers /> */}
                <HaierNavbar />
                <HaierDishwasher />
                <HaierChatbot />
                <HaierContactUsFloating />
                <HaierFooter />
                <HaierConsoleBox />
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            // path="lg/aircondition"
            path={`/${brandName}/haier/aircondition`}
            element={
              <>
                {/* <HaierOffers /> */}
                <HaierNavbar />
                <HaierAirConditioner />
                <HaierChatbot />
                <HaierContactUsFloating />
                <HaierFooter />
                <HaierConsoleBox />
              </>
            }
          />

          {/* All products Page */}
          <Route
            // path="lg/products"
            path={`/${brandName}/haier/products`}
            element={
              <>
                {/* <HaierOffers /> */}
                <HaierNavbar />
                <HaierAllProducts />
                <HaierChatbot />
                <HaierContactUsFloating />
                <HaierFooter />
                <HaierConsoleBox />
              </>
            }
          />
          {/* HAIER COMPONENTS END HERE -------------------------->  */}
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Navbar from "./components/Navbar";
import poster from "./assets/poster.png";
import Search from "./components/Search";
import Body from "./components/Body";
import Button from "./components/Button";
import Responsive from "./components/Slider";
import Services_button from "./components/Services_button";
import Cards from "./components/Cards";
import How_works from "./components/How_works";
import Form from "./components/Form";
import Get_it from "./components/Get_it";
import Joinus from "./components/Joinus";
import Team from "./components/Team";

function App() {
  return (
    <div className="relative">
      <div className="container">
        <div className="hidden md:block">
          <img
            src={poster}
            alt="poster"
            className="absolute hidden lg:block top-0 right-0 w-[40vw] lg:h-[60vw]"
          />
        </div>
        <Navbar />
        <Search />
        <Body />
        <Button />
        <Responsive />
        <Services_button />
        <div className="text-[5.06vw] md:text-[3vw] font-[600] mt-[0.92vw]">
          Services we Provide!
        </div>
        <Cards />
        <How_works />
        <Team/>
        <Form />
        <Get_it />
        <Joinus />
      </div>
    </div>
  );
}

export default App;

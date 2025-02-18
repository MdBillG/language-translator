import React from "react";
import Cards from "../Cards";
import Ads from "../Ads";

const Body = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-4 p-4">
      <div className="w-full md:w-[70%]">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="w-full md:w-[30%]">
        <Ads />
        <Ads />
        <Ads />
        <Ads />
        <Ads />
      </div>
    </div>
  );
};

export default Body;


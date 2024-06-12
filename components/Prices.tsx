import React from "react";
import PriceCard from "./helper/PriceCard";

const Prices = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="text-center">
        <p className="heading__mini">Popular Services</p>
        <h1 className="heading__primary">
          Best <span className="text-yellow-300">Pricing</span> For Your Project
        </h1>
      </div>
      <div
        className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center
      pt-[4rem] md:pt-[7rem]"
      >
        <div data-aos="zoom-out-down" data-aos-anchor-placement="top-center">
          <PriceCard plane="Basic" price="10$" save="25%" bg="bg-purple-900" />
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <PriceCard plane="Popular" price="20$" save="20%" bg="bg-red-900" />
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <PriceCard plane="Premium" price="35$" save="45%" bg="bg-green-900" />
        </div>
      </div>
    </div>
  );
};

export default Prices;

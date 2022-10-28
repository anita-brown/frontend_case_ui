import React from "react";
import { SlArrowRightCircle } from "react-icons/sl"
import Card from "../../shared/Card";


const SectionThree = () => {
  return (
    <div className="lg:mt-[12rem] md:mt-[10rem] mt-[8rem] lg:flex lg:justify-between">
      <div className="lg:w-[50%] flex flex-col w-full gap-2 lg:flex lg:gap-4 lg:flex-col">
        <h2 className="lg:text-xl text-purple-600 border-b-[.2rem] border-purple-300 bg-purple-100 w-20">Features</h2>
        <h1 className="lg:text-3xl font-bold">Create Payment Requests</h1>
        <p className="lg:text-[1rem] leading-8 text-gray-500">Make a simple payment link in 5 seconds. Use our powerful <br /> features to customize your request</p>
        <div className="mt-8 flex items-center gap-[.8rem] text-blue-600">
          <a href="/" className="lg:border-blue-300  lg:border-b-[.1rem] hover  lg:border-transparent hover:border-blue-500 ease-in-out duration-200 lg:text-[1.1rem]">Learn More</a>
          <i className="hover:text-blue-800 hover:text-bold"><SlArrowRightCircle size={15} /></i>
        </div>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default SectionThree;

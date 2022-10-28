import React from "react";
import Button from "../../shared/Button";


const SectionOne = () => {
  return (
    <div className="w-[100%] ">
      <h1 className="font-[550] text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] font-serif w-full">
        A faster & easier <br /> way to receive <br />
        <span className="text-blue-500 border-b-[.5rem] border-blue-200 bg-blue-100">payments</span> online.
      </h1>
      <p className="lg:text-[1.1rem] lg:mt-4 mt-4 leading-[2rem] lg:w-[50%] md:w-[50%] text-gray-600">Scuad builds innovative pathways to enable all types of businesses and individuals from around the world make and receive payments smarter and simpler</p>
      <div className="mt-12">
        <Button text="Create an Account" />
      </div>

    </div>
  );
};

export default SectionOne;

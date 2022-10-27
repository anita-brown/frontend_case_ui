import React from "react";
import Button from "../../shared/Button";

const SectionOne = () => {
  return (
    <div className="lg:w-[50%]">
      <h1 className="font-[550] lg:text-[3.5rem] font-serif">
        A faster & easier <br /> way to receive <br />
        <span className="text-blue-500 border-b-[.5rem] border-blue-200 bg-blue-100">payments</span> online.
      </h1>
      <p className="lg:text-[1.1rem] lg:mt-4 leading-[2rem] text-gray-600">Scuad builds innovative pathways to enable all types of businesses and individuals from around the world make and receive payments smarter and simpler</p>
      <div className="mt-12">

        <Button text="Create an Account"/>
      </div>
     
    </div>
  );
};

export default SectionOne;

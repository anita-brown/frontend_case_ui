import React from "react";
import Button from "../../shared/Button";


const SectionSix = () => {
    return (
        <div className="mt-[10rem] lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-[50%]">
                <h2 className="lg:text-xl text-green-600 border-b-[.2rem] border-green-300 bg-green-50 w-[10rem]">Ready for a trial ?</h2>
                <h1 className="font-[550] lg:text-[3.5rem] font-serif">
                    Start accepting
                    <span className="text-blue-500 border-b-[.5rem] border-blue-200 bg-blue-100"> payments</span> in minutes
                </h1>
            </div>
            <Button text="Create a free Account" />   
        </div>
    );
};

export default SectionSix;

import React from "react";
import { VscCircleFilled } from "react-icons/vsc";

const Card = () => {
    return (
        <div className="mt-8 lg:flex flex flex-col relative z-0 lg:z-0 lg:relative lg:gap-[.2rem] lg:flex-col border-gray-100 border-4 rounded-2xl w-[290px] lg:w-[360px] h-[270px] py-2 px-4 ">
            <div className=" flex lg:flex">
                <i>
                    <VscCircleFilled color="#f08185" size={20} />
                </i>
                <i>
                    <VscCircleFilled color="#f2e0b3" size={20} />
                </i>
                <i>
                    <VscCircleFilled color="#b3f2bc" size={20} />
                </i>
            </div>

            <div className="flex lg:flex items-center lg:items-center">
                <i>
                    <VscCircleFilled color="rgba(153, 150, 150, 0.238)" size={85} />
                </i>
                <i className=" lg:w-full w-full h-4 lg:h-4 bg-gray-100"></i>
            </div>
            <div className="lg:w-[25rem] w-[20rem] border-y-2 border-gray-200 lg:border-y-2 lg:border-gray-200 lg:p-[.3rem] lg:flex lg:justify-between lg:w-[300px] ml-[1rem] lg:ml-[-8rem] lg:z-50 z-50">
                <input className="outline-none w-[200px] lg:w-[260px]" type="url" placeholder="https://www.habarpay.com/940jej..." id="" />
                <button className="bg-green-600 rounded px-[.6rem] py-1 text-white">Copy Link</button>
            </div>
            <div className=" flex lg:flex items-center lg:items-center">
                <i>
                    <VscCircleFilled color="rgba(153, 150, 150, 0.238)" size={85} />
                </i>
                <i className="lg:w-full lg:h-4 h-4 w-full bg-gray-100"></i>
            </div>
        </div>
    );
};

export default Card;

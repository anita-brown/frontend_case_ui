import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const SectionFive = () => {
  const cardItem = [
    {
      image: require("../assets/world.png"),
      heading: "Scuad for Global Brands",
      content: "We help global brands accept payments from across Africa.",
      link: "Learn More",
    },
    {
      image: require("../assets/avatar.png"),
      heading: "Scuad for Entrepreneurs",
      content: "From startup to scale up, we can support you at every stage of your businesses growth.",
      link: "Learn More",
    },
    {
      image: require("../assets/hand.png"),
      heading: "Scuad for Large Organizations",
      content: "Paystack helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely.",
      link: "Learn More",
    },
  ];
  return (
    <div className="mt-[15rem] lg:flex lg:flex-col lg:gap-[5rem]">
      <div className="lg:flex lg:flex-col lg:gap-4">
        <h2 className="lg:text-xl text-blue-400 border-b-[.2rem] border-blue-300 bg-blue-100 w-20">Support</h2>
        <h1 className="lg:text-3xl font-bold">Trusted by businesses all over Africa</h1>
        <p className="lg:text-[1rem] leading-8 text-gray-500 w-65">
          Our platform provides a resource of scalable and reliable technology optimized <br /> to drive growth in new markets and dominate in older ones.
        </p>
      </div>
      <div className="lg:flex lg:justify-between">
        {cardItem.map((item) => (
          <div className="lg:flex lg:flex-col lg:gap-4 leading-6 bg-[#fcfcfc] p-8 w-[30%] h-[35vh] drop-shadow-md rounded hover:-translate-y-5 hover:scale-100 transition duration-700 ease-in-out hover:bg-blue-50 cursor-pointer">
            <img width={40} src={item.image} alt="icons" />
            <h1 className="font-bold">{item.heading}</h1>
            <p>{item.content}</p>

            <div className="flex items-center gap-2">
              <a className="text-blue-500 lg:border-blue-300  lg:border-b-[.1rem] hover lg:text-[.89rem] lg:border-transparent hover:border-blue-500 ease-in-out duration-200 lg:text-[1.1rem]" href="/">
                {item.link}
              </a>
              <i className="text-blue-500 hover:text-blue-800 hover:text-bold">
                <IoIosArrowDropright size={16} />
              </i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFive;

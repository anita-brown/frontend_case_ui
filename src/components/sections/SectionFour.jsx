import React from 'react'
import man_image from '../assets/man_pic.jpg'
import { CgCheckR } from 'react-icons/cg'
import { SlArrowRightCircle } from "react-icons/sl"
import { list } from '../../data/data'


const SectionFour = () => {

  return (
    <div className='lg:mt-[15rem] lg:flex lg:gap-16'>
      <img className='h-[590px] rounded' width={530} src={man_image} alt="pic" />
      <div className='lg:flex lg:flex-col w-[50%] gap-12'>
        <div className=' lg:flex lg:flex-col lg:gap-8'>
          <h1 className='lg:text-xl text-orange-600 border-b-[.2rem] border-orange-300 bg-orange-50 w-[6rem]'>Solutions</h1>
          <p className="lg:text-3xl font-bold lg?: leading-8">Better payments, <br /> unlimited opportunities</p>
          <p className='w-[70%] lg:text-[1rem] leading-8 text-gray-500'>Get faster, more reliable transactions. Higher conversions.
            Unbeatable insight and flexibility. So you can delight your
            customers and unlock new revenue streams.</p>
        </div>
        <div className='grid grid-cols-2 gap-8'>

          {list.map((item) => (
            <div className='lg:flex lg:items-center gap-[1rem]'>
              <i><CgCheckR size={25} color={"#54cb66"} /></i>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-[.8rem] text-blue-600">
          <a href="/" className="lg:border-blue-300  lg:border-b-[.1rem] hover  lg:border-transparent hover:border-blue-500 ease-in-out duration-200 lg:text-[1.1rem]">Create a free account</a>
          <i className="hover:text-blue-800 hover:text-bold"><SlArrowRightCircle size={15} /></i>
        </div>
      </div>
    </div>
  )
}

export default SectionFour

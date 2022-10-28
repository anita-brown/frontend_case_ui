import React from 'react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { data } from '../../data/data'


const SectionTwo = () => {
  return (
    <div className='border-t-[.8px] w-full mt-[3rem] lg:mt-[5rem] '>
      <div className='lg:flex md:flex flex-col md:flex-row lg:gap-4 lg:flex-row mt-[3.5rem] text-[.8rem] lg:text-[1rem]  lg:gap-[5rem]'>
        {data.map((item) => (
          <>
            <div className='flex md:gap-4 lg:gap-4 gap-2 lg:items-start w-full'>
              <i className=' h-[4rem] text-2xl'><IoIosCheckmarkCircleOutline color='blue'  /></i>
              <p className='w-full lg:w-full md:w-full'><span className='font-bold'>{item.heading}.</span> {item.content}.</p>
            </div>
          </>
        ))}
      </div>
      <div>
        <p className='lg:text-center mt-8 lg:mt-14 text-[.6rem] lg:text-[.9rem] w-full  text-gray-400'>Fees range between 0.10-2.4NGN (+ additional fees based on % of transaction value). More pricing details per payment method here</p>
      </div>
    </div>
  )
}

export default SectionTwo

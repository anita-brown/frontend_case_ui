import React from 'react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { data } from '../../data/data'


const SectionTwo = () => {
  return (
    <div className='border-t-[.8px] mt-[5rem] '>
      <div className='lg:flex lg:flex-row mt-[3.5rem] lg:gap-[5rem]'>
        {data.map((item) => (
          <>
            <div className='flex gap-4 items-start'>
              <i ><IoIosCheckmarkCircleOutline color='blue' size={35} /></i>
              <p><span className='font-bold'>{item.heading}.</span> {item.content}.</p>
            </div>
          </>
        ))}
      </div>
      <div>
        <p className='text-center mt-14 lg:text-[.9rem] text-gray-400'>Fees range between 0.10-2.4NGN (+ additional fees based on % of transaction value). More pricing details per payment method here</p>
      </div>
    </div>
  )
}

export default SectionTwo

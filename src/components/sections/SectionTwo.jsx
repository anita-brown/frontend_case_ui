import React from 'react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

const data = [
  {
    heading: "Quick setup",
    content: "Begin accepting payments in 15 minutes"
  },
  {
    heading: "Honest pricing",
    content: "Only pay for successful transactions."
  },
  {
    heading: "All leading payment methods",
    content: "The best localised experience"
  },
]

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

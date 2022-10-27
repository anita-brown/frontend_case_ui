import React from 'react'

const Button = (props) => {
  return (
    <button className='group relative bg-green-600 font-[550] text-white w-[33%] p-4 rounded lg:text-[.9rem]'>
      {props.text}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
    </button>
  )
}

export default Button

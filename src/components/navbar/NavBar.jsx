import React from 'react';
import { RiArrowDropDownFill } from 'react-icons/ri'
import icon from '../assets/nigeriaicon.png'
import { navItems } from '../../data/data';
const NavBar = () => {



    return (
        <div className='border-b-[.8px] flex flex-row lg:flex w-full text-[.5rem] md:text-[.8rem] lg:text-[1rem] gap-2 pb-4 items-center lg:justify-end md:justify-end cursor-pointer'>
            <ul className='flex gap-4 lg:gap-2 border-r-2'>
            {navItems.map((item) => (
                <li className=' mr-2 lg:mr-4 text-gray-500 hover border-transparent pb-1 border-b-4 hover:text-black hover:border-green-500 hover:border-b-2 ease-in-out duration-200'>{item}</li>
                
                ))}
                </ul>
            <div className='lg:flex flex lg:gap-2'>
                <img className='h-4' src={icon} width={20} alt="icon" />
                <i>
                    <RiArrowDropDownFill size={20}/>
                </i>
            </div>
                </div>
    )
}

export default NavBar

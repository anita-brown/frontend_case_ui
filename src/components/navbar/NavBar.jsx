import React from 'react';
import { RiArrowDropDownFill } from 'react-icons/ri'
import icon from '../assets/nigeriaicon.png'
const NavBar = () => {

    const navItems = ["Products", "Pricing", "Support", "Documentation", "Login", "Create Account"]

    return (
        <div className='border-b-[.8px]'>

        <div className='flex lg:flex lg:flex-row lg:justify-end lg:items-center lg:gap-4 cursor-pointer pb-4'>
            <ul className='flex lg:gap-2 border-r-2'>
            {navItems.map((item) => (
                <li className='mr-4 text-gray-500 hover border-transparent pb-1 border-b-4 border:bg-red-800 hover:text-black hover:border-green-500 hover:border-b-2 ease-in-out duration-200'>{item}</li>
                
                ))}
                </ul>
            <div className='lg:flex gap-2'>
                <img src={icon} width={20} alt="icon" />
                <i>
                    <RiArrowDropDownFill size={20}/>
                </i>
            </div>
        </div>
                </div>
    )
}

export default NavBar

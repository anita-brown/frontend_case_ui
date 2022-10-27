import React from 'react'
import SectionOne from '../components/sections/SectionOne'
import SectionTwo from '../components/sections/SectionTwo'
import SectionThree from '../components/sections/SectionThree'
import SectionFour from '../components/sections/SectionFour'
import SectionFive from '../components/sections/SectionFive'

const MainBody = () => {
    return (
        <div className='py-[5rem]'>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
        </div>
    )
}

export default MainBody

import React from 'react'
import SectionOne from '../components/sections/SectionOne'
import SectionTwo from '../components/sections/SectionTwo'
import SectionThree from '../components/sections/SectionThree'
import SectionFour from '../components/sections/SectionFour'
import SectionFive from '../components/sections/SectionFive'
import SectionSix from '../components/sections/SectionSix'

const MainBody = () => {
    return (
        <div className='lg:py-[5rem] py-[3rem]'>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
        </div>
    )
}

export default MainBody

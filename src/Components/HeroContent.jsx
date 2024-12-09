import React from 'react'
import {images} from '../assets/assets';

const HeroContent = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between h-[full] items-center">
        <div className='self-center leading-none flex flex-col gap-[2rem] items-center justify-center'>
            <p className='self-start md:text-[1.8rem] sm:text-[1.2rem] text-nowrap font-bold text-[#DF6951]'>Best Destinations around the world</p>
            <p className='self-start font-bold text-left md:text-[4rem] font-serif sm:text-[2.5rem]'>Travel, enjoy and live a new and full life</p>
            <p className='text-[1rem] text-[#5E6282] font-medium text-justify'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
            <button className='md:w-[170px] shadow-[0_0_2px_2px_#F1A501] self-start md:h-[60px] p-[10px] border-none rounded-md bg-[#F1A501] font-sans text-white text-center'>Find out more</button>
        </div>
        <div className='max-h-screen'>
            <img src={images.hero} alt=""/>
        </div>
    </div>
  )
}

export default HeroContent
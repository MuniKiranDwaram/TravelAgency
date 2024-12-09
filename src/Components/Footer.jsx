import React from 'react'
import { images } from '../assets/assets'

export const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-5'>
            <div className='w-full flex flex-row items-center justify-between md:px-10'>
        <div className='relative md:self-start flex flex-col text-wrap items-start justify-start gap-3 max-w-[30%] sm:max-w-[40%]'>
            <h1 className='self-center text-[30px] text-[#181e4b] font-bold'>Jadoo.</h1>
            <p className='self-start text-[15px] text-[#5e6282] font-medium text-wrap'>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div>
            <p className='text-[#080809] font-bold md:text-[20px] sm:text-[15px] pb-3'>Company</p>
            <p className='text-[#5e6282] md:text-[18px] sm:text-[12px] font-medium'>About</p>
            <p className='text-[#5e6282] md:text-[18px] sm:text-[12px] font-medium'>Careers</p>
            <p className='text-[#5e6282] md:text-[18px] sm:text-[12px] font-medium'>Mobile</p>
        </div>
        <div className=''>
            <p className='text-[#080809] font-bold md:text-[20px] sm:text-[15px] pb-3'>Contact</p>
            <p className='text-[#5e6282] md:text-[18px] sm:text-[12px] font-medium'>Help/FAQ</p>
            <p className='text-[#5e6282] md:text-[18px] sm:text-[12px] font-medium'>Press</p>
            <p className='text-[#5e6282] md:text-[18px] sm:text-[12px] font-medium'>Affiliates</p>
        </div>
        <div>
            <p className='text-[#080809] font-bold md:text-[20px] sm:text-[15px] pb-3'>More</p>
            <p className='text-[#5e6282] md:text-[18px] sm:text-[12px] font-medium'>AirlineFees</p>
            <p className='text-[#5e6282] md:text-[18px] sm:text-[12px] font-medium'>Airline</p>
            <p className='text-[#5e6282] md:text-[18px] sm:text-[12px] font-medium'>Low fare trips</p>
        </div>
        <div className='flex flex-col self-start'>
            <div className='flex flex-row items-center justify-center'>
                <img className='h-[41px] w-[41px]' src={images.fb} alt="" />
                <img className='h-[41px] w-[41px]' src={images.insta} alt="" />
                <img className='h-[41px] w-[41px]' src={images.twitter} alt="" />
            </div>
            <p>Discover our app</p>
            <div className='grid grid-cols-2 gap-1'>
                <div className='flex flex-row bg-black rounded-lg p-1 gap-1 items-center w-auto'>
                    <img className='h-[20px] w-[20px]' src={images.googlePlay} alt="" />
                    <div>
                        <p className='text-white sm:text-[8px] md:text-[12px]'>Get It On</p>
                        <p className='text-white sm:text-[6px] md:text-[10px]'>Google play store</p>
                    </div>
                </div>
                <div className='flex flex-row bg-black rounded-lg p-2 gap-1 items-center '>
                    <img className='h-[20px] w-[20px]' src={images.googlePlay} alt="" />
                    <div>
                        <p className='text-white sm:text-[8px] md:text-[12px]'>Get It On</p>
                        <p className='text-white sm:text-[6px] md:text-[10px]'>Apple Store</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p className='text-[#5e6282] sm:text-[15px] font-medium'>All rights reserved@jadoo.co</p>
    </div>
  )
}

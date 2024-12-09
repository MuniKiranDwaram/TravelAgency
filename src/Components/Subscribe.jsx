import React from 'react'
import { images } from '../assets/assets'

export const Subscribe = () => {
  return (
    <div className='w-full px-[2.5vw] flex flex-col'>
        <img src={images.AllLogos} alt="" className='mb-[-7rem]'/>
        <div className="flex flex-col gap-5 items-center justify-center relative w-full max-h-[407px] bg-no-repeat bg-[url('./assets/SubscribeBg.png')] py-[3rem]">
            <img src={images.TelegramIcon} className='w-[2rem] h-[2rem] sm:w-[2rem] sm:h-[2rem] md:w-[4rem] md:h-[4rem] absolute right-[-10px] top-[-10px] sm:right-[-10px] sm:top-[-10px] md:right-[-20px] md:top-[-20px] ' alt="" />
            <p className='overflow-hidden text-wrap text-[#14183e] font-semibold sm:text-[15px] md:text-[20px] lg:text-[30px] w-[50%]'>Subscribe to get information, latest news and other interesting offers about Jadoo</p>
            <div className='flex flex-col sm:flex-row gap-3'>
              <input type="email" placeholder='your email' className='border border-black min-w-[400px] rounded-md p-1 pl-2'/>
              <input type="submit" className='min-h-[40px] min-w-[150px] px-3 rounded-md bg-[#FF946D]'/>
            </div>
        </div>
    </div>
  )
}

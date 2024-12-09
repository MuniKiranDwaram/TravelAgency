import React from 'react'
import {Data, images} from '../assets/assets'

const BookingSteps = () => {
  return (
    <div className='w-full flex flex-col gap-[5rem] sm:grid sm:grid-cols-2 lg:pl-[5vh]'>
        <div className='self-start mx-auto w-full flex flex-col items-start justify-center'>
            <p className='text-[#5e6282] text-[18px] font-semibold'>Easy And Fast</p>
            <p className='text-[#5e6282] text-[40px] font-semibold text-justify'>Book your next trip in 3 easy steps</p>
            <div className='h-auto w-full flex flex-col gap-5'>
                {Data.designSteps.map((item)=>
                {
                    return(
                        <div className='flex flex-row pt-5 self-start gap-5 items-center justify-between'>
                            <img className='w-[50px] h-[50px] mx-auto' src={item.stepImg} alt="" />
                            <div className='flex flex-col h-full text-justify'>
                                <p className='text-[16x] self-start font-bold text-[#5e6282]'>{item.stepTitle}</p>
                                <p className='self-start text-[16px] text-[#5e6282]'>{item.stepDesc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='m-auto'>
            <div className='bg-white flex flex-col gap-4 m-auto p-5 shadow-lg rounded-lg'>
                <img src={images.greece} className='w-full object-cover'/>
                <div className='w-full self-start flex flex-col items-start justify-center gap-2'>
                    <p className='text-[#080809] font-medium text-[18px]'>Trip To Greece</p>
                    <p>14-29 june | by Robin</p>
                </div>
                <div className='flex flex-row justify-start gap-5'>
                    <img className='h-[36px] w-[36px]' src={images.leaf} alt="" />
                    <img className='h-[36px] w-[36px]' src={images.map} alt="" />
                    <img className='h-[36px] w-[36px]' src={images.send} alt="" />
                </div>
                <div className='flex flex-row justify-start items-middle px-2 gap-2'>
                    <img src={images.building} className='h-[16px] w-[16px] mt-1' alt="" />
                    <p className='text-[16px] font-medium text-[#848298]'>24 people going</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingSteps
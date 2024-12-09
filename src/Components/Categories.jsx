import React from 'react'
import {Data} from '../assets/assets'

const Categories = () => {
  return (
    <div className='flex flex-col gap-2'>
        <p className='text-[18px] text-[#5E6282] font-semibold'>CATEGORY</p>
        <p className='text-[30px] text-[#181e4b] font-bold font-serif'>We Offer Best Services</p>
        <div className='grid grid-cols-2 sm:flex sm:flex-row mx-auto w-full h-full gap-5'>
            {Data.Services.map((item)=>
            {
                return(
                <div className='flex flex-col mx-auto w-[12rem] h-[15rem] justify-between align-middle pt-5'>
                    <div className='flex flex-row align-middle justify-center'>
                        <img src={item.image} className='w-auto h-auto'/>
                    </div>
                    <h3 className='font-semibold md:text-[20px]'>{item.title}</h3>
                    <p className='font-medium text-[16px]'>{item.desc}</p>
                </div>
            )})}
        </div>
    </div>
  )
}

export default Categories
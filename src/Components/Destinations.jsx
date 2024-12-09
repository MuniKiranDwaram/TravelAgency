import React from 'react'
import {Data, images} from '../assets/assets'

const Destinations = () => {
  return (
    <div>
        <p className='text-[#586282] font-semibold text-[18px]'>Top Selling</p>
        <p className='text-[#14183E] font-bold text-[40px]'>Top Destinations</p>
        <div className='flex pt-[3rem] flex-col sm:flex-row sm:gap-[5vh] lg:gap-[20vh] justify-center align-middle'>
            {Data.destinations.map((item)=>
            {
                return(
                    <>
                        <div className='w-[20rem] h-[30rem] bg-white rounded-3xl lg:mx-auto shadow-lg overflow-hidden relative'>
                            <img src={item.image} alt="" className='h-full w-full object-cover'/>
                            <div className='absolute bottom-0 left-0 w-full bg-white p-4 z-10 flex flex-col gap-5'>
                               <div className='flex flex-row justify-between align-middle text-[18px] font-medium'>
                                    <p>{item.city}</p>
                                    <p>{item.price}</p>
                                </div>
                                <div className='flex flex-row justify-start align-middle'>
                                    <img src={images.navigate} className='w-[1rem] h-[1rem] mr-3' alt="" />
                                    <p className='text-[18px] font-medium relative bottom-2'>{item.tripDuration}</p>
                                </div> 
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default Destinations
import React, { useState } from 'react'
import {Data, images} from '../assets/assets'

const Reviews = () => {

  const[CurrentIndex,SetCurrentIndex] = useState(0);
  const navigate = (indexToNavigate) =>
  {
    SetCurrentIndex((prev)=>
    {
      let newIndex = prev +  indexToNavigate;
      console.log("newIndex" + newIndex);
      console.log(Data.reviews.length);
      if(newIndex < 0)
        newIndex = 0;
      else if (newIndex > Data.reviews.length || newIndex == Data.reviews.length)
        newIndex = 0;
      return newIndex;
    })
  }
  return (
    <div className='w-full sm:flex flex-col sm:flex-row justify-between'>
        <div className='w-full pt-10 self-center'>
            <p className='sm:self-center md:self-start font-semibold text-[#5e6282] text-[18px]'>TESTIMONIALS</p>
            <p className='font-bold text-[#14183e] text-[30px] md:text-[25px] lg:text-[30px] font-serif'>What People Say About Us</p>
        </div>
        <div className='w-full relative m-5'>
          {Data.reviews.map((item,index)=>
          {
             return(
              <div className={`absolute top-0 left-0 w-full ${CurrentIndex === index ? "opacity-100": "opacity-0"} transition-all duration-500 ease-in-out transform}
              bg-gray-100 rounded-lg shadow-lg p-5 self-start`}>
                <div className='relative flex flex-col h-full justify-center items-center'>
                  <p className='font-medium text-[16px] text-[#5e6282] text-justify pb-3'>{item.review}</p>
                  <img className='w-[50px] h-[50px] absolute top-[-40px] left-[-40px]' src={item.reviewerImage} alt="" />
                  <p className='text-[#5e6282] text-[18px] font-semibold self-start'>{item.reviewerName}</p>
                  <p className='text-[#5e6282] text-[18px] font-medium self-start'>{item.place}</p>
                </div>
              </div>
             )
          })}
        </div>
        <div className='w-[2rem] h-[5rem] max-h-[5rem] flex flex-col justify-between items-center self-center mt-10'>
          <img className='grayscale brightness-0 cursor-pointer' src={images.UpArrow} alt="" onClick={()=>navigate(-1)}/>
          <div className={`${CurrentIndex == "0" ? "bg-black" : "bg-gray-400"} w-[5px] h-[5px] rounded`}></div>
          <div className={`${CurrentIndex == "1" ? "bg-black" : "bg-gray-400"} w-[5px] h-[5px] rounded`}></div>
          <div className={`${CurrentIndex == "2" ? "bg-black" : "bg-gray-400"} w-[5px] h-[5px] rounded`}></div>
          <img className='cursor-pointer' src={images.DownArrow} alt="" onClick={()=>navigate(1)}/>
        </div>
    </div>
  )
}

export default Reviews
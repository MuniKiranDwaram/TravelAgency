import React, { useState } from 'react'
import {images} from '../assets/assets';

const Navbar = () => {
    const[showMenu,setShowMenu] = useState(false);
    const [activeClass,setActiveClass] = useState("Destinations");
  return (
    <div className="mb-[2rem] w-full flex flex-Row align-middle justify-between pr-[50px] pt-[10px]">
        <div>
            <img className='w-[7rem] h-[2rem]' src={images.title} alt="" />
        </div>
        <div className='flex flex-row'>
        <div className={`${showMenu === true ? "block" : "hidden"} w-full`}>
                <div className='sm:hidden rounded flex flex-col gap-3 bg-[#F1A501] p-10 absolute right-[4rem]'>
                <a href="#" onClick={()=>setActiveClass("Destinations")} className={`${activeClass === "Destinations" ? "underline" : ""}`}>Destinations</a>
                <a href="#" onClick={()=>setActiveClass("Hotels")} className={`${activeClass === "Hotels" ? "underline" : ""}`}>Hotels</a>
                <a href="#" onClick={()=>setActiveClass("Flights")} className={`${activeClass === "Flights" ? "underline" : ""}`}>Flights</a>
                <a href="#" onClick={()=>setActiveClass("Bookings")} className={`${activeClass === "Bookings" ? "underline" : ""}`}>Bookings</a>
                <a href="#" onClick={()=>setActiveClass("Login")} className={`${activeClass === "Login" ? "underline" : ""}`}>Login</a>
                    <select className='self-start'>
                        <option>En</option>
                        <option>Tel</option>
                    </select>
                </div>
            </div>
            <div className="sm:hidden flex items-start">
                <button onClick={()=>{setShowMenu(!showMenu)}} className="text-gray-700 focus:outline-none" aria-label="Toggle Menu">
                  ☰
                </button>
            </div>
        </div>
        <div className='hidden sm:block'>
            <div className='flex flex-row sm:text-[15px] md:text-[17px] lg:text-[20px] align-middle justify-center text-[#212832] text-[1rem] sm:gap-5 lg:gap-20'>
                <a href="#" onClick={()=>setActiveClass("Destinations")} className={`${activeClass === "Destinations" ? "underline" : ""}`}>Destinations</a>
                <a href="#" onClick={()=>setActiveClass("Hotels")} className={`${activeClass === "Hotels" ? "underline" : ""}`}>Hotels</a>
                <a href="#" onClick={()=>setActiveClass("Flights")} className={`${activeClass === "Flights" ? "underline" : ""}`}>Flights</a>
                <a href="#" onClick={()=>setActiveClass("Bookings")} className={`${activeClass === "Bookings" ? "underline" : ""}`}>Bookings</a>
                <a href="#" onClick={()=>setActiveClass("Login")} className={`${activeClass === "Login" ? "underline" : ""}`}>Login</a>
                <div className='flex flex-row justify-between gap-5'>
                    <button className='border-[#212832] border px-3 rounded'>Sign up</button>
                    <select>
                        <option>En</option>
                        <option>Tel</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
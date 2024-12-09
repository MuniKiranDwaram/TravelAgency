import React from 'react'
import {images} from '../assets/assets';
import HeroContent from '../Components/HeroContent';
import Navbar from '../Components/Navbar';
const Header = () => {
  return (
    <>
        <div className="w-full bg-cover bg-center bg-no-repeat bg-[url('./assets/Logo.png')]">
          <div>
              <Navbar/>
              <HeroContent/>
          </div>
        </div>
    </>
  )
}

export default Header
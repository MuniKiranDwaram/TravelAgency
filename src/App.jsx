import { useState } from 'react'
import './App.css'
import Header from './Pages/Header'
import HeroContent from './Components/HeroContent'
import CategoriesPage from './Pages/CategoriesPage'
import Destinations from './Components/Destinations'
import BookingSteps from './Components/BookingSteps'
import Reviews from './Components/Reviews'
import { Subscribe } from './Components/Subscribe'
import { Footer } from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col gap-[7rem]'>
      <Header/>
      <CategoriesPage></CategoriesPage>
      <Destinations></Destinations>
      <BookingSteps/>
      <Reviews/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App

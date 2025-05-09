import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import ThisSummerRecipes from './components/ThisSummerRecipes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className='header'>
          <Header/>
        </div>
        <div className='banner'>
          <Banner/>
        </div>
        <div className='this-summer-recipes'>
          <ThisSummerRecipes/>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App

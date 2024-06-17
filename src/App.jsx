import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import Features from './pages/Features/Features'
import Pricing from './pages/Pricing/Pricing'
import Blog from './pages/Blog/Blog'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
        <Route path='/Features' element={<Features/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/Blog' element={<Blog/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
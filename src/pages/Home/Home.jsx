import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import HeaderLogo from '../../assets/icons/headerlogo.webp'
import './Home.css'

const Home = () => {
  return (
    <div className='flex relative '>
        <Sidebar/>
            <div className="absolute -top-20 right-0 w-[150px] h-[150px] bg-white rounded-full shadow-[0px_0px_50px_rbga(255,255,255,0.1)] blur-3xl"></div>
            <div className="absolute -top-20 right-1/2 w-[70px] h-[70px] bg-white rounded-full shadow-[0px_0px_50px_rbga(255,255,255,0.1)] blur-3xl"></div>
            <div className="absolute -top-20 right-1/2 w-[70px] h-[70px] bg-white rounded-full shadow-[0px_0px_50px_rbga(255,255,255,0.1)] blur-3xl"></div>
      <div className='bg-[#0d0d0f] min-h-screen w-full px-4 @container'>
        <div className='w-[1300px] max-w-full mx-auto py-10'>
            <div className='flex items-center justify-between gap-3 '>
                <h1 className='uppercase md:text-[40px] lg:text-[64px] font-bold bg-gradient-to-r from-[#fdc70000]  to-gray-600  text-transparent bg-clip-text drop-shadow-md [text-shadow:_0_4px_4px_rgb(254_222_36_/_0.8)] ' ><span className='text-stroke-3'>Welcome to </span><span className='text-[#ffe020db] text-stroke-3'>monkey tilt</span></h1>
                <img src={HeaderLogo} alt="header" className='w-[110px]' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home

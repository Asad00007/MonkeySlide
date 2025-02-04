import React from 'react'
import NavLogo from '../../assets/icons/navlogo.webp'
import { FaDiceFive,FaShoppingBag  } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { BiWorld } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className='bg-[#0E0E11] border-[#e5e7eb] z-50 p-4 px-[2%] flex items-center justify-between @container border-b-2  border-b-gray-600 sticky top-0 left-0'>
        

        <div className='absolute left-[50%] w-[50px] h-[50px] bg-white rounded-full shadow-[0px_0px_50px_rbga(255,255,255,0.1)] blur-3xl'></div>
        
        <div className='flex items-center gap-4 text-white'>
        <img src={NavLogo} alt="logo" className='w-[50px] @max-[1100px]:flex hidden' />
            <button className='py-2 px-3 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-lg text-[14px] flex gap-1 items-center'><FaDiceFive className='text-xl' /> CASINO</button>
            <button className='py-2 px-3 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-lg text-[14px] flex gap-1 items-center'><IoMdFootball  className='text-xl'/> SPORTS</button>
            <button className='py-2 px-3 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-lg text-[14px] flex gap-1 items-center'><FaShoppingBag className='text-xl' /> SHOP</button>
        </div>
       <img src={NavLogo} alt="logo" className='w-[50px] @max-[1100px]:hidden flex ' />
       <div className='flex items-center gap-4 text-white'>
       <button className='p-2 bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-lg text-[14px] flex gap-1 items-center'><BiWorld className='text-xl' /> EN</button>
       <button className='p-2 px-6 font-semibold bg-gradient-to-br from-[hsla(0,0%,100%,.2)] from-[1.96%]  to-[hsla(0,0%,100%,.05)] to-[81.81%] border border-gray-700 hover:from-[hsla(0,0%,100%,.5)] transition ease-in-out duration-300 rounded-lg text-[14px] '>Login</button>
       <button className='p-2 px-6 font-semibold bg-gradient-to-r from-[#f59e0b] from-[2.36%] via-[#ffe500] via-[68.59%] to-[#f59e0b] to-[96.98%] text-black shadow hover:shadow-[0px_0px_20px_#f59e0b] transition ease-in-out duration-300 rounded-lg text-[14px] '>Register</button>
       </div>
    </div>
  )
}

export default Navbar

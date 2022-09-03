import React from 'react'
import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import logo from '/images/logo.png'

const Navbar = () => {
  return (
   <nav className='w-full flex md:justify-center justify-between items-center p-4 '>
          <div className='md:flex-[0.5] flex-initial justify-center items-center'>
            <img src={logo} alt="Logo" className='w-32 cursor-pointer' />
            </div>   
   </nav>
  )
}

export default Navbar
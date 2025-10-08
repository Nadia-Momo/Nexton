import React, { useState } from 'react'
import logo from '../assets/images/favicon (1).png'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router';
import { FaBars } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import Cart from './Cart';
const ResponsiveNav = () => {
    const [showNav,setShowNav]=useState(false)
    const [showCart,setshowCart]=useState(false)
  return (
    <>
    <nav className='py-[14px] lg:hidden'>
<div className='container px-4'>
    <div className="responsiveNav_row flex items-center justify-between">
        <Link className="logo_col w-10 h-10 inline-block">
            <img src={logo} alt="logo" />
        </Link>
        <form className='w-[200px] h-[36px] bg-[#F8F8F8] rounded-[9999px] flex items-center gap-6'>
            <CiSearch className='text-[14px]'/>
            <input type="text" placeholder='Search in products...' className='text-[12px] font-normal font-poppins text-[#4B5563] outline-none border-none' />

        </form>
        <button onClick={()=>setShowNav(!showNav)}>
            <FaBars className='text-[24px]'/>
        </button>

    </div>
</div>
{
   showNav&& <div className='w-full py-4 bg-white flex justify-center gap-5'>
    <button className='text-xl'><BiUser/></button>
    <button className='text-xl' onClick={()=>setshowCart(true)}><CiShoppingCart /></button>
</div>
}

    </nav>
    <Cart isOpen={showCart} closeCart={()=>setshowCart(false)}/>
    </>
  )
}

export default ResponsiveNav
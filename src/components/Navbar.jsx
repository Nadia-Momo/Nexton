import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/logo (1).png'
import { CiSearch } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import Cart from './Cart';
import { useState } from 'react';

const Navbar = () => {
const [showCart,setshowCart]=useState(false)
  return (
    <>
<nav className='py-[27px] overflow-x-hidden hidden lg:block'>
 <div className="container">
<div className="menu_row flex items-center justify-between">
<Link to={'/'} className="menu_logo w-[119px]">
<img src={logo} alt="" />
</Link>
<div className="menu_search w-[400px] h-[52px] bg-[#F8F8F8] rounded-[100px] flex items-center py-[16px] px-[24px] gap-[10px]">
    <CiSearch className='w-[20px] h-[20px]'/>
    <input type="text" className='border-none outline-none w-full text-[14px] font-normal font-poppins text-[#4B5563]' placeholder='Search in products...'/>
</div>
<div className="menu_icons">
    <button className='text-2xl text-[#4B5563]'> <BiUser/></button>
    <button className='text-2xl text-[#4B5563] ml-[22px] relative' onClick={()=>setshowCart(true)}><CiShoppingCart />
    <div className='w-[20px] h-[20px] rounded-full bg-[#0EA5E9] absolute top-[-8px] font-poppins right-[-8px] text-[12px] text-[#FFFFFF] font-medium flex justify-center items-center'>0</div>
    </button>
</div>
</div>
</div>
{
  showCart&& <Cart isOpen={showCart} closeCart={()=>setshowCart(false)}/>
}

    </nav> 
    </>
  )
}

export default Navbar
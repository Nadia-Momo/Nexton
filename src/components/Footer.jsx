import React from 'react'
import logo from '../assets/images/logo (1).png'
import facebook from '../assets/images/facebook.png'
import youtube from '../assets/images/youtube.png'
import twitter from '../assets/images/twitter.png'
import telegram from '../assets/images/telegram.png'
import visa from '../assets/images/visa.png'
import paypal from '../assets/images/paypal.png'
import stripe from '../assets/images/stripe.png'
import verisign from '../assets/images/verisign.png'
const Footer = () => {
  return (
    <>
    <section className=' border-t-1 border-b-1 border-[#E5E7EB] mt-[52px]  lg:mt-[0px] '>
<div className="container px-6 lg:px-0">
      <div className='lg:flex py-[60px] px-[24px] lg:px-[120px] '>
    <div className='w-[309px]'>
<img src={logo} alt="" />
<div className='mt-[20px] mb-[60px] lg:mb-0'>
    <div className='flex gap-1 mb-[12px] '>
        <img src={facebook} alt="" />
        <p className='text-[#4B5563] text-[16px] font-normal font-poppins'>Facebook</p>
    </div>
    <div className='flex gap-1 mb-[12px] '>
        <img src={youtube} alt="" />
        <p className='text-[#4B5563] text-[16px] font-normal font-poppins'>Youtube</p>
    </div>
    <div className='flex gap-1 mb-[12px] '>
        <img src={twitter} alt="" />
        <p className='text-[#4B5563] text-[16px] font-normal font-poppins'>Telegram</p>
    </div>
    <div className='flex gap-1 mb-[12px]'>
        <img src={telegram} alt="" />
        <p className='text-[#4B5563] text-[16px] font-normal font-poppins'>Twitter</p>
    </div>
</div>
    </div>
    <div className='w-[309px] lg:mb-0 mb-[60px]'>
<ul>
    <li className='font-poppins text-[16px] text-[#111827] font-semibold mb-[20px] '>Getting started</li>
    <li className='font-poppins text-[16px] text-[#4B5563] mb-[20px]'>Release Notes</li>
    <li className='font-poppins text-[16px] text-[#4B5563] mb-[20px]'>Upgrade Guide</li>
    <li className='font-poppins text-[16px] text-[#4B5563] mb-[20px]'>Browser Support</li>
    <li className='font-poppins text-[16px] text-[#4B5563] mb-[20px]'>Dark Mode</li>
</ul>
    </div>
    <div className='w-[309px] lg:mb-0 mb-[60px]'>
 <ul>
    <li className='font-poppins text-[16px] text-[#111827] font-semibold mb-[20px]'>Explore</li>
    <li className='font-poppins text-[16px] text-[#4B5563] mb-[20px]'>Prototyping</li>
    <li className='font-poppins text-[16px] text-[#4B5563] mb-[20px]'>Design systems</li>
    <li className='font-poppins text-[16px] text-[#4B5563] mb-[20px]'>Pricing</li>
    <li className='font-poppins text-[16px] text-[#4B5563] mb-[20px]'>Security</li>
</ul>       
    </div>
    <div className='w-[309px] lg:mb-0 mb-[60px]'>
    <ul>
    <li className='font-poppins text-[16px] text-[#111827] font-semibold mb-[20px]'>Community</li>
    <li className='font-poppins text-[16px] text-[#4B5563] mb-[20px]'>Discussion Forums</li>
    <li className='font-poppins text-[16px] text-[#4B5563] mb-[20px]'>Code of Conduct</li>
    <li className='font-poppins text-[16px] text-[#4B5563] mb-[20px]'>Contributing</li>
    <li className='font-poppins text-[16px] text-[#4B5563] mb-[20px]'>API Reference</li>
</ul>      
    </div>
  </div>
  </div>
    </section>
    <div className="container">
         <div className='py-[36px] px-[24px] lg:px-[120px] lg:flex justify-between '>
    <p>Nexton eCommerce. © 2024</p>
    <div className='flex gap-2'>
        <img src={visa} alt="visa" />
        <img src={paypal} alt="paypal" />
        <img src={stripe} alt="stripe" />
        <img src={verisign} alt="verisign" />
    </div>
  </div>
    </div>
 

  
    </>
  )
}

export default Footer
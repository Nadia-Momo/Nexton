import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import bannerImg from '../assets/images/hero (1).png'
import { Link } from 'react-router';
import { CiSearch } from "react-icons/ci";
const Banner = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  return (
    <>
<div className="slider-container banner_slider hidden lg:block">
      <Slider {...settings}>
        <div>
         <Link to="/all-product">
         <img className='w-full' src={bannerImg} alt="" />
         </Link>
        </div>
           <div>
         <Link to="/all-product">
         <img className='w-full' src={bannerImg} alt="" />
         </Link>
        </div>
             <div>
         <Link to="/all-product">
         <img className='w-full' src={bannerImg} alt="" />
         </Link>
        </div>
      </Slider>
    </div>
    {/*----------- phone banner-------- */}
    <div className='pt-[163px] pb-[199px] bg-[#F8F8F8] block lg:hidden resBanner'>
      <div className="container px-4">
    
        <Slider {...settings}>
         <div>
          <h2 className='text-sm font-poppins font-medium text-[#4B5563] mb-[8px]'>Starting from: $49.99</h2>
          <h1 className='text-[30px] font-semibold text-[#111827] font-poppins '>Exclusive collection
for everyone</h1>
<button className='py-3 px-6 bg-[#111827] text-white flex items-center justify-center gap-[8px] rounded-[9999px] mt-[40px]'>Explore Now <CiSearch/></button>
        </div>
          <div>
          <h2 className='text-sm font-poppins font-medium text-[#4B5563] mb-[8px]'>Starting from: $49.99</h2>
          <h1 className='text-[30px] font-semibold text-[#111827] font-poppins '>Exclusive collection
for everyone</h1>
<button className='py-3 px-6 bg-[#111827] text-white flex items-center justify-center gap-[8px] rounded-[9999px] mt-[40px]'>Explore Now <CiSearch/></button>
        </div>
    </Slider>
      </div>
    </div>
    </>
  )
}

export default Banner
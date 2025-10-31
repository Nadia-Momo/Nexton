import React, { useEffect, useState } from 'react'
import CommonHead from './common/CommonHead'
import { Link } from 'react-router'
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from 'react-slick';
import axios from 'axios';
const Exploring = () => {
  const [categories,setCategories]=useState([])
   useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) =>{
        setCategories(res.data)
        console.log(res.data)
      } )
      .catch((err) => console.log(err));
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1 ,
    arrows:false,
     responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <section className='mt-[120px] exploring'>
      <div className="container px-6 lg:px-0">
         <CommonHead commoncon1={'Start exploring.'} commoncon2={'Good things are waiting for you'} />
<Slider {...settings}>
  {
    categories.map((item)=>(
  <div>
   <div className='w-[312px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center my-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'> {item.name}</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
      starting at $24 
    </p>
  </div>
  <Link to={`/categoryDetails/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>   
      </div>
    ))
  }
    
     
    </Slider>   
    </div> 
    </section>

    </>
  )
}

export default Exploring
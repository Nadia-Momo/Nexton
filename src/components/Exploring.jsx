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
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>   
      </div>
    ))
  }
    
     {/* <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center my-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>For Fragrances</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Starting at $19
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
     <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center my-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Furniture</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore accessories
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
      <div>
   <div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Groceries</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
      starting at $24 
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>   
      </div>
       <div>
<div className='w-[300px] lg:w-[418px] p-10  border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Home Decoration</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Starting at $19
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
      <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Kitchen Accessories</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore accessories
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
           <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Laptops</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore laptops
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
            <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Mens Shirts</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore Mens Shirts
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
             <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Mens Shoes</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore Mens Shoes
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
               <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Mens Watches</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore Mens Watches
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
                <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Mobile </h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore Mobile 
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
                <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Motorcycles</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore Motorcycle
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
                   <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Skin Care</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore Skin Care
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
                      <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Smartphones</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore Smartphones
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
                        <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Sports </h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore Sports 
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
                          <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Sunglasses </h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore Sunglasses
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
                             <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Tablets </h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore Tablets
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
</div>
<div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Tops </h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore Tops
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
</div>
<div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Vehicle</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore 
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
     <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Womens Bags</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore Womens Bags
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
      <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Womens Dresses</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore Womens Dresses
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
        <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'> Jewellery</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore Womens Jewellery
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
           <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Womens Shoes</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore Womens Shoes
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div>
              <div>
<div className='w-[300px] lg:w-[418px] p-10 border border-[#E5E7EB] rounded-[16px] flex justify-between items-center mt-[40px]'>
  <div>
    <h2 className='font-poppins font-semibold text-[16px] lg:text-[24px] text-[#111827]'>Womens Watches</h2>
    <p className='font-poppins font-normal text-[12px] lg:text-[14px] text-[#4B5563]'>
     Explore Womens Watches
    </p>
  </div>
  <Link to={'#'} className='border-l-3 border-[#E5E7EB] pl-3 flex justify-center items-center font-poppins font-medium  text-[12px] lg:text-[14px]'>
SHOP NOW
<IoIosArrowRoundForward className='text-[#4B5563] w-[16px] h-[16px]'/>
  </Link>
</div>
     </div> */}
    </Slider>   
    </div> 
    </section>

    </>
  )
}

export default Exploring
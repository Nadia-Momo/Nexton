import React, { useEffect, useState } from 'react'
import CommonHead from './common/CommonHead'
import axios from 'axios'
import ProductCard from './ProductCard'
import Slider from 'react-slick';
import { useNavigate } from 'react-router';
const Seller = () => {
    const [allProduct,setAllproducts]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then((res)=>setAllproducts(res.data.products))
    },[])
      var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
  const navigate=useNavigate()
const handleDetails=(productDetails)=>{
  
  navigate(`/productDetails/${productDetails}`)
}
  return (
    <>

<section id="seller" className='mt-[176px] exploring'>
    {/* Best Sellers. Best selling of the month */}
    <div className="container px-6 lg:px-0">
<CommonHead commoncon1={'Best Sellers.'} commoncon2={'Best selling of the month'}/>
<Slider {...settings}>
{
allProduct.slice(0,6).map((item)=>(
<div><ProductCard key={item.id} productImage={item.thumbnail} producttitle={item.title} pPrice={item.price} pCat={item.category} pDis={item.discountPercentage} pRating={item.rating} stock={item.stock} detailsClick={()=>handleDetails(item.id)}/> </div>         
))
}
</Slider>
</div>
</section>
    </>
  )
}

export default Seller
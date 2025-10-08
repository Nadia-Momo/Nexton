import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import CommonHead from './common/CommonHead'
import axios from 'axios'
import Slider from 'react-slick';
const Recommendation = () => {
const [allProducts,setAllproducts]=useState([])
useEffect(()=>{
  axios.get('https://dummyjson.com/products')
.then((res)=>{setAllproducts(res.data.products)})
.catch((err)=>{console.log(err)})
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

return (

    <>
    <section className='mt-[176px] exploring'>
        
<div className="container px-5 lg:px-0">
            <CommonHead commoncon1={'Recommendations.'} commoncon2={'Best matching products for you'}/>
  <Slider {...settings}>
   
        {

allProducts.slice(0,6).map((item)=>(

<ProductCard key={item.id} productImage={item.thumbnail} producttitle={item.title} pPrice={item.price} pCat={item.category} pDis={item.discountPercentage} pRating={item.rating} stock={item.stock}/> 

                  )

                  )
                }
   
    </Slider>          
           
                 
          
   
        </div>
   
    </section>
   
    </>
  )
}

export default Recommendation
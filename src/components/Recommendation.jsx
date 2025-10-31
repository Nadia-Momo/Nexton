import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import CommonHead from './common/CommonHead'
import axios from 'axios'
import Slider from 'react-slick';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { toast, Zoom } from 'react-toastify';
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
function generate16DigitNumber() {
  let num = '';
  for (let i = 0; i < 16; i++) {
    num += Math.floor(Math.random() * 10); // adds a random digit 0–9
  }
  return num;
}
Cookies.set('userID', generate16DigitNumber(), { expires: 7 ,path:''})
console.log(generate16DigitNumber())
// product detail handler
const navigate=useNavigate()
const handleDetails=(productDetails)=>{
  
  navigate(`/productDetails/${productDetails}`)
}
 const productArray=[]
const handleAddtoCart=(productId)=>{
 

  const productObjFormat={
    id:productId,
    quantity:1
  }
    productArray.push(productObjFormat)
  console.log(productArray)
  axios.post('https://dummyjson.com/carts/add',{
    userId:1,
    products:productArray
  })
  .then((res)=>{
    toast.success('🦄 Added to cart successfully', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Zoom,

})
console.log(res)
  })
  .catch((err)=>console.log(err))
}
return (

    <>
    <section className='mt-[176px] exploring'>
        
<div className="container px-5 lg:px-0">
            <CommonHead commoncon1={'Recommendations.'} commoncon2={'Best matching products for you'}/>
  <Slider {...settings}>
   
        {

allProducts.map((item)=>(

<ProductCard key={item.id} productImage={item.thumbnail} producttitle={item.title} pPrice={item.price} pCat={item.category} pDis={item.discountPercentage} pRating={item.rating} stock={item.stock} detailsClick={()=>handleDetails(item.id)} cartClick={()=>handleAddtoCart(item.id)}/> 

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
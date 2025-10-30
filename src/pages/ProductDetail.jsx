import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { IoBagCheck } from "react-icons/io5";
import star from '../assets/images/svg.png'
import { useParams } from 'react-router';
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Breadcrumbs from '../components/Breadcrumbs';
const ProductDetail = () => {
 const [singleProduct,setSingleProduct]=useState('')   
 const [images,setImages]=useState('')
 const [allProducts,setAllproducts]=useState([])
const paramsData=useParams()  
console.log(paramsData)
const handleShowProduct = (product) => {
  setSingleProduct(product)
  setImages(product.images?.[0]) 
  window.scrollTo({ top: 0, behavior: "smooth" }) 
}

// useEffect(()=>{
// axios.get(`https://dummyjson.com/products/${paramsData.alu}`)
// .then((res)=>{setSingleProduct(res.data),setImages(res.data.images?.[0])})
// .catch((err)=>console.log(err))
// axios.get('https://dummyjson.com/products')
// .then((res)=>{setAllproducts(res.data.products)})
// .catch((err)=>console.log(err))
// },[])
// useEffect(() => {
 
//   const fetchData = async () => {
//     try {
     
//       const singleRes = await axios.get(`https://dummyjson.com/products/${paramsData.alu}`);
//       setSingleProduct(singleRes.data);
//       setImages(singleRes.data.images?.[0]);

     
//       const allRes = await axios.get('https://dummyjson.com/products?limit=100');
//       setAllproducts(allRes.data.products);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   fetchData();
// }, [paramsData.alu]); 
useEffect(() => {
    const fetchData = async () => {
      try {
        const [singleRes, allRes] = await Promise.all([
          axios.get(`https://dummyjson.com/products/${paramsData.alu}`),
          axios.get('https://dummyjson.com/products?limit=200')
        ]);
        setSingleProduct(singleRes.data);
        setImages(singleRes.data.images?.[0]);
        setAllproducts(allRes.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [paramsData.alu]);



console.log(singleProduct)
const categoryProducts=allProducts.filter((item)=>item?.category===singleProduct?.category && item.id!==singleProduct.id)
console.log(categoryProducts)
  return (
    <>
<section id="ProductDetail">
<div className="container">
    <Breadcrumbs pageName={'Product Detail'} pageLink={`/productDetails/${paramsData.alu}`} subPagename={singleProduct.title}/>
            <div className="productRow flex justify-between mt-4">
                <div className="productImages flex gap-6">
                    <div className='flex flex-col gap-4'>
                        {
                       singleProduct.images?.map((item)=>(
                  <button onClick={()=>setImages(item)} className='w-[140px] h-[157px] rounded-[16px] overflow-hidden bg-gray-200'><img src={item}  /></button>
                       ))     
                        }
                       
               
                    </div>
                    <div className='w-[640px] h-[678px] bg-gray-200 rounded-[16px]'>
                        <img src={images} alt="" />
                    </div>
                </div>
                {/* -----product options-------- */}
                <div className="product_detail w-[460px] p-[33px] border border-[#E5E7EB] rounded-[16px] h-fit">
               <div className='flex justify-between'>
                     <div className='flex items-center gap-1 h-fit'><FaStar className='text-[#FBBF24]'/>
                    <p className='text-base font-semibold font-poppins text-[#4B5563]'>{singleProduct.rating} . {singleProduct.reviews?.length} reviews</p>
                    </div>
              
                <div>
                    <h2 className='text-2xl font-semibold font-poppins text-[#111827]'>${singleProduct.price - singleProduct.price * parseFloat((singleProduct.discountPercentage / 100).toFixed(2))}
</h2>
                    <h3 className='text-[#4B5563] font-medium font-poppins text-[14px] line-through'>${singleProduct.price}</h3>
                </div>
               </div>
               <h2 className='text-base font-semibold font-poppins text-[#111827]'>Size: S</h2>
               <div className='flex gap-[8.5px] mt-[12px]'>
                <button className='w-[72px] h-[44px] border border-[#E5E7EB] rounded-[12px] font-semibold font-poppins text-[16px] hover:bg-[#0EA5E9]  hover:text-[#fff]'>S</button>
                 <button className='w-[72px] h-[44px] border border-[#E5E7EB] rounded-[12px] font-semibold font-poppins text-[16px] hover:bg-[#0EA5E9]  hover:text-[#fff]'>M</button>
                   <button className='w-[72px] h-[44px] border border-[#E5E7EB] rounded-[12px] font-semibold font-poppins text-[16px] hover:bg-[#0EA5E9]  hover:text-[#fff]'>L</button>
                   <button className='w-[72px] h-[44px] border border-[#E5E7EB] rounded-[12px] font-semibold font-poppins text-[16px] hover:bg-[#0EA5E9]  hover:text-[#fff]' >XL</button>
                   <button className='w-[72px] h-[44px] border border-[#E5E7EB] rounded-[12px] font-semibold font-poppins text-[16px] hover:bg-[#0EA5E9]  hover:text-[#fff]'>2XL</button>
               </div> 
               {/* -----product size ------- */}
               <div className='flex justify-between mt-[32px] mb-[32px]'>
                <div className='py-3 px-3 rounded-[9999px] bg-[#F8F8F8] flex gap-4 items-center'>
                    <button className='w-6 h-6 border border-[#E5E7EB] bg-[#fff] rounded-full flex justify-center items-center'><IoMdAdd/></button>
                <h2 className='text-base font-poppins font-medium text-[#111827] '>1</h2>
    <button className='w-6 h-6 border border-[#E5E7EB] bg-[#fff] rounded-full flex justify-center items-center'><FiMinus /></button>       
                </div>
                <button className='py-[16px] px-[32px] bg-[#111827] text-base font-medium font-poppins text-[#fff] rounded-[9999px] flex items-center gap-2'>
                    <IoBagCheck />
                    Add to cart
                </button>
               
                
               </div>
               <div className='flex justify-between mb-[10px]'>
                <p className='text-[#4B5563] font-normal font-poppins text-[16px]'>${singleProduct.price - singleProduct.price * parseFloat((singleProduct.discountPercentage / 100).toFixed(2))}
 x 1</p>
                <p className='text-[#4B5563] font-normal font-poppins text-[16px]'>${singleProduct.price - singleProduct.price * parseFloat((singleProduct.discountPercentage / 100).toFixed(2))}
</p>
</div>
               <div className='flex justify-between'>
                <p className='text-[#4B5563] font-normal font-poppins text-[16px]'>Tax estimate</p>
                <p className='text-[#4B5563] font-normal font-poppins text-[16px]'>$0</p>
</div>
<div className='border-t-1 border-[#E5E7EB] mt-[16px]'></div>
<div className='flex justify-between font-semibold font-poppins text-[14px] mt-[16px]'>
    <p>Total</p>
    <p>${singleProduct.price-singleProduct.price*(singleProduct.discountPercentage/100).toFixed(2)}</p>
</div>
                   </div>
            </div>
         <div className='border-t-1 border-[#E5E7EB] w-[804px] mt-[52px] mb-[52px]'></div>
         <div className="description">
            <h1 className='font-poppins font-semibold text-[36px] text-[#111827]'>{singleProduct.title}</h1>
            <p className='w-[735px] h-[72px] font-poppins font-normal text-[14px] text-[#4B5563] mt-[4px]'>{singleProduct.description}</p>
<h3 className='font-poppins font-semibold text-[24px] text-[#111827] mt-[60px]'>Fabric + Care</h3>
<p className='text-[#4B5563] font-poppins font-normal text-[16px] mt-[4px]'>Material: Soft wool blend</p>
<p className='text-[#4B5563] font-poppins font-normal text-[16px] mb-[60px]'>Color: Various</p>
<h3 className='text-[#111827] font-poppins font-semibold text-[24px]'>Sale performance</h3>
<p className='text-[#4B5563] font-poppins font-normal text-[16px] mt-[4px]'>Sales: 0</p>
<p className='text-[#4B5563] font-poppins font-normal text-[16px]'>Review Count: -</p>
<p className='text-[#4B5563] font-poppins font-normal text-[16px]'>Review Average: -</p>
<h3 className='text-[#111827] font-poppins font-semibold text-[24px] mt-[64px]'>Keywords</h3>
<div className='flex gap-2 mt-[8px] mb-[96px]'>
    <div className='border border-[#E5E7EB] rounded-[9999px] w-[127px] h-[32px] flex gap-[4px] items-center px-[8px] py-[14px]'><img src={star} alt="" className='w-[11px] h-[11px]'/>
    <p className='font-poppins font-normal text-[12px] text-[#4B5563]'>men's fashion</p>
    </div>
    <div className='border border-[#E5E7EB] rounded-[9999px] w-[127px] h-[32px] flex gap-[4px] items-center px-[8px] py-[14px]'><img src={star} alt="" className='w-[11px] h-[11px]'/>
    <p className='font-poppins font-normal text-[12px] text-[#4B5563]'>winter hat</p>
    </div>
    <div className='border border-[#E5E7EB] rounded-[9999px] w-[153px] h-[32px] flex gap-[4px] items-center px-[8px] py-[14px]'><img src={star} alt="" className='w-[11px] h-[11px]'/>
    <p className='font-poppins font-normal text-[12px] text-[#4B5563]'>colorful accessory</p>
    </div>
    <div className='border border-[#E5E7EB] rounded-[9999px] w-[153px] h-[32px] flex gap-[4px] items-center px-[8px] py-[14px]'><img src={star} alt="" className='w-[11px] h-[11px]'/>
    <p className='font-poppins font-normal text-[12px] text-[#4B5563]'>warm headwear</p>
    </div>
</div>
         </div>
         <div className='mt-[96px] mb-[72px]'>
            <h2 className='font-poppins font-semibold text-[36px] text-[#111827]'>Recommended products</h2>
         <div className='flex gap-5 flex-wrap'>
              {
            categoryProducts.map((item)=>(
   <ProductCard
   productImage={item.thumbnail}
   producttitle={item.title}
   pPrice={item.price}
   pCat={item.category}
   pRating={item.rating}
   stock={item.stock}
   pDis={item.discountPercentage}
detailsClick={(()=>handleShowProduct(item))}
   />
            ))
           }
         </div>
        
         </div>
        </div>
    </section>
    </>
  )
}

export default ProductDetail
import React from 'react'
import { FaStar } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { IoBagCheck } from "react-icons/io5";
const ProductDetail = () => {
  return (
    <>
    <section id="ProductDetail">
        <div className="container">
            <div className="productRow flex justify-between">
                <div className="productImages flex gap-6">
                    <div className='flex flex-col gap-4'>
                        <button className='w-[140px] h-[157px] rounded-[16px] overflow-hidden bg-gray-200'></button>
                        <button className='w-[140px] h-[157px] rounded-[16px] overflow-hidden bg-gray-200'></button>
                        <button className='w-[140px] h-[157px] rounded-[16px] overflow-hidden bg-gray-200'></button>
                        <button className='w-[140px] h-[157px] rounded-[16px] overflow-hidden bg-gray-200'></button>
                    </div>
                    <div className='w-[640px] h-[678px] bg-gray-200 rounded-[16px]'></div>
                </div>
                {/* -----product options-------- */}
                <div className="product_detail w-[460px] p-[33px] border border-[#E5E7EB] rounded-[16px] h-fit">
               <div className='flex justify-between'>
                     <div className='flex items-center gap-1 h-fit'><FaStar className='text-[#FBBF24]'/>
                    <p className='text-base font-semibold font-poppins text-[#4B5563]'>4.9 . 142 reviews</p>
                    </div>
              
                <div>
                    <h2 className='text-2xl font-semibold font-poppins text-[#111827]'>$169.99</h2>
                    <h3 className='text-[#4B5563] font-medium font-poppins text-[14px] line-through'>$199.99</h3>
                </div>
               </div>
               <h2 className='text-base font-semibold font-poppins text-[#111827]'>Size: S</h2>
               <div className='flex gap-[8.5px]'>
                <button className='w-[72px] h-[44px] border border-[#E5E7EB] rounded-[12px]'>S</button>
                 <button className='w-[72px] h-[44px] border border-[#E5E7EB] rounded-[12px]'>M</button>
                   <button className='w-[72px] h-[44px] border border-[#E5E7EB] rounded-[12px]'>L</button>
                   <button className='w-[72px] h-[44px] border border-[#E5E7EB] rounded-[12px]'>XL</button>
                   <button className='w-[72px] h-[44px] border border-[#E5E7EB] rounded-[12px]'>2XL</button>
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
                <p className='text-[#4B5563] font-normal font-poppins text-[16px]'>$169.99 x 1</p>
                <p className='text-[#4B5563] font-normal font-poppins text-[16px]'>$169.99</p>
</div>
               <div className='flex justify-between'>
                <p className='text-[#4B5563] font-normal font-poppins text-[16px]'>Tax estimate</p>
                <p className='text-[#4B5563] font-normal font-poppins text-[16px]'>$0</p>
</div>
<div className='border-t-1 border-[#E5E7EB] mt-[16px]'></div>
<div className='flex justify-between font-semibold font-poppins text-[14px] mt-[16px]'>
    <p>Total</p>
    <p>$169.99</p>
</div>
                   </div>
            </div>
         <div className='border-t-1 border-[#E5E7EB] w-[804px] mt-[52px] mb-[52px]'></div>
         <div className="description">
            <h1 className='font-poppins font-semibold text-[36px] text-[#111827]'>Black Automatic Watch</h1>
            <p className='w-[735px] h-[72px] font-poppins font-normal text-[14px] text-[#4B5563] mt-[4px]'>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had
previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic
wooden canoes in Valley Park, Missouri ceased in 1978.</p>
<h3 className='font-poppins font-semibold text-[24px] text-[#111827] mt-[60px]'>Fabric + Care</h3>
<p className='text-[#4B5563] font-poppins font-normal text-[16px] mt-[4px]'>Material: Soft wool blend</p>
<p className='text-[#4B5563] font-poppins font-normal text-[16px] mb-[60px]'>Color: Various</p>
<h3 className='text-[#111827] font-poppins font-semibold text-[24px]'>Sale performance</h3>
<p className='text-[#4B5563] font-poppins font-normal text-[16px] mt-[4px]'>Sales: 0</p>
<p className='text-[#4B5563] font-poppins font-normal text-[16px]'>Review Count: -</p>
<p className='text-[#4B5563] font-poppins font-normal text-[16px]'>Review Average: -</p>
<h3 className='text-[#111827] font-poppins font-semibold text-[24px] mt-[64px]'>Keywords</h3>
<div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
         </div>
        </div>
    </section>
    </>
  )
}

export default ProductDetail
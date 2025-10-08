import React from 'react'
import { IoIosStar } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router';
const ProductCard = ({productImage,producttitle,pPrice,pCat,pDis,pRating,stock}) => {
return (
<>
<div className='w-[312px] lg:w-[309px] h-[448px] mt-[40px] relative group overflow-hidden'>
  <div className='absolute top-1 right-[-50px] p-5 flex flex-col gap-2 group-hover:right-4 duration-[1s]'>
    <button className='p-2 rounded-full bg-white active:scale-[1.1] hover:bg-black hover:text-white hover:duration-[1s]'><IoBagHandleOutline /></button>
    <Link to={'/'} className='p-2 rounded-full bg-white active:scale-[1.1] hover:bg-black hover:text-white hover:duration-[1s]'><FaRegEye /></Link>
  </div>
<div className='w-full h-[347px] bg-gray-100 rounded-[16px] overflow-hidden'>
<img src={productImage} alt="" />
</div>
<div className='w-[279px] flex items-center justify-between mt-5'>
<h2 className='text-[14px] font-poppins font-semibold text-[#111827] lg:text-[16px] w-20 truncate'>{producttitle}</h2>
<h2 className='text-[14px] font-poppins font-semibold text-[#111827] lg:text-[16px]'>${pPrice}</h2>
</div>
<div className='w-[279px] flex items-center justify-between mb-[15px]'>
<h2 className='text-[12px] lg:text-[14px] font-poppins font-normal text-[#4B5563] '>{pCat}</h2>
 <h2 className='text-[12px] lg:text-[14px] font-poppins font-normal text-[#4B5563]'>{pDis}</h2>
</div>
<div className='w-[279px] flex items-center gap-[4px]'>
<IoIosStar className='text-[#FBBF24] text-xl'/>
<p className='text-[12px] lg:text-[14px] font-poppins font-normal text-[#4B5563]'>{pRating}({stock})</p>
</div>
</div>
</>
  )
}

export default ProductCard
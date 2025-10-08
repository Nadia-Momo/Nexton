import React from 'react'
import { Link } from 'react-router'
const Cart = ({isOpen,closeCart}) => {
  return (
    <>
    <section className={`w-full h-screen absolute top-0 ${isOpen?"left-0":"left-[-100%]"} duration-[1s] z-10`}>
        {/* outside jate click korle chole jai */}
         <div className='w-full h-screen bg-[#00000014]' onClick={closeCart}></div> 
         <div className='w-full lg:w-[400px] h-screen bg-white absolute top-0 right-0 p-5'  >
            <h2 className='text-xl font-poppins font-medium text-[#000]'>Cart</h2>
            <div className='w-full h-[70%] lg:h-[700px] overflow-y-scroll'>
                   {/* -----Cart product---- */}
            <div className='flex gap-5 items-center mt-5'>
                <div className='w-20 h-20 bg-gray-100 rounded-[5px]'>
                    {/* <img src="" alt="" /> */}
                </div>
                <div>
                    <h2 className='text-lg font-medium text-black font-poppins'>Product Name</h2>
                    <p className='text-[12px] font-medium text-black font-poppins'>Product price</p>
                </div>
            </div>
            </div>
         {/* ---------checkout button and product sum----- */}
         <div className='flex justify-between'>
            <p className='text-[14px] font-normal font-poppins text-black'>Subtotal</p>
            <p className='text-[16px] font-medium font-poppins text-black'>$350</p>
         </div>
      <Link className='w-full py-3 bg-[#111827] flex text-base font-poppins font-medium text-[#fff] justify-center items-center rounded-[10px] active:scale-[1.1] duration-[.4s]' to={'/checkOut'}>CheckOut</Link>
            </div>  
    </section>

    </>
  )
}

export default Cart
import React from 'react'
import serviceImage1 from '../assets/images/serviceImage1.png'
import serviceImage2 from '../assets/images/serviceImage2.png'
import serviceImage3 from '../assets/images/serviceImage3.png'
import serviceImage4 from '../assets/images/serviceImage4.png'
const Services = () => {
  return (
    <>
    <section id="services" className='mt-[52px]'>
        <div className='container px-6 lg:px-0'>
          <h2 className='text-base font-semibold font-poppins text-[#111827] lg:hidden mb-6'>Nexton® always with you</h2>
            <div className='lg:border lg:border-[#E5E7EB] lg:py-6 lg:px-10 rounded-[16px] flex justify-between flex-wrap'>
                {/* ------single services------ */}
                <div className='w-fit lg:w-[303px] lg:border-r h-[30px] flex gap-2 lg:gap-[13px] pl-[10px] items-center mb-6 lg:mb-0'>
                    <img src={serviceImage1} alt="" className='w-[24px] h-[24px]'/>
                    <div className=''>
                         <h2 className='font-poppins text-[14px] text-[#4B5563] lg:text-[18px] font-normal lg:font-semibold lg:text-[#111827] mt-[-10px]'>Free shipping</h2>
                    <p className='text-[#4B5563] font-poppins text-[14px] hidden lg:block'>On orders over $50.00</p>
                    </div>
                   
                </div>
                      <div className='w-fit lg:w-[303px] lg:border-r h-[30px] flex gap-2 lg:gap-[13px] pl-[10px] items-center mb-6 lg:mb-0'>
                        <img src={serviceImage2} alt="" className='w-[24px] h-[24px]'/>
                         <div>
                              <h2 className='font-poppins text-[14px] text-[#4B5563] lg:text-[18px] font-normal lg:font-semibold lg:text-[#111827] mt-[-10px]'>Very easy to return</h2>
                        <p className='text-[#4B5563] font-poppins text-[14px] hidden lg:block'>Just phone number</p>
                         </div>
                      
                      </div>
                            <div className='w-fit lg:w-[303px] lg:border-r h-[30px] flex gap-2 lg:gap-[13px] pl-[10px] items-center mb-6 lg:mb-0'>
                                  <img src={serviceImage3} alt="" className='w-[24px] h-[24px]'/>
                                   <div >
                                     <h2 className='font-poppins text-[14px] lg:text-[18px] font-normal text-[#4B5563] lg:font-semibold lg:text-[#111827] mt-[-10px]'>Worldwide delivery</h2>
                                  <p className='text-[#4B5563] font-poppins text-[14px] hidden lg:block'>Fast delivery worldwide</p>

                                   </div>
                                 
                            </div>
                                  <div className='w-fit lg:w-[303px]  h-[30px] flex gap-2 lg:gap-[13px] pl-[10px] items-center mb-6 lg:mb-0'>
                     <img src={serviceImage4} alt="" className='w-[24px] h-[24px]'/>
                         <div>
                                    <h2 className='font-poppins text-[14px] lg:text-[18px] font-normal text-[#4B5563] lg:font-semibold lg:text-[#111827] mt-[-10px]'>Refunds policy</h2>
                     <p className='text-[#4B5563] font-poppins text-[14px] hidden lg:block'>60 days return for any reason</p>
                         </div>
             
                                  </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Services
import React, { useState } from 'react'
import { Link } from 'react-router'

const Register = () => {
    const [formData,setformData]=useState({
  "email": null,
  "password": null,
  "role": "ADMIN",
  "username": null
});
const [allError,setAllError]=useState({
   nameError:"border-[#E5E7EB]",emailEroor:"border-[#E5E7EB]",passError:"border-[#E5E7EB]",confirmPassEroor:"border-[#E5E7EB]"
})
  return (
    <>
    <section className='Registration'>
        <div className="container px-[548px] mt-[40px] mb-[72px]">
             <div className='w-[440px] h-[550px]'>
         <h2 className='font-poppins font-semibold text-[36px] text-center mb-[60px]'>Register</h2>
    <form action="" >
        <div>
            <label className='text-[#111827] font-poppins font-semibold text-[16px] mb-[8px]'>Name</label>
<input type="text" onChange={(e)=>setformData((prev)=>({...prev,username:e.target.value}))} className={`border ${allError.nameError} bg-[#FFFFFF] rounded-[12px] w-[440px] h-[43px] mb-[24px]`}/>
        </div>
           <div>
            <label className='text-[#111827] font-poppins font-semibold text-[16px] mb-[8px]'>Email</label>
<input type="text" className={`border ${allError.emailEroor} bg-[#FFFFFF] rounded-[12px] w-[440px] h-[43px] mb-[24px]`}/>
        </div>
            <div>
            <label className='text-[#111827] font-poppins font-semibold text-[16px] mb-[8px]'>Password</label>
<input type="text" className={`border ${allError.passError} bg-[#FFFFFF] rounded-[12px] w-[440px] h-[43px] mb-[24px]`}/>
        </div>
            <div>
            <label className='text-[#111827] font-poppins font-semibold text-[16px] mb-[8px]'>Password(Again)</label>
<input type="text" className={`border ${allError.confirmPassEroor} bg-[#FFFFFF] rounded-[12px] w-[440px] h-[43px] mb-[24px]`}/>
        </div>
        <button className='bg-[#111827] w-[440px] h-[52px] text-white font-poppins font-medium text-[16px] rounded-[9999px]'>Continue</button>
    </form>
    <p className='text-[#4B5563] font-poppins font-normal text-[16px] text-center'>Already a member? <span className='text-[#0EA5E9]'>
   <Link to='/login'>Login</Link>
        </span></p>
    </div>
        </div>

    </section>
   
   
    </>
  )
}

export default Register
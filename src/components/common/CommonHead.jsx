import React from 'react'

const CommonHead = ({commoncon1,commoncon2}) => {
  return (
    <h2 className='text-[36px] font-poppins font-semibold text-[#111827]'>{commoncon1} <span className='font-poppins font-semibold text-[36px] text-[#4b556389]'>{commoncon2}</span></h2>
  )
}

export default CommonHead
import React from 'react'
import { Link} from 'react-router'
import { IoHomeOutline } from "react-icons/io5";
const Breadcrumbs = ({pageName,pageLink,subPagename,subPageLink}) => {
 
  return (
    <div className='flex gap-2 items-center text-gray-500'>
        <Link to={'/'} className='text-sm font-normal font-poppins text-second'><IoHomeOutline /></Link>
        <span className='text-sm font-normal font-poppins text-second'>/</span>
        <Link to={pageLink} className='text-sm font-normal font-poppins text-second'>{pageName}</Link>
        {
          subPagename&&
              <div className='flex gap-2'>
              <span className='text-sm font-normal font-poppins text-second'>/</span>
        <Link to={subPageLink} className='text-sm font-normal font-poppins text-gray-900'>{subPagename}</Link>
        </div>
        }
    
      
    </div>
  )
}

export default Breadcrumbs
import React, {  useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
// import { useLocation} from 'react-router'
 
import { Pagination } from 'antd';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
const Allproduct = () => {
  const [product,setProduct]=useState([])
  const [skipLimit,setskipLimit]=useState({limit:12,skip:0})
  const onChangeItem = (current, pageSize) => {
  console.log(current, pageSize);
  const myMath=(current-1)*pageSize
setskipLimit({limit:pageSize,skip:myMath})
};
useEffect(()=>{
   axios.get(`https://dummyjson.com/products?limit=${skipLimit.limit}&skip=${skipLimit.skip}&select=title,price,rating,stock,category,discountPercentage,images,thumbnail`)
     .then((res)=>{setProduct(res.data)})
  .catch((err)=>{console.log(err)})
},[skipLimit])
  //  const myLocation=useLocation()
  //  const currentPage=myLocation.pathname.split('/')[1].split('-').join(" ").split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  // // console.log(myLocation.pathname.split('/')[1])
  // console.log(currentPage)
 console.log(product)
  return (
    <>
    <section>
        <div className="container">
                  {/* <Breadcrumbs pageName={currentPage}/> */}
 <Breadcrumbs pageName={'All Product'}/>
 <div className='flex gap-5 flex-wrap mt-10 justify-center'>
  {
    product.products?.map((item)=>( <ProductCard  key={item.id} productImage={item.thumbnail} producttitle={item.title} pPrice={item.price} pCat={item.category} pDis={item.discountPercentage} pRating={item.rating} stock={item.stock}/>)

    )
  }
 
 </div>
 <div className='mt-10 flex justify-end mb-[10px] '>
    <Pagination
      showSizeChanger
      current={skipLimit.skip / skipLimit.limit + 1} 
      defaultCurrent={1}
      onChange={onChangeItem}
      total={product.total}
      align={'end'}
      pageSizeOptions={[10, 20, 50, 100]}
    />
 </div>

        </div>
    </section>
  
    </>
  )
}

export default Allproduct
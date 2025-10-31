// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router'
// import ProductCard from './ProductCard';

// const CategoryDetail = () => {
//     const params=useParams()
//     console.log(params)
//     const [products, setProducts] = useState([]);
//     const navigate=useNavigate()
//     const handleDetails=(productDetails)=>{
  
//   navigate(`/productDetails/${productDetails}`)
// }
//      useEffect(() => {
//     // example: https://dummyjson.com/products/category/smartphones
//     axios
//       .get(`https://dummyjson.com/products/category/${params.alu}`)
//       .then((res) => setProducts(res.data.products))
//       .catch((err) => console.log(err));
//   }, [params]);
//   return (
//     <>
//     <div className="container">
//          <div className='flex gap-5 flex-wrap mt-10 justify-center'>
//          {
//         products.map((product)=>(<ProductCard  key={product.id} productImage={product.thumbnail} producttitle={product.title} pPrice={product.price} pCat={product.category} pDis={product.discountPercentage} pRating={product.rating} stock={product.stock} detailsClick={()=>handleDetails(product.id)}/>))
//     }
//     </div>
//     </div>
   
   

//     </>
//   )
// }

// export default CategoryDetail
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ProductCard from "./ProductCard";

const CategoryDetail = () => {
  const { alu } = useParams();
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState(""); 
  const navigate = useNavigate();

  
  const handleDetails = (productId) => {
    navigate(`/productDetails/${productId}`);
  };

  // 🔽 Sort function
  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

 
  useEffect(() => {
    let apiUrl = `https://dummyjson.com/products/category/${alu}`;

    
    axios
      .get(apiUrl)
      .then((res) => {
        let sortedData = [...res.data.products];

        if (sortType === "priceLowHigh") {
          sortedData.sort((a, b) => a.price - b.price);
        } else if (sortType === "priceHighLow") {
          sortedData.sort((a, b) => b.price - a.price);
        } else if (sortType === "titleAZ") {
          sortedData.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortType === "ratingHighLow") {
          sortedData.sort((a, b) => b.rating - a.rating);
        }

        setProducts(sortedData);
      })
      .catch((err) => console.log(err));
  }, [alu, sortType]);

  return (
    <div className="container">
      {/* ---------- Header & Sort Dropdown ---------- */}
      <div className="flex justify-between items-center mt-10 mb-6">
        <h2 className="text-2xl font-semibold capitalize">
          {alu.replace("-", " ")}
        </h2>

        <select
          onChange={handleSortChange}
          value={sortType}
          className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none"
        >
          <option value="">Sort By</option>
          <option value="priceLowHigh">Price: Low → High</option>
          <option value="priceHighLow">Price: High → Low</option>
          <option value="titleAZ">Title: A → Z</option>
          <option value="ratingHighLow">Rating: High → Low</option>
        </select>
      </div>

      {/* ---------- Product Cards ---------- */}
      <div className="flex gap-5 flex-wrap justify-center">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              productImage={product.thumbnail}
              producttitle={product.title}
              pPrice={product.price}
              pCat={product.category}
              pDis={product.discountPercentage}
              pRating={product.rating}
              stock={product.stock}
              detailsClick={() => handleDetails(product.id)}
            />
          ))
        ) : (
          <p className="text-gray-500 mt-10">No products found...</p>
        )}
      </div>
    </div>
  );
};

export default CategoryDetail;

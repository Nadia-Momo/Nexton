import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layouts/LayoutOne'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import ProductDetail from './pages/productDetail'

const App = () => {
  const myRoute=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<LayoutOne/>}>
      <Route index element={<Home/>}/>
      <Route path="/checkOut" element={<Checkout/>}/>
<Route path='/productDetail' element={<ProductDetail/>}/>
    </Route>
  ))
  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
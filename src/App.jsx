import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layouts/LayoutOne'
import Home from './pages/Home'
import Checkout from './pages/Checkout'

import Local from './pages/Local'
import Allproduct from './pages/Allproduct'
import Login from './components/Login'
import Register from './components/Register'
import ProductDetail from './pages/ProductDetail'

const App = () => {
  const myRoute=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<LayoutOne/>}>
      <Route index element={<Home/>}/>
      <Route path="/checkOut" element={<Checkout/>}/>
<Route path='/productDetails/:alu' element={<ProductDetail/>}/>
<Route path='/all-product' element={<Allproduct/>}/>
<Route path='/local' element={<Local/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
    </Route>
  ))
  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
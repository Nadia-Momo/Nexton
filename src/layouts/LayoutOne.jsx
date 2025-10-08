import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ResponsiveNav from '../components/responsiveNav'

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <ResponsiveNav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default LayoutOne
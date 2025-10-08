import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Exploring from '../components/Exploring'
import Recommendation from '../components/Recommendation'
import Seller from '../components/Seller'
import Banner_container from '../components/Banner_container'

const Home = () => {
  return (
    <>
  <Banner/>  
  <Services/>
  <Exploring/>
 <Recommendation/>
 <Seller/>
 <Banner_container/>
 
    </>
  )
}

export default Home
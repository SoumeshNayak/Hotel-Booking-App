import React from 'react'
import './home.css'
import Navbar from '../../components/nevbar/Navbar'
import Hearder from '../../components/header/Hearder'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperty/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hearder/>
      <div className="homeContainer">
        <Featured/>
        <h1 className='homeTitle'>Browse by Property type</h1>
        <PropertyList/>

        <h1 className='homeTitle'>Home guests love</h1>
        <FeaturedProperties/>

        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home

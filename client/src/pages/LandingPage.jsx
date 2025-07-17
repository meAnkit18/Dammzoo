import React from 'react'
import HeroSection from '../components/HeroSection'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import NavBar from '../components/NavBar'
import FAQ from '../components/FAQ '
import Testimonal from '../components/Testimonal'





function LandingPage() {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <br />
    {/* <Gallery/> */}
    <Testimonal/>
    <br />
    <FAQ/>
    <CallToAction/>
    <br />
    <Footer/>
    
    
    </>
  )
}

export default LandingPage

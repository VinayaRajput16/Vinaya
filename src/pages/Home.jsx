/* eslint-disable no-unused-vars */
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Education from "../components/Education";
import Portfolio from "../components/Portfolio";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";
import React from 'react'

function Home() {
  return (
    <>
        <HeroSection/>
        <About/>
        <Education/>
        <Portfolio/>
        <ContactSection/>
        <Footer/>
    </>
  )
}

export default Home
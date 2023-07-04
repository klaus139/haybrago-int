import React from 'react'
import Banner from '../components/banner/Banner'
import Service from '../components/service/Service'
import About from '../components/about/About'
import Work from '../components/work/Work'
import Testimonial from '../components/testimonial/Testimonial'
import ChooseUs from '../components/whyUs/ChooseUs'
import HomeTeam from '../components/hometeam/HomeTeam'
import Contact from '../components/contact/Contact'

const Home = () => {
  return (
    <>
    <Banner />
    <Service />
    <About />
    <Work />
    <Testimonial />
    <ChooseUs />
    <HomeTeam />
    <Contact />
    
    </>
  )
}

export default Home
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Nav from '../Nav'

const Layout = () => {
  return (
    <>
    <Header />
    <Nav />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout


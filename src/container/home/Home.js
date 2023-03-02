import React from 'react'
import { SideBarLeft,SideBarRight } from '../../components'
import {About, Contact, Hero, Works, SingleWork, Experience, } from "../../container"
import { Navbar } from '../../components'
function Home() {
  return (
    
    <>
      <SideBarLeft/>
      <div className="app-main">
      <Navbar/>
     <Hero/>
      <About/>
      <Experience/>
      <Works/>
      <Contact/> 
      </div>

      <SideBarRight/>
    </>
  )
}

export default Home
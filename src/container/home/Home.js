import React from 'react'

import {About, Contact, Hero, Skills, Works, SingleWork, } from "../../container"
function Home() {
  return (
    <div>
     <Hero/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/> 
    </div>
  )
}

export default Home
import React from 'react'
import "./navbar.css"
import {Link as HLink} from 'react-scroll' 
import Link from 'react-router-dom'

function navbar() {
  return (
    <div className='nav-container'>
        <div className='nav'>
        
            <div>
                <h2>LOGO</h2>
            </div>
            <div className='menu-items'>
            <HLink to="/">Home</HLink>
            <HLink to="about">About</HLink>
            <HLink to="skills">Skills</HLink>
            <HLink to="works">Works</HLink>
            </div>

            <div>
            Let's Talk
            </div>
        </div>
    </div>
  )
}

export default navbar
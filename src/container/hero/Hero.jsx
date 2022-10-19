import React from 'react'
import "./hero.css"

function Hero() {
  return (
    <div className='hero-container'>
        <div className='hero'>
            <div className='hero-heading'>
                <h1>Kanithkar Kasinath</h1>
            </div>
            <div className='hero-image'>
                <img src="" alt="" />
            </div>
            <div className='hero-buttons'>
                <button>Download CV</button>
                <button>Lets' talk</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
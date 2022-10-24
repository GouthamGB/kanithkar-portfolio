import React from 'react'
import "./about.css"
import portrait from "../../images/portrait.jpg"

function About() {
  return (
    <div className='about-container' id='about'>
      <div className='about'>
        <div className='content'>
          <div className='content-text'>
            <h2>About me</h2>

            <div className=''>
              <p>
                Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>

              <p>
                Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

              </p>

              <p>


              </p>
            </div>
          </div>

          <div className='content-image'>
            <div className='portrait-container'>
            <img src={portrait} alt="portrait-image" />
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default About
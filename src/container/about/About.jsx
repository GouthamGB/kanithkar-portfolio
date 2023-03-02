import React from 'react'
import "./about.css"

import portrait from "../../images/portrait.jpg"
import { useEffect, useState } from 'react'
import sanityClient from '../../client'



function About() {

  const [skills, setSkills] = useState(null)

	useEffect(()=>{
    sanityClient
      .fetch(`*[_type=='skills'] {_id, name, "imageUrl": logo.asset -> url}`)
      .then((data)=>{setSkills(data)})
      .catch((error)=>{console.log(error)})
  },[])
  
  return (
    <div className='about-container' id='about'>
      <div className='about'>
        <div className='content'>

        <div className='content-wrapper'>
          <h2>About me</h2>
          <div className="content-main">
          <div className='content-text'>
            
            
            <div className=''>
              <p>
                Hello! My name is Kanithkar and I enjoy creating things that live on the internet. My interest in 3D animation started back in 2020 when I decided to try creating custom models in blender.
              </p>

              <p>
                Fast-forward to today, and I’ve had the privilege of working at a design studio. My main focus these days is creating story driven high-detailed animation works.

              </p>

              <p>


              </p>
            </div>
          </div>

          <div className='content-image'>
            <div className='portrait-container'>
              <div className='wrapper'>
                <div className='image-wrapper'>
            <img src={portrait} alt="portrait-image" />
            </div>
            </div>
            </div>
          </div>
          </div>



          </div>

          <div class="skills">
        <h2>Tooling</h2>
        <div className='skill-grid'>
            {
              skills && skills.map((skill, index)=>(
                <div>

                  <img src={skill.imageUrl} alt="" />
                  
                </div>
              ))
            }
       
        
        </div> 
        </div>

        </div>
        

      </div>
    </div>
  )
}

export default About
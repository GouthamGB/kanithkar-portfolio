import React from 'react'
import { useEffect, useState } from 'react'
import "./skills.css"
import sanityClient from '../../client'


function Skills() {
	
  const [skills, setSkills] = useState(null)

	useEffect(()=>{
    sanityClient
      .fetch(`*[_type=='skills'] {_id, name, "imageUrl": logo.asset -> url}`)
      .then((data)=>{setSkills(data)})
      .catch((error)=>{console.log(error)})
  },[])
  
  console.log(skills)

  return (
    <div className='skills-container' id='skills'>
        <div className='skills'>

        <h1>Skills</h1>

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
  )
}

export default Skills
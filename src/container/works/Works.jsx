import React from 'react'
import "./works.css"
import { useState,useEffect } from 'react'
import sanityClient from '../../client'

import WorkListItem from './WorkListItem'

function Works() {

  const [works, setWorks] = useState(null)
  const [img, setImg] = useState(null)
 
 

	useEffect(()=>{
    sanityClient
      .fetch(`*[_type=='works'] {_id, title, type, client, description, "imageUrl": image.asset -> url, video}`)
      .then((data)=>{setWorks(data)})
      .catch((error)=>{console.log(error)})
  },[])

  console.log(works)
  
  const changeImg = (img)=>{
    setImg(img)
  }

  

  return (
    <div className='works-container' id='works'>
        <div className='works'>

        <div className='work-main'>
          <div className='work-img'>
            <img src={img} alt="" onError={i => i.target.style.display='none'} />
          </div> 

          <div className='work-desc'>
            <h2>Works</h2>
            <div className="work-list">
              {
                works && works.map((work,index)=>(
                  <WorkListItem changeImg={changeImg} key={index} work={work}/>
                ))
                
              }
            </div>

          </div >

        </div>  


        </div>

    </div>
  )
}

export default Works
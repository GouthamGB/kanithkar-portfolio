import React from 'react'
import "./works.css"
import { useState,useEffect } from 'react'
import sanityClient from '../../client'
import {motion} from 'framer-motion'
import WorkListItem from './WorkListItem'


const workAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      
      when: 'beforeChildren',
      sstaggerChildren: 0.1,
      
    }
  }
}



const imgVarient = {
  hidden: {
    opacity:0
},
 visible: {
    opacity:1,
    transition: {
      delay: 3
    }
 },
 exit: {
  opacity: 0
 } 

}

function Works() {

  const [works, setWorks] = useState(null)
  const [img, setImg] = useState(null)
 
 

	useEffect(()=>{
    sanityClient
      .fetch(`*[_type=='works'] {_id, title, type, slug, client, description, "imageUrl": image.asset -> url, video}`)
      .then((data)=>{setWorks(data)})
      .catch((error)=>{console.log(error)})
  },[])

  
  
  const changeImg = (img)=>{
    setImg(img)
  }

  
  return (
    <div className='works-container' id='works'>
        <div className='works'>

        <div className='work-main'>
          <div className='work-img'>
            
            {img&&<img src={img} alt="" onError={i => i.target.style.display='none'} />}
            
          </div> 

          <div className='work-desc'>
            <h2>Works</h2>
            <motion.div className="work-list" variants={workAnimation} initial='hidden' whileInView='visible'>
              {
                works && works.map((work,index)=>(
                  <div>
                  <WorkListItem changeImg={changeImg} key={index} work={work}/>
                  </div>
                ))
                
              }
            </motion.div>

          </div >

        </div>  


        </div>

    </div>
  )
}

export default Works
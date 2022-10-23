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

const childWork = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    opacity: 1,
    x:0,
    transition: {
      type: 'spring',
            
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
            <motion.img src={img} alt="" onError={i => i.target.style.display='none'} variants={imgVarient} initial='hidden' animate='visible' exit='exit'/>
          </div> 

          <div className='work-desc'>
            <h2>WORKS</h2>
            <motion.div className="work-list" variants={workAnimation} initial='hidden' whileInView='visible'>
              {
                works && works.map((work,index)=>(
                  <motion.div variants={childWork}>
                  <WorkListItem changeImg={changeImg} key={index} work={work}/>
                  </motion.div>
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
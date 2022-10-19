import React from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"
import {HiArrowSmRight} from 'react-icons/hi'


function WorkListItem({work, changeImg}) {

  const [arr,setArr] = useState(null)

  const setHover = ()=>{
    changeImg(work.imageUrl)
    setArr(<HiArrowSmRight/>)
  }

  const leave = ()=>{
    changeImg(null)
    setArr(null)
  }
    
  return (
    <div className='work-one' onMouseOver={setHover} onMouseLeave={leave}>
                  <Link to={"/works/" + work.title} >
                    <div className='work-map-inner'>
                      <div className='work-map-inner-left'>  
                        {arr}
                        <h4>{work.title}</h4>
                      </div>
                      <div className='work-map-inner-right'>
                        <h4>{work.type}</h4>
                        </div>
                    </div>
                  </Link>
                  </div>
  )
}

export default WorkListItem
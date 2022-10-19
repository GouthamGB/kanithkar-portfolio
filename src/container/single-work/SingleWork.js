import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../../client'


function SingleWork() {
  const [post, setPost] = useState(null)
  const params = useParams()
  const title = params.title

  useEffect(()=>{
      sanityClient.fetch(`*[_type == document && title == ${title}] {title}`)
      .then((data)=>setPost(data))
      .catch((error)=> console.log(error))
  },[])

  return (
    
    <div>{post.title}</div>
  )
}

export default SingleWork
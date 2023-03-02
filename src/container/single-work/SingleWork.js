import React, { useEffect, useState } from 'react'
import { useParams,useLocation } from 'react-router-dom'
import sanityClient from '../../client'
import "./singlework.css"
import BlockContent from "@sanity/block-content-to-react";


function SingleWork() {
  const [singlePost, setSinglePost] = useState(null)
  const params = useParams()
  const slug = params.slug
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(()=>{
      sanityClient.fetch(`*[slug.current == "${slug}"] {title,
      _id,
      slug,
      type,
      date,
      client,
      description,
      "imageUrl": image.asset -> url,
      video
    }`)
      .then((data)=>setSinglePost(data))
      .catch((error)=> console.log(error))
  },[slug])
   useEffect(()=>{
    onTop()
   },[routePath])
 
 

  return (
    
    <div className='single-work'>
    <div className='work-image-wrapper'>
    <img src={singlePost&&singlePost[0].imageUrl}/>
    </div>
    <h2 className='work-title'>{singlePost&&singlePost[0].title}</h2>
    <div className="project-intro">

      <div className="project-data">
        <table>
          <tbody>
            <tr>
              <td>
                <h6>Category</h6>
              </td>
              <td>
                <ul><li>{singlePost&&singlePost[0].type}</li>
                
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Year</h6>
              </td>
              <td>
                <p>{singlePost&&singlePost[0].date}</p>
              </td>
            </tr>
            
            <tr>
              <td>
                <h6>Client</h6>
              </td>
              <td><p>{singlePost&&singlePost[0].client}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="project-description">
      <BlockContent
            blocks={singlePost&&singlePost[0].description}
            projectId="g427r89f"
            dataset="production"
          />
      </div>

      
    </div>

    <div className="video-wrapper">
    <iframe title="vimeo-player" src={singlePost&&singlePost[0].video} frameborder="0" allowfullscreen id="video"></iframe>
    </div>
    </div>
  )
}



export default SingleWork
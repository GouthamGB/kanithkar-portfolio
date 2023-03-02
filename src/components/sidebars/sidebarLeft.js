import React from 'react'
import {BsInstagram, BsFacebook, BsLinkedin, BsVimeo} from 'react-icons/bs'
import {IconContext} from 'react-icons'

function sidebarLeft() {
  return (
    <div className='socials'>
        <div className='socials-buffer'>
          
        </div>

        <div className='socials-buffer2'>
          <div className='social-icons'>
            <div className='icons-container'>
              <IconContext.Provider
              value={{ color: '#c0c0c0', size: '1.25rem' }}>
              <a href="">
                <BsInstagram/>
              </a>
              <a href="">
                <BsFacebook/>
              </a>
              <a href="https://www.linkedin.com/in/kanithkar-kasinath-556252250" target='_blank'>
                <BsLinkedin/>
              </a>
              <a href="https://vimeo.com/showcase/7656905">
                <BsVimeo/>
              </a>
              </IconContext.Provider>

            </div>
            <div className='line-container'>
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default sidebarLeft
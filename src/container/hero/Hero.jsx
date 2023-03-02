import React from 'react'
import "./hero.css"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from './particlesConfig';
import Typewriter from 'typewriter-effect'

function Hero() {

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log("done");
      }, []);

    
  return (<>
  <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
        />
  
    
    <div className='hero-container'>
        
        <div className='hero'>
            <div className='hero-heading'>
                <Typewriter onInit={(typewriter)=>{
                    typewriter.typeString("I am Kanithkar Kasinath")
                    .pauseFor(2000)
                    .deleteAll()
                    .start()        
                }}
                options={{
                    strings: ["Hello Everyone", "I animate stuff"],
                    autoStart: true,
                    loop: true
                }}
                />
                <h1 id='main-head'>Kanithkar Kasinath</h1>
            </div>
            <div className='hero-image'>
                <img src="" alt="" />
            </div>
            <div className='hero-buttons'>
                <button id="download">Download CV</button>
                <button id="talk">Lets' talk</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Hero
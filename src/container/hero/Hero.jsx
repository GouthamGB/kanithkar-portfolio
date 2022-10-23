import React from 'react'
import "./hero.css"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from './particlesConfig';
import Typewriter from 'typewriter-effect'

function Hero() {

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
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
                    strings: ["YO", "Habibi"],
                    autoStart: true,
                    loop: true
                }}
                />
                <h1>Kanithkar Kasinath</h1>
            </div>
            <div className='hero-image'>
                <img src="" alt="" />
            </div>
            <div className='hero-buttons'>
                <button>Download CV</button>
                <button>Lets' talk</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Hero
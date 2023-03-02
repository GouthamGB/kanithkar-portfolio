import {useState} from 'react'
import "./experience.css"


function Experience(){
    const [panel, setPanel] = useState(1)
    return(
    <div className='experience-container' id="experience">
        <div className="experience-outer">
        <div className='experience'>
        <h2>Experienence</h2>
            <div className='experience-inner'>
                <div className='tab-list'>
                    <button onClick={()=>setPanel(1)} className='tab-item'>Elementree</button>
                    <button onClick={()=>setPanel(2)} className='tab-item'>Freelancer</button>
                </div>
                <div className='tab-panel'>
                    <div hidden={panel!=1} className='jobs'>
                        <h3>Freelancer <span>@Elementree</span></h3>
                        <p>2022-present</p>
                        <ul>
                            <li>Working with industry standard animators and modeling experts</li>
                            <li>Collaborated with motion capture department for to collect and apply data for specific animations</li>
                            <li>Followed design guidelines, asset naming conventions and other technical constraints to produce results complaint with industy and platform standards.</li>
                        </ul>
                    </div>
                    <div hidden={panel!=2} className='jobs'>
                        <h3>Freelancer <span>@Fiver</span></h3>
                        <p>2019-2022</p>
                        <ul>
                            <li>Worked with other artists, animators and programmers to execute projects on time and within budget constraints</li>
                            <li>Worked with music artists for making 3D character animation and music visualizers</li>
                            <li>Featured in the list of top 3D animators in Fiverr.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>)
}


export default Experience
import './App.css';
import {Navbar} from "./components"
import {About, Contact, Hero, Skills, Works, SingleWork, Home} from "./container"
import {Routes, Route, Outlet} from 'react-router-dom'
import {AiOutlineFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {IconContext} from 'react-icons'



function App() {
  return (
    <div className="App">
      <div className='socials'>
        <div className='socials-buffer'>
          
        </div>

        <div className='socials-buffer2'>
          <div className='social-icons'>
            <div className='icons-container'>
              <IconContext.Provider
              value={{ color: 'blue', size: '1.5rem' }}>
              <a href="">
                <BsInstagram/>
              </a>
              <a href="">
                <BsInstagram/>
              </a>
              <a href="">
                <BsInstagram/>
              </a>
              <a href="">
                <BsInstagram/>
              </a>
              <a href="">
                <BsInstagram/>
              </a>
              </IconContext.Provider>

            </div>
            <div className='line-container'>
              
            </div>
          </div>
        </div>
      </div>
      <div className='app-main'>
      <Navbar/>
      
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        

        <Route path='/works/:title' element={<SingleWork/>}/>
      </Routes>
          
      </div>

      <div className='social-2'>
        <div className='socials-buffer'>
          
        </div>
        <div className='socials-buffer2'>
          <div className='social-icons'>
            <div className='icons-container'>
              <IconContext.Provider
              value={{ color: 'blue', size: '1.5rem' }}>
              <a href="">
                <BsInstagram/>
              </a>
              <a href="">
                <BsInstagram/>
              </a>
              <a href="">
                <BsInstagram/>
              </a>
              <a href="">
                <BsInstagram/>
              </a>
              <a href="">
                <BsInstagram/>
              </a>
              </IconContext.Provider>

            </div>
            <div className='line-container'>
              
            </div>
          </div>
        </div>


      </div>
      
    </div>
  );
}

export default App;

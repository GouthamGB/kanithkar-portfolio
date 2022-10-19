import './App.css';
import {Navbar} from "./components"
import {About, Contact, Hero, Skills, Works, SingleWork, Home} from "./container"
import {Routes, Route, Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className='background-header'>
      <Navbar/>
      
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        

        <Route path='/works/:title' element={<SingleWork/>}/>
      </Routes>
      
      
      </div>
      
    </div>
  );
}

export default App;
